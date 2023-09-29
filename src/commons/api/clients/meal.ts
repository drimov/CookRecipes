import {
  CategoriesSchema,
  MealsPerCategorySchema,
  MealsSchema,
} from "@/types/meal"

import { URL_API } from "@/commons/constants"
import { client } from "@/lib/client"

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
