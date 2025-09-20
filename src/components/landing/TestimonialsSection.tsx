export function TestimonialsSection() {
  return (
    <div className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[var(--accent-orange)] mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold">What Our Users Say <br />About Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[var(--accent-yellow)] mb-4 overflow-hidden flex items-center justify-center">
                <div className="font-bold text-lg text-[var(--accent-yellow-foreground)]">JD</div>
              </div>
              <h3 className="font-semibold text-lg mb-1">James Davis</h3>
              <p className="text-sm text-muted-foreground mb-2">Software Developer</p>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="text-[var(--accent-yellow)]">★</div>
                ))}
              </div>
              <p className="text-center text-muted-foreground">
                "AnswerChain helped me get verified answers that built my career, and I'm very happy with the knowledge I've gained."
              </p>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[var(--accent-yellow)] mb-4 overflow-hidden flex items-center justify-center">
                <div className="font-bold text-lg text-[var(--accent-yellow-foreground)]">AL</div>
              </div>
              <h3 className="font-semibold text-lg mb-1">Aisha Lee</h3>
              <p className="text-sm text-muted-foreground mb-2">Data Scientist</p>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="text-[var(--accent-yellow)]">★</div>
                ))}
              </div>
              <p className="text-center text-muted-foreground">
                "The blockchain verification feature ensures I get reliable answers. This platform has completely transformed my learning process."
              </p>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[var(--accent-yellow)] mb-4 overflow-hidden flex items-center justify-center">
                <div className="font-bold text-lg text-[var(--accent-yellow-foreground)]">MN</div>
              </div>
              <h3 className="font-semibold text-lg mb-1">Michael Nguyen</h3>
              <p className="text-sm text-muted-foreground mb-2">UI/UX Designer</p>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="text-[var(--accent-yellow)]">★</div>
                ))}
              </div>
              <p className="text-center text-muted-foreground">
                "AnswerChain connected me with experts who provided clear, verified solutions to my design challenges. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}