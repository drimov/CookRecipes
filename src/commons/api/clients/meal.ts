import {
  CategoriesSchema,
  MealsPerCategorySchema,
  MealsSchema,
} from "@/types/meal"

import { API_MEAL } from "@/commons/constants"
import { client } from "@/lib/client"

const getCategories = async () => {
  return await client(API_MEAL.CATEGORIES, { zodSchema: CategoriesSchema })
}
const getMealByName = async (name: string) => {
  return await client(`${API_MEAL.NAME}=${name}`, { zodSchema: MealsSchema })
}
const getMealByCategory = async (category: string) => {
  return await client(`${API_MEAL.CATEGORY}=${category}`, {
    zodSchema: MealsPerCategorySchema,
  })
}
const getRecipe = async (id: string) => {
  return await client(`${API_MEAL.RECIPE}=${id}`, { zodSchema: MealsSchema })
}

export { getCategories, getMealByName, getMealByCategory, getRecipe }
