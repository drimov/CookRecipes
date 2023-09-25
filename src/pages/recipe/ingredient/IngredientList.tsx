import { Ingredient, Meal } from "@/types/meal"

import IngredientItem from "."

type IngredientListProps = {
  recipe?: Meal
}
const IngredientList = ({ recipe }: IngredientListProps) => {
  const ingredients = recipe ? getIngredients(recipe) : null
  return (
    <div className="col-span-1 flex flex-col md:p-8 lg:col-span-2">
      <h2 className="text-center text-xl font-semibold md:text-left md:text-2xl lg:text-3xl">
        Ingredients
      </h2>
      <div className="flex flex-wrap justify-center gap-4 py-4 md:justify-start">
        {ingredients?.map((ingredient, index) => (
          <IngredientItem key={index} item={ingredient} />
        ))}
      </div>
    </div>
  )
}

const getIngredients = (recipe: Meal): Ingredient[] => {
  const ingredients: Ingredient[] = []
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}` as keyof Meal
    const measureKey = `strMeasure${i}` as keyof Meal

    const ingredient = recipe[ingredientKey]
    const measure = recipe[measureKey]

    if (
      ingredient &&
      ingredient.trim() !== "" &&
      measure &&
      measure.trim() !== ""
    ) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure.trim(),
      })
    }
  }

  return ingredients
}

export default IngredientList
