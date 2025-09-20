import { academicCategories } from '@/data/mockData'

interface CategorySelectorProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

function CategorySelector({ selectedCategory, setSelectedCategory }: CategorySelectorProps) {
  return (
    <div className="space-y-4">
      <label className="text-lg font-semibold text-foreground">
        Academic Category
      </label>
      <div className="flex flex-wrap gap-2">
        {academicCategories.map((category) => {
          const isSelected = selectedCategory === category.id
          
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full border-2 transition-all text-sm font-medium whitespace-nowrap ${
                isSelected 
                  ? 'border-[var(--accent-orange)] bg-[var(--accent-orange)] text-white' 
                  : 'border-border hover:border-[var(--accent-orange)]/50 hover:bg-muted/50'
              }`}
            >
              {category.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CategorySelector
