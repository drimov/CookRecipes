import { AlarmCheck, Star, UtensilsCrossed } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Meal } from "@/types/meal"

type MealCardProps = {
  meal: Meal
}

const MealCard = ({ meal }: MealCardProps) => {
  return (
    <Card
      className="mx-auto my-4 h-60 w-48 hover:cursor-pointer hover:bg-secondary md:my-8"
      onClick={() => {} /*relier avec la page recette*/}
    >
      <CardHeader>
        <CardTitle className="relative inset-0 flex flex-col items-center">
          <Avatar className="absolute -top-16 h-20 w-20">
            <AvatarImage src={meal.strMealThumb} alt={meal.strMeal} />
          </Avatar>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-center gap-8 py-8">
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
