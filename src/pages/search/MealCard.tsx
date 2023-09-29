import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Meal, MealPerCategory } from "@/types/meal"

import { useNavigate } from "react-router-dom"

type MealCardProps = {
  meal: Meal | MealPerCategory
}

const MealCard = ({ meal }: MealCardProps) => {
  const navigate = useNavigate()
  return (
    <Card
      className="mx-auto my-4 h-64 w-48 border-2 shadow-md transition-transform duration-300 hover:-translate-y-4 hover:cursor-pointer hover:border-primary dark:bg-muted"
      onClick={() => {
        navigate(`/recipe/${meal.idMeal}`)
      }}
    >
      <CardHeader className="m-0 h-48 w-full p-0">
        <CardTitle className="h-full w-full">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-t-md"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-20 w-full items-center justify-center text-ellipsis text-center text-xl">
        <p>{truncateTitle(meal.strMeal)}</p>
      </CardContent>
    </Card>
  )
}

const truncateTitle = (title: string, maxLength: number = 15) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "..."
  }
  return title
}

export default MealCard
