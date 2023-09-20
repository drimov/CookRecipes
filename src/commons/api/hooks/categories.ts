import { CategoriesSchema, MealsSchema } from "@/pages/search/searchItems"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const urlCategories = "https://www.themealdb.com/api/json/v1/1/categories.php"

const urlMeals = `https://www.themealdb.com/api/json/v1/1`

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
