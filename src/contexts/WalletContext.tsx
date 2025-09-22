import React, { createContext, useContext, useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

const DEFAULT_RPC = process.env.REACT_APP_RPC_URL || "";
const TOKEN_MINT = process.env.REACT_APP_TOKEN_MINT || "";
const API_URL = process.env.REACT_APP_API_URL || ""; // if empty, fetch uses relative path

type WalletContextValue = {
  publicKey: PublicKey | null;
  address: string | null;
  connected: boolean;
  connecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  tokenBalance: number | null;
  refreshTokenBalance: () => Promise<void>;
  claimAirdrop: () => Promise<{ success: boolean; txsig?: string; error?: string }>;
};

const WalletContext = createContext<WalletContextValue | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [tokenBalance, setTokenBalance] = useState<number | null>(null);
  const connection = new Connection(DEFAULT_RPC, "confirmed");

  useEffect(() => {
    const sol = (window as any).solana;
    if (sol && sol.isPhantom) {
      const onConnect = (pk: any) => {
        const s = pk?.toString?.() ?? (sol.publicKey?.toString?.() ?? null);
        if (s) {
          setPublicKey(new PublicKey(s));
          setAddress(s);
          setConnected(true);
        }
      };
      const onDisconnect = () => {
        setPublicKey(null);
        setAddress(null);
        setConnected(false);
        setTokenBalance(null);
      };
      sol.on("connect", onConnect);
      sol.on("disconnect", onDisconnect);
      // seed existing connection
      if (sol.isConnected && sol.publicKey) {
        onConnect(sol.publicKey);
      }
      return () => {
        try {
          sol.removeListener("connect", onConnect);
          sol.removeListener("disconnect", onDisconnect);
        } catch (e) {}
      };
    }
  }, []);

  useEffect(() => {
    if (publicKey) refreshTokenBalance().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  async function connect() {
    const sol = (window as any).solana;
    if (!sol || !sol.isPhantom) {
      window.open("https://phantom.app/", "_blank");
      throw new Error("Phantom wallet not installed");
    }
    setConnecting(true);
    try {
      const resp = await sol.connect();
      const pk = resp.publicKey?.toString?.();
      if (pk) {
        setPublicKey(new PublicKey(pk));
        setAddress(pk);
        setConnected(true);
        await refreshTokenBalance();
      }
    } finally {
      setConnecting(false);
    }
  }

  async function disconnect() {
    const sol = (window as any).solana;
    try {
      await sol.disconnect();
    } catch {}
    setPublicKey(null);
    setAddress(null);
    setConnected(false);
    setTokenBalance(null);
  }

  async function refreshTokenBalance() {
    if (!publicKey) {
      setTokenBalance(null);
      return;
    }
    try {
      const mintPk = new PublicKey(TOKEN_MINT);
      const resp = await connection.getParsedTokenAccountsByOwner(publicKey, { mint: mintPk });
      let amount = 0;
      for (const { account } of resp.value) {
        const parsed = (account.data as any)?.parsed;
        if (parsed?.info?.tokenAmount) {
          const tokenAmount = parsed.info.tokenAmount;
          const ui = tokenAmount.uiAmount ?? Number(tokenAmount.amount || 0) / Math.pow(10, tokenAmount.decimals || 0);
          amount += ui;
        }
      }
      setTokenBalance(amount);
    } catch (err) {
      console.error("refreshTokenBalance error:", err);
      setTokenBalance(null);
    }
  }

  async function claimAirdrop() {
    if (!address) return { success: false, error: "Wallet not connected" };
    try {
      const url = API_URL ? `${API_URL}/api/claim-airdrop` : `/api/claim-airdrop`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet: address }),
      });
      const json = await res.json();
      if (!res.ok) return { success: false, error: json?.error || "Claim failed" };
      await refreshTokenBalance();
      return { success: true, txsig: json.txsig };
    } catch (err: any) {
      return { success: false, error: err?.message || "Network error" };
    }
  }

  return (
    <WalletContext.Provider
      value={{
        publicKey,
        address,
        connected,
        connecting,
        connect,
        disconnect,
        tokenBalance,
        refreshTokenBalance,
        claimAirdrop,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used inside WalletProvider");
  return ctx;
}
