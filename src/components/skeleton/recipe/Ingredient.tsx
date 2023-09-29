import { Skeleton } from "@/components/ui/skeleton"

const IngredientSkeleton = () => {
  return (
    <Skeleton className="w-34 flex flex-col items-center justify-center rounded-md">
      <Skeleton className="hidden w-32 justify-center lg:flex lg:p-2">
        <Skeleton className="h-12 w-12 bg-gray-200 dark:bg-black/20 lg:w-20" />
      </Skeleton>
      <Skeleton className="flex flex-col gap-2 p-2 ">
        <Skeleton className="h-4 w-20 bg-gray-200 dark:bg-black/20" />
      </Skeleton>
    </Skeleton>
  )
}

export default IngredientSkeleton
