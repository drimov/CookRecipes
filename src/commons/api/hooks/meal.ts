import { CategoriesSchema, MealsSchema } from "@/types/meal"

import { API_URL } from "@/commons/constants"
import { client } from "@/lib/client"
import { useQuery } from "@tanstack/react-query"

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

type useSearchMealNameProps = {
  searchTerm: string
}
export const useSearchMealName = ({ searchTerm }: useSearchMealNameProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["meals", searchTerm],
    queryFn: async () => {
      return await client(`${API_URL}/search.php?s=${searchTerm}`, {
        zodSchema: MealsSchema,
      })
    },
  })
  return { data, error, isLoading }
}
