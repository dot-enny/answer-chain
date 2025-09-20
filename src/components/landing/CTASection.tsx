import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Verified Answers?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join our community today and start getting blockchain-verified answers to your questions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 py-6 bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90 text-[var(--accent-orange-foreground)]"
          >
            <Link to="/home">Explore Questions</Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-[var(--accent-blue)] text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/10"
          >
            <Link to="/ask">Ask a Question</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}