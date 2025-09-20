import { useParams } from 'react-router-dom'

function QuestionDetail() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">
        Question Detail - ID: {id}
      </h1>
      <p className="text-muted-foreground">
        This will show the full question and all answers.
      </p>
    </div>
  )
}

export default QuestionDetail