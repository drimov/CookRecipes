import { Card, CardDescription, CardTitle } from "@/components/ui/card"

import { API_IMAGE } from "@/commons/constants"
import { Ingredient } from "@/types/meal"

type IngredientItemProps = {
  item: Ingredient
}
const IngredientItem = ({ item }: IngredientItemProps) => {
  return (
    <Card className="w-34 flex flex-col items-center justify-center rounded-md border-2">
      <CardTitle className="hidden w-32 justify-center lg:flex lg:p-2">
        <img
          src={`${API_IMAGE}/${item.ingredient}.png`}
          alt={item.ingredient}
          className="w-12 lg:w-20"
          loading="eager"
        />
      </CardTitle>
      <CardDescription className="flex flex-col p-2">
        <span className="text-center">{item.measure}</span>
        <span className="text-center">{item.ingredient}</span>
      </CardDescription>
    </Card>
  )
}

export default IngredientItem
