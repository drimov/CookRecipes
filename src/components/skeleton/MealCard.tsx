import { Skeleton } from "../ui/skeleton"

const MealCardSkeleton = () => {
  return (
    <Skeleton className="mx-auto my-4 h-60 w-48 border-2 shadow-md dark:bg-muted">
      <Skeleton className="m-0 h-full p-0">
        <Skeleton className="h-48 w-full rounded-t-md bg-gray-200 dark:bg-black/20" />
        <Skeleton className="flex h-12 items-center justify-center">
          <Skeleton className="h-4 w-28 bg-gray-200 dark:bg-black/20" />
        </Skeleton>
      </Skeleton>
    </Skeleton>
  )
}

export default MealCardSkeleton
