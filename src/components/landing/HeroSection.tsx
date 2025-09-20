import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, BookOpen, Award } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Yellow circular background */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-[var(--accent-yellow)] opacity-20 translate-x-1/3 -translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Left side content */}
          <div className="lg:w-1/2 z-10 space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Build Your Knowledge,
              <span className="block text-[var(--accent-orange)]">Choose Your Path</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Presenting AnswerChain, the knowledge platform of the future. We teach
              you how to get reliable answers verified through blockchain technology.
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-xl">
              <div className="flex">
                <Input 
                  type="text" 
                  placeholder="Search Questions..." 
                  className="rounded-l-lg h-12 text-base pr-4 focus-visible:ring-[var(--accent-yellow)]"
                />
                <Button 
                  className="h-12 rounded-l-none bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90 px-4"
                >
                  <Search className="h-5 w-5" />
                  <span className="ml-2">Search</span>
                </Button>
              </div>
            </div>
            
            {/* Logos or trust indicators */}
            <div className="flex items-center space-x-6 pt-8 opacity-70">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <span className="text-sm">Trusted Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-bold">2</span>
                </div>
                <span className="text-sm">Blockchain Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-bold">3</span>
                </div>
                <span className="text-sm">Expert Community</span>
              </div>
            </div>
          </div>
          
          {/* Right side image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative z-10">
            <div className="relative mx-auto max-w-md md:max-w-full">
              {/* Main circular background */}
              <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] rounded-full bg-[var(--accent-yellow)] opacity-80 z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 sm:right-20 bg-white p-3 rounded-xl shadow-lg z-20">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--accent-blue)]" />
              </div>
              <div className="absolute bottom-10 left-10 bg-white p-3 rounded-xl shadow-lg z-20">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--accent-orange)]" />
              </div>
              
              {/* Hero image from URL */}
              <div className="relative z-10 flex items-center justify-center">
                <img 
                  src="https://html.aqlova.com/educal/educal-rtl/assets/img/hero/hero-2/hero.png" 
                  alt="Student with books and backpack" 
                  className="object-contain z-10 w-auto h-auto max-h-[500px] max-w-full"
                  style={{ filter: 'drop-shadow(0px 10px 25px rgba(0, 0, 0, 0.15))' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
                    e.currentTarget.style.opacity = '0.5';
                  }}
                />
              </div>
              
              {/* User ratings */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-3 sm:px-4 rounded-full shadow-lg flex items-center gap-1 sm:gap-2 z-20">
                <div className="flex -space-x-1 sm:-space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--accent-blue)] border-2 border-white"></div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--accent-orange)] border-2 border-white"></div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--accent-yellow)] border-2 border-white"></div>
                </div>
                <div className="text-xs font-bold">4.9 <span className="text-muted-foreground text-[10px] sm:text-xs font-normal">(500+ Reviews)</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}