import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, X } from 'lucide-react'

interface TagsInputProps {
  tags: string[]
  setTags: (tags: string[]) => void
}

function TagsInput({ tags, setTags }: TagsInputProps) {
  const [newTag, setNewTag] = useState('')

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim()) && tags.length < 5) {
      setTags([...tags, newTag.trim()])
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="space-y-4">
      <label className="text-lg font-semibold text-foreground">
        Tags (Optional)
      </label>
      <div className="space-y-3">
        <div className="flex gap-2">
          <Input
            placeholder="Add a tag (e.g., calculus, python, organic-chemistry)"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            className="flex-1"
            disabled={tags.length >= 5}
          />
          <Button 
            type="button" 
            onClick={addTag}
            disabled={!newTag.trim() || tags.includes(newTag.trim()) || tags.length >= 5}
            variant="outline"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-2 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
        
        <p className="text-sm text-muted-foreground">
          Add up to 5 tags to help categorize your question. Use tags like "homework", "research", or specific topics.
        </p>
      </div>
    </div>
  )
}

export default TagsInput
