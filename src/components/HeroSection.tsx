import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function HeroSection() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
        Ask a question. Get a verifiable answer.
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Connect with experts and get verified answers to your questions through blockchain-powered verification.
      </p>
      <div className="pt-4">
        <Button asChild size="lg" className="text-lg px-8 py-6 bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90 text-[var(--accent-orange-foreground)]">
          <Link to="/ask">Ask a New Question</Link>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
