import {
  CategoriesSchema,
  MealsPerCategorySchema,
  MealsSchema,
} from "@/types/meal"

import { API_URL } from "@/commons/constants"
import { client } from "@/lib/client"

const URL_API = {
  CATEGORY: `${API_URL}/filter.php?c`,
  CATEGORIES: `${API_URL}/categories.php`,
  NAME: `${API_URL}/search.php?s`,
  RECIPE: `${API_URL}/lookup.php?i`,
}

const getCategories = async () => {
  return await client(URL_API.CATEGORIES, { zodSchema: CategoriesSchema })
}
const getMealByName = async (name: string) => {
  return await client(`${URL_API.NAME}=${name}`, { zodSchema: MealsSchema })
}
const getMealByCategory = async (category: string) => {
  return await client(`${URL_API.CATEGORY}=${category}`, {
    zodSchema: MealsPerCategorySchema,
  })
}
const getRecipe = async (id: string) => {
  return await client(`${URL_API.RECIPE}=${id}`, { zodSchema: MealsSchema })
}

export { getCategories, getMealByName, getMealByCategory, getRecipe }
