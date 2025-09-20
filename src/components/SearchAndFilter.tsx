import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Filter } from 'lucide-react'
import { academicCategories } from '@/data/mockData'

interface SearchAndFilterProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: string | null
  filteredQuestionsCount: number
}

function SearchAndFilter({ 
  searchQuery, 
  onSearchChange, 
  selectedCategory, 
  filteredQuestionsCount 
}: SearchAndFilterProps) {
  const selectedCategoryData = selectedCategory 
    ? academicCategories.find(cat => cat.id === selectedCategory)
    : null

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {filteredQuestionsCount} question{filteredQuestionsCount !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {selectedCategoryData && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Filtering by:</span>
          <Badge variant="default" className="gap-1">
            <span>{selectedCategoryData.icon}</span>
            {selectedCategoryData.name}
          </Badge>
        </div>
      )}
    </div>
  )
}

export default SearchAndFilter
