import { z } from "zod"

export const CategorySchema = z.object({
  idCategory: z.string(),
  strCategory: z.string(),
  strCategoryThumb: z.string(),
  strCategoryDescription: z.string(),
})
export const CategoriesSchema = z.object({
  categories: z.array(CategorySchema),
})

export const MealSchema = z.object({
  idMeal: z.string()?.nullable(),
  // strMeal: z.string()?.nullable(),
  strMeal: z.string(),
  strDrinkAlternate: z.string()?.nullable(),
  strCategory: z.string()?.nullable(),
  strArea: z.string()?.nullable(),
  strInstructions: z.string()?.nullable(),
  // strMealThumb: z.string()?.nullable(),
  strMealThumb: z.string(),
  strTags: z.string()?.nullable(),
  strYoutube: z.string()?.nullable(),
  strIngredient1: z.string()?.nullable(),
  strIngredient2: z.string()?.nullable(),
  strIngredient3: z.string()?.nullable(),

  strIngredient4: z.string()?.nullable(),
  strIngredient5: z.string()?.nullable(),
  strIngredient6: z.string()?.nullable(),
  strIngredient7: z.string()?.nullable(),
  strIngredient8: z.string()?.nullable(),
  strIngredient9: z.string()?.nullable(),
  strIngredient10: z.string()?.nullable(),
  strIngredient11: z.string()?.nullable(),
  strIngredient12: z.string()?.nullable(),
  strIngredient13: z.string()?.nullable(),
  strIngredient14: z.string()?.nullable(),
  strIngredient15: z.string()?.nullable(),
  strIngredient16: z.string()?.nullable(),
  strIngredient17: z.string()?.nullable(),
  strIngredient18: z.string()?.nullable(),
  strIngredient19: z.string()?.nullable(),
  strIngredient20: z.string()?.nullable(),
  strMeasure1: z.string()?.nullable(),
  strMeasure2: z.string()?.nullable(),
  strMeasure3: z.string()?.nullable(),
  strMeasure4: z.string()?.nullable(),
  strMeasure5: z.string()?.nullable(),
  strMeasure6: z.string()?.nullable(),
  strMeasure7: z.string()?.nullable(),
  strMeasure8: z.string()?.nullable(),
  strMeasure9: z.string()?.nullable(),
  strMeasure10: z.string()?.nullable(),
  strMeasure11: z.string()?.nullable(),
  strMeasure12: z.string()?.nullable(),
  strMeasure13: z.string()?.nullable(),
  strMeasure14: z.string()?.nullable(),
  strMeasure15: z.string()?.nullable(),
  strMeasure16: z.string()?.nullable(),
  strMeasure17: z.string()?.nullable(),
  strMeasure18: z.string()?.nullable(),
  strMeasure19: z.string()?.nullable(),
  strMeasure20: z.string()?.nullable(),
  strSource: z.string()?.nullable(),
  dateModified: z.string()?.nullable(),
})

export const MealsSchema = z.object({
  meals: z.array(MealSchema).nullable(),
})

export type Meal = z.infer<typeof MealSchema>
