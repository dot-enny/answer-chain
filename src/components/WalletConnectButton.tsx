// src/components/WalletConnectButton.tsx (FIXED VERSION)
import React, { useState } from "react";
import { useWallet } from "@/contexts/WalletContext";
import { truncate } from "@/utils/string";
import { Wallet as WalletIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Fixed wallet connect button with proper styling and click handling
 */
export default function WalletConnectButton() {
  const { connected, connecting, address, connect, disconnect, tokenBalance, claimAirdrop } = useWallet();
  const [loadingClaim, setLoadingClaim] = useState(false);
  const [claimMsg, setClaimMsg] = useState<string | null>(null);

  async function onConnect() {
    console.log("[WalletConnectButton] connect clicked");
    try {
      // Check for Solana provider
      const sol = (window as any).solana;
      if (!sol) {
        const install = window.confirm("Phantom wallet not detected. Open Phantom website to install?");
        if (install) window.open("https://phantom.app/", "_blank");
        return;
      }
      if (!sol.isPhantom) {
        console.warn("[WalletConnectButton] provider present but not Phantom. provider.isPhantom:", sol.isPhantom);
      }
      
      await connect();
      console.log("[WalletConnectButton] connect() returned, connected:", (window as any).solana?.isConnected);
    } catch (err: any) {
      console.error("[WalletConnectButton] connect error:", err);
      if (err?.message?.includes("user rejected")) {
        alert("Connection request was rejected in the wallet.");
      } else {
        alert("Failed to connect wallet. Check the console for details and ensure the Phantom extension is enabled.");
      }
    }
  }

  async function onDisconnect() {
    try {
      await disconnect();
    } catch (e) {
      console.error("disconnect error", e);
    }
  }

  async function onClaim() {
    setLoadingClaim(true);
    setClaimMsg(null);
    try {
      const r = await claimAirdrop();
      if (r.success) {
        setClaimMsg(`Airdrop minted — tx ${r.txsig}`);
      } else {
        setClaimMsg(`Airdrop failed: ${r.error}`);
      }
    } catch (err) {
      console.error("claim error", err);
      setClaimMsg("Airdrop error — see console");
    } finally {
      setLoadingClaim(false);
    }
  }

  if (connected) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <WalletIcon className="h-4 w-4" />
            <span className="font-mono">{truncate(address || "", 6, 4)}</span>
          </div>
          {tokenBalance != null && (
            <span className="font-medium">{tokenBalance} ANSWR</span>
          )}
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onDisconnect}
            className="flex-1"
          >
            Disconnect
          </Button>

          <Button 
            size="sm" 
            onClick={onClaim} 
            disabled={loadingClaim}
            className="flex-1"
          >
            {loadingClaim ? "Claiming..." : "Claim 100 ANSWR"}
          </Button>
        </div>

        {claimMsg && (
          <div className="text-xs text-muted-foreground mt-1 break-words">
            {claimMsg}
          </div>
        )}
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onConnect}
      disabled={connecting}
      className="w-full flex items-center gap-2"
    >
      <WalletIcon className="h-4 w-4" />
      {connecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
}