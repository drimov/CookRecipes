import { Button } from "@/components/ui/button"
import HighLightSkeleton from "@/components/skeleton/HighLight"
import { useMealCategories } from "@/commons/api/hooks/meal"

type HighLightProps = {
  categorySelected: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}
const Highlight = ({ categorySelected, setCategory }: HighLightProps) => {
  const { data, isLoading } = useMealCategories()

  const onSelectCategory = (category: string) => {
    setCategory(category)
  }

  return (
    <div className="flex flex-col items-center border-y-2 border-secondary py-4">
      <h3 className="text-xl font-semibold">Highlights</h3>
      <div className="m-4 flex flex-wrap justify-center gap-2">
        {isLoading ? (
          <HighLightSkeleton />
        ) : (
          <>
            <HighLightButton
              category="All"
              selectedCategory={categorySelected}
              handleSelectCategory={onSelectCategory}
            />
            {data?.categories.map((category) => (
              <HighLightButton
                key={category.strCategory}
                category={category.strCategory}
                selectedCategory={categorySelected}
                handleSelectCategory={onSelectCategory}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

type HighLightButtonProps = {
  category: string
  selectedCategory: string
  handleSelectCategory: (category: string) => void
}
const HighLightButton = ({
  category,
  selectedCategory,
  handleSelectCategory,
}: HighLightButtonProps) => {
  return (
    <Button
      variant={category === selectedCategory ? "default" : "ghost"}
      onClick={() => handleSelectCategory(category)}
      className="rounded-full"
    >
      {category}
    </Button>
  )
}

export default Highlight
