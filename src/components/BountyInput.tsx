import { Input } from '@/components/ui/input'
import { Trophy } from 'lucide-react'

interface BountyInputProps {
  bounty: string
  setBounty: (bounty: string) => void
}

function BountyInput({ bounty, setBounty }: BountyInputProps) {
  return (
    <div className="space-y-3">
      <label className="text-lg font-semibold text-foreground">
        Bounty (Optional)
      </label>
      <div className="flex items-center gap-3">
        <Trophy className="h-5 w-5 text-[var(--accent-orange)]" />
        <Input
          placeholder="e.g., 100 tokens"
          value={bounty}
          onChange={(e) => setBounty(e.target.value)}
          className="max-w-xs"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Offer a bounty to incentivize high-quality answers. Higher bounties typically get more attention.
      </p>
    </div>
  )
}

export default BountyInput
