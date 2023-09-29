import IngredientListSkeleton from "./IngredientList"
import InstructionListSkeleton from "./InstructionList"
import { Skeleton } from "../../ui/skeleton"

const RecipeSkeleton = () => {
  return (
    <div className="flex flex-col px-4 md:my-8 lg:my-16">
      <Skeleton className="flex w-full flex-row items-center justify-between p-4 md:p-8">
        <h1 className="text-center">
          <Skeleton className="h-8 w-44 bg-gray-200 dark:bg-black/20 md:w-48" />
        </h1>
        <Skeleton className="h-8 w-8 bg-gray-200 dark:bg-black/20" />
      </Skeleton>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-8 md:py-8 lg:grid-cols-3">
        <div className="col-span-1 py-4 lg:col-span-1">
          <Skeleton className="mx-auto h-60 w-60 rounded-full" />
        </div>
        <IngredientListSkeleton />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center gap-4 py-4 md:justify-start">
          <Skeleton className="flex h-8 w-28 items-center justify-center rounded-full p-4" />
        </div>
      </div>
      <InstructionListSkeleton />
    </div>
  )
}

export default RecipeSkeleton
