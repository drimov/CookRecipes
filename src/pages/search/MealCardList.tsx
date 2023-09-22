import MealCard from "./MealCard"
import MealCardListSkeleton from "@/components/skeleton/MealCardList"
import { SearchType } from "@/hooks/useSearch"
import { useSearchMeal } from "@/commons/api/hooks/meal"

type MealCardListProps = {
  searchTerm: string
  searchType: SearchType
}
const MealCardList = ({ searchTerm, searchType }: MealCardListProps) => {
  const { data, isLoading } = useSearchMeal({
    searchTerm,
    searchType,
  })

  return (
    <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
      {isLoading ? (
        <MealCardListSkeleton />
      ) : data?.meals ? (
        data?.meals?.map((meal) => <MealCard meal={meal} key={meal.idMeal} />)
      ) : (
        <div className="w-full text-center text-lg">
          <p>
            Nothing with term :{" "}
            <span className="text-muted-foreground">{searchTerm}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default MealCardList
