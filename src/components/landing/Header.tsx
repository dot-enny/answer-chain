import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import AnswerChainIcon from '@/components/AnswerChainIcon'

export function Header() {
  return (
    <header className="w-full py-4 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <AnswerChainIcon className="w-8 h-8" />
          <span className="font-bold text-xl">AnswerChain</span>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link to="/home">Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/ask">Ask a Question</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}