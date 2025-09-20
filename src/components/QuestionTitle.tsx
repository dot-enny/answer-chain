import { Input } from '@/components/ui/input'

interface QuestionTitleProps {
  title: string
  setTitle: (title: string) => void
}

function QuestionTitle({ title, setTitle }: QuestionTitleProps) {
  return (
    <div className="space-y-3">
      <label className="text-lg font-semibold text-foreground">
        Question Title
      </label>
      <Input
        placeholder="e.g., How do I solve this differential equation with boundary conditions?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-lg p-4 h-auto"
        required
      />
      <p className="text-sm text-muted-foreground">
        Be specific and summarize your problem in one line. A good title helps others find and answer your question.
      </p>
    </div>
  )
}

export default QuestionTitle
