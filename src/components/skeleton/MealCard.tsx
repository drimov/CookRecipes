import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

import { Skeleton } from "../ui/skeleton"

const MealCardSkeleton = () => {
  return (
    <Card className="mx-auto my-4 h-60 w-48 border-2 shadow-md dark:bg-muted">
      <CardHeader className="m-0 h-full p-0">
        <CardTitle className="h-full">
          <Skeleton className="h-48 w-full rounded-t-md" />
        </CardTitle>
        <CardDescription className="flex h-full w-full items-center justify-center">
          <Skeleton className="h-4 w-28" />
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default MealCardSkeleton
