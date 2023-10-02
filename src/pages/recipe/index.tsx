import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import IngredientList from "./ingredient/IngredientList"
import InstructionList from "./instruction/InstructionList"
import { Profile } from "@/types/database"
import RecipeSkeleton from "@/components/skeleton/recipe"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useParams } from "react-router-dom"
import { useRecipe } from "@/commons/api/hooks/meal"
import { useState } from "react"
import { useUpdateProfile } from "@/commons/api/hooks/profile"

const getFavourites = (profile: Profile, idFavourite: string) => {
  const isExistFavourite = profile?.favourites?.includes(idFavourite) ?? false
  const newFarouvites: string[] = isExistFavourite
    ? profile.favourites?.filter((id) => id !== idFavourite) ?? []
    : [...(profile?.favourites ?? []), idFavourite]
  return newFarouvites
}
const Recipe = () => {
  const { id } = useParams()
  const { data: recipe, isLoading } = useRecipe({ id })
  const { profile, setProfile, user } = useAuthContext()
  const [isFavourite, setIsFavourite] = useState(
    profile?.favourites?.includes(id!) ?? false
  )

  const mutationProfile = useUpdateProfile({
    onError: () => {},
    onSuccess: () => {
      setIsFavourite(!isFavourite)
      const newFarouvites = getFavourites(profile!, id!)
      setProfile({
        ...profile!,
        favourites: newFarouvites,
      })
    },
  })

  const handleFavourite = async (idMeal: string) => {
    const newFarouvites = getFavourites(profile!, idMeal)

    // add or remove from favourites
    await mutationProfile.mutateAsync({
      ...profile,
      favourites: newFarouvites,
    })
  }

  return isLoading ? (
    <RecipeSkeleton />
  ) : (
    <div className="flex flex-col px-4 md:my-8 lg:my-16">
      <div className="flex w-full flex-row items-center justify-between bg-primary p-4 md:p-8">
        <h1 className="text-center text-3xl font-semibold text-secondary dark:text-secondary-foreground lg:text-5xl">
          {recipe?.strMeal}
        </h1>
        {user ? (
          <Button
            variant={isFavourite ? "destructive" : "outline"}
            onClick={() => handleFavourite(recipe?.idMeal ?? "")}
            disabled={mutationProfile.isLoading}
            aria-label="Favourite"
          >
            <Heart
              className={
                isFavourite
                  ? "text-secondary dark:text-secondary-foreground"
                  : "text-primary"
              }
            />
          </Button>
        ) : null}
      </div>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-8 md:py-8 lg:grid-cols-3">
        <div className="col-span-1 py-4 lg:col-span-1">
          <img
            src={recipe?.strMealThumb}
            alt={recipe?.strMeal}
            className="rounded-full ring-4 ring-primary md:ring-8"
          />
        </div>
        <IngredientList recipe={recipe} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center gap-4 py-4 md:justify-start">
          <p className="rounded-full bg-primary p-4 text-secondary dark:text-secondary-foreground">
            {recipe?.strCategory}
          </p>
        </div>
      </div>
      <InstructionList recipe={recipe} />
    </div>
  )
}

export default Recipe
