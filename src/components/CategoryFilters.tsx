import { Button } from '@/components/ui/button'
import { academicCategories, mockQuestions } from '@/data/mockData'
import { Check } from 'lucide-react'

interface CategoryFiltersProps {
  selectedCategory: string | null
  onCategoryFilter: (categoryId: string | null) => void
}

function CategoryFilters({ selectedCategory, onCategoryFilter }: CategoryFiltersProps) {
  // Calculate question counts for each category
  const getQuestionCount = (categoryId: string) => {
    return mockQuestions.filter(q => q.category === categoryId).length
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Academic Categories</h2>
        {selectedCategory && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onCategoryFilter(null)}
          >
            Clear Filter
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {academicCategories.map((category) => {
          const isActive = selectedCategory === category.id
          return (
            <Button
              key={category.id}
              variant="outline"
              size="sm"
              onClick={() => onCategoryFilter(category.id)}
              className={`justify-start h-auto p-3 relative ${
                isActive 
                  ? 'border-primary bg-primary/5 hover:bg-primary/10' 
                  : 'hover:bg-accent'
              }`}
            >
              <div className="flex items-center gap-2 w-full">
                <span className="text-base">{category.icon}</span>
                <div className="text-left flex-1">
                  <div className="font-medium text-sm">{category.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {getQuestionCount(category.id)} question{getQuestionCount(category.id) !== 1 ? 's' : ''}
                  </div>
                </div>
                {isActive && (
                  <Check className="h-4 w-4 text-primary ml-auto flex-shrink-0" />
                )}
              </div>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryFilters
