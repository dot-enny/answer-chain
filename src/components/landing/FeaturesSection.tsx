import { Video, BookOpen, Award } from 'lucide-react'

export function FeaturesSection() {
  return (
    <div className="py-16 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background rounded-xl border border-border p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[var(--accent-orange)]/10 flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-[var(--accent-orange)]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Video Answers</h3>
            <p className="text-muted-foreground">Get access to detailed video explanations from experts in various fields.</p>
          </div>
          
          <div className="bg-background rounded-xl border border-border p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[var(--accent-yellow)]/10 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-[var(--accent-yellow)]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Versatile Topics</h3>
            <p className="text-muted-foreground">Explore a wide range of subjects with verified answers on our platform.</p>
          </div>
          
          <div className="bg-background rounded-xl border border-border p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[var(--accent-blue)]/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-[var(--accent-blue)]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Community</h3>
            <p className="text-muted-foreground">Connect with verified experts who provide blockchain-secured answers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}