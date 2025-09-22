// src/components/WalletConnectButton.tsx
import React, { useState } from "react";
import { useWallet } from "@/contexts/WalletContext";
import { truncate } from "@/utils/string";
import { Wallet as WalletIcon } from "lucide-react";

export default function WalletConnectButton() {
  const { connected, connecting, address, connect, disconnect, tokenBalance, claimAirdrop } = useWallet();
  const [loadingClaim, setLoadingClaim] = useState(false);
  const [claimMsg, setClaimMsg] = useState<string | null>(null);

  async function onConnect() {
    try {
      await connect();
      setClaimMsg(null);
    } catch (err: any) {
      setClaimMsg(err?.message || "Failed to connect");
    }
  }

  async function onClaim() {
    setLoadingClaim(true);
    setClaimMsg(null);
    try {
      const r = await claimAirdrop();
      if (r.success) setClaimMsg(`Airdrop minted — tx ${r.txsig}`);
      else setClaimMsg(`Airdrop failed: ${r.error}`);
    } catch {
      setClaimMsg("Airdrop error");
    } finally {
      setLoadingClaim(false);
    }
  }

  if (connected) {
    return (
      <div className="flex items-center gap-2">
        <div className="text-sm text-muted-foreground mr-2">
          <WalletIcon className="inline-block mr-2" />
          <span className="font-mono">{truncate(address || "", 6, 4)}</span>
          {tokenBalance != null && <span className="ml-3 font-medium">{tokenBalance} ANSWR</span>}
        </div>

        <button onClick={() => disconnect()} className="border rounded px-3 py-1 text-sm">
          Disconnect
        </button>

        <button onClick={onClaim} disabled={loadingClaim} className="bg-primary text-white rounded px-3 py-1 text-sm">
          {loadingClaim ? "Claiming..." : "Claim 100 ANSWR"}
        </button>

        {claimMsg && <div className="ml-3 text-xs text-muted-foreground">{claimMsg}</div>}
      </div>
    );
  }

  return (
    <div>
      <button onClick={onConnect} disabled={connecting} className="border rounded px-3 py-1 text-sm flex items-center gap-2">
        <WalletIcon />
        {connecting ? "Connecting..." : "Connect Phantom"}
      </button>
    </div>
  );
}
