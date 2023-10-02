import { Meal } from "@/types/meal"
import MealCard from "../search/MealCard"
import MealCardListSkeleton from "@/components/skeleton/MealCardList"
import { Separator } from "@/components/ui/separator"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useRecipeList } from "@/commons/api/hooks/meal"

export default function Favorite() {
  const { profile } = useAuthContext()
  const data = useRecipeList({
    ids: profile?.favourites ?? [],
  })

  const favouritesList: Meal[] = []
  data.map((recipe) => {
    if (recipe.data && recipe.data?.meals?.[0]) {
      favouritesList.push(recipe.data?.meals?.[0])
    }
  })

  return (
    <div className="w-full space-y-6">
      <div>
        <h3 className="text-lg font-medium">Favourites</h3>
        <p className="text-sm text-muted-foreground">
          Your list of favourites recipes!
        </p>
      </div>
      <Separator />
      {profile?.favourites?.length === 0 && <p>No favourites</p>}
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {!data ? (
          <MealCardListSkeleton />
        ) : (
          favouritesList.map((meal) => (
            <MealCard meal={meal} key={meal.idMeal} />
          ))
        )}
      </div>
    </div>
  )
}
