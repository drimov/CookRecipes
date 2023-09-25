import IngredientList from "./ingredient/IngredientList"
import InstructionList from "./instruction/InstructionList"
import Loading from "@/components/loading"
import { useParams } from "react-router-dom"
import { useRecipe } from "@/commons/api/hooks/meal"

const Recipe = () => {
  const { id } = useParams()
  const { data: recipe, isLoading } = useRecipe({ id })

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col px-4 md:my-8 lg:my-16">
      <h1 className="bg-primary p-4 text-center text-3xl font-semibold text-secondary dark:text-secondary-foreground md:p-8 md:text-left md:text-4xl lg:text-5xl">
        {recipe?.strMeal}
      </h1>
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
