import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { z } from "zod"
// Query the API
const urlCategories = "https://www.themealdb.com/api/json/v1/1/categories.php"

//------------ Schema zod pour categories

const CategorySchema = z.object({
  idCategory: z.string(),
  strCategory: z.string(),
  strCategoryThumb: z.string(),
  strCategoryDescription: z.string(),
})
const CategoriesSchema = z.object({
  categories: z.array(CategorySchema),
})

// type Category = z.infer<typeof CategorySchema>

export const useCategories = () => {
  const { data, error, status } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const result = await axios.get(urlCategories).then((res) => {
        const data = CategoriesSchema.safeParse(res.data)
        if (!data.success) {
          throw new Error(data.error.message)
        }
        return data.data
        // res.data
      })
      return result
    },
  })
  return { data, error, status }
  // console.log(response)
  //   const categories = response.data
}

//---------- Schema zod pour Meals

const urlMeals = `https://www.themealdb.com/api/json/v1/1`

const MealSchema = z.object({
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

const MealsSchema = z.object({
  meals: z.array(MealSchema),
})

export const useMeals = ({ searchTerm }: { searchTerm: string }) => {
  const { data, error, status } = useQuery({
    queryKey: ["meals", searchTerm],
    queryFn: async () => {
      const result = await axios
        .get(`${urlMeals}/search.php?s=${searchTerm}`)
        .then((res) => {
          const data = MealsSchema.safeParse(res.data)
          if (!data.success) {
            throw new Error(data.error.message)
          }
          return data.data
          // res.data
        })
      return result
    },
  })
  return { data, error, status }
}
