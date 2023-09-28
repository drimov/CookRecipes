import { Meal } from "@/types/meal"
import { Separator } from "@radix-ui/react-separator"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useNavigate } from "react-router-dom"
import { useRecipeList } from "@/commons/api/hooks/meal"

export default function Favorite() {
  const navigate = useNavigate()
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
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Favourites</h3>
        <p className="text-sm text-muted-foreground">
          Your list of favourites recipes!
        </p>
      </div>
      <Separator />
      <ul>
        {favouritesList?.map((recipe) => (
          <li
            key={recipe.idMeal}
            onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
          >
            {recipe.strMeal}
          </li>
        ))}
        {profile?.favourites?.length === 0 && <li>No favourites</li>}
      </ul>
    </div>
  )
}
