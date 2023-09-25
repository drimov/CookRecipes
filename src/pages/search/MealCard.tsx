import { AlarmCheck, Star, UtensilsCrossed } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Meal, MealPerCategory } from "@/types/meal"

import { useNavigate } from "react-router-dom"

type MealCardProps = {
  meal: Meal | MealPerCategory
}

const MealCard = ({ meal }: MealCardProps) => {
  const navigate = useNavigate()
  return (
    <Card
      className="mx-auto my-4 h-60 w-48 border-2 hover:cursor-pointer hover:border-primary dark:bg-muted"
      onClick={() => {
        navigate(`/recipe/${meal.idMeal}`)
      }}
    >
      <CardHeader className="h-1/3">
        <CardTitle className="relative inset-0 flex flex-col items-center">
          <Avatar className="absolute -top-16 h-20 w-20">
            <AvatarImage src={meal.strMealThumb} alt={meal.strMeal} />
          </Avatar>
        </CardTitle>
        <CardDescription className="py-4 text-center text-base text-secondary-foreground">
          {meal.strMeal}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex h-2/3 flex-col justify-around py-4">
        <div className="flex flex-row justify-center gap-8">
          <div className="flex-cols flex flex-col items-center gap-2">
            <AlarmCheck />
            <h3>7 mn</h3>
          </div>
          <div className="flex-cols flex flex-col items-center gap-2">
            <UtensilsCrossed />
            <h3>7 mn</h3>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </CardContent>
    </Card>
  )
}

export default MealCard
