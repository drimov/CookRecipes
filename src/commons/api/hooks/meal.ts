import {
  getCategories,
  getMealByCategory,
  getMealByName,
  getRecipe,
} from "../clients/meal"
import { useQueries, useQuery } from "@tanstack/react-query"

export const useMealCategories = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return await getCategories()
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
        return await getMealByCategory(newSearchTerm)
      } else if (searchType === "name") {
        return await getMealByName(newSearchTerm)
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
      if (!id) throw new Error("No recipe id")
      return await getRecipe(id)
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
        return getRecipe(id)
      },
    })),
  })
  return recipeList
}
