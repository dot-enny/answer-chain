import { Textarea } from '@/components/ui/textarea'

interface QuestionContentProps {
  content: string
  setContent: (content: string) => void
}

function QuestionContent({ content, setContent }: QuestionContentProps) {
  return (
    <div className="space-y-3">
      <label className="text-lg font-semibold text-foreground">
        Question Details
      </label>
      <Textarea
        placeholder="Describe your question in detail. Include:
• What you've tried so far
• Specific examples or context
• Any relevant equations, code, or diagrams
• What outcome you're expecting

The more details you provide, the better answers you'll receive."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[200px] resize-none text-base"
        required
      />
    </div>
  )
}

export default QuestionContent
