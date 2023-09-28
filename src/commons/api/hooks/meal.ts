import {
  CategoriesSchema,
  MealsPerCategorySchema,
  MealsSchema,
} from "@/types/meal"
import { useQueries, useQuery } from "@tanstack/react-query"

import { API_URL } from "@/commons/constants"
import { client } from "@/lib/client"

export const useMealCategories = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return await client(`${API_URL}/categories.php`, {
        zodSchema: CategoriesSchema,
      })
    },
  })
  return { data, error, isLoading }
}

type useSearchMealProps = {
  searchTerm: string
  searchType: "category" | "name"
}
export const useSearchMeal = ({
  searchTerm,
  searchType,
}: useSearchMealProps) => {
  const newSearchTerm =
    searchTerm === "All" && searchType === "category" ? "" : searchTerm
  const newSearchType =
    searchTerm === "All" && searchType === "category" ? "name" : searchType
  const { data, error, isLoading } = useQuery({
    queryKey: ["meals", newSearchType, newSearchTerm],
    queryFn: async () => {
      if (searchType === "category") {
        return await client(`${API_URL}/filter.php?c=${newSearchTerm}`, {
          zodSchema: MealsPerCategorySchema,
        })
      } else if (searchType === "name") {
        return await client(`${API_URL}/search.php?s=${newSearchTerm}`, {
          zodSchema: MealsSchema,
        })
      }
    },
  })

  return { data, error, isLoading }
}

type useRecipeProps = {
  id?: string
}
export const useRecipe = ({ id }: useRecipeProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["recipe", id],
    queryFn: async () => {
      return await client(`${API_URL}/lookup.php?i=${id}`, {
        zodSchema: MealsSchema,
      })
    },
  })
  return { data: data?.meals?.[0], error, isLoading }
}

type useRecipeListProps = {
  ids: string[]
}
export const useRecipeList = ({ ids }: useRecipeListProps) => {
  const recipeList = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["recipe", id],
      queryFn: async () => {
        return await client(`${API_URL}/lookup.php?i=${id}`, {
          zodSchema: MealsSchema,
        })
      },
    })),
  })
  return recipeList
}
