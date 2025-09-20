import { Header } from '@/components/landing/Header'
import { HeroSection } from '@/components/landing/HeroSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { TestimonialsSection } from '@/components/landing/TestimonialsSection'
import { CTASection } from '@/components/landing/CTASection'
import { Footer } from '@/components/landing/Footer'

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default LandingPage