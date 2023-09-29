import IngredientSkeleton from "./Ingredient"
import { Skeleton } from "@/components/ui/skeleton"

type IngredientListSkeletonProps = {
  nbIngredients?: number
}
const IngredientListSkeleton = ({
  nbIngredients = 5,
}: IngredientListSkeletonProps) => {
  const list = []
  for (let i = 0; i < nbIngredients; i++) {
    list.push(i)
  }
  return (
    <div className="col-span-1 flex flex-col md:p-8 lg:col-span-2">
      <h2 className="flex justify-center md:justify-start">
        <Skeleton className="h-8 w-48" />
      </h2>
      <div className="flex flex-wrap justify-center gap-4 py-4 md:justify-start">
        {list.map((_item, index) => (
          <IngredientSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default IngredientListSkeleton
