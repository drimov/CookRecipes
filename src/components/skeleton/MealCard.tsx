import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

import { Skeleton } from "../ui/skeleton"

const MealCardSkeleton = () => {
  return (
    <Card className="mx-auto my-4 h-60 w-48 md:my-8">
      <CardHeader>
        <CardTitle className="relative inset-0 flex flex-col items-center">
          <Skeleton className="absolute -top-16 h-20 w-20 rounded-full" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-center gap-8 py-8">
          <div className="flex-cols flex flex-col items-center gap-2">
            <Skeleton className="h-6 w-14" />
            <h3>
              <Skeleton className="h-4 w-14" />
            </h3>
          </div>
          <div className="flex-cols flex flex-col items-center gap-2">
            <Skeleton className="h-6 w-14" />
            <h3>
              <Skeleton className="h-4 w-14" />
            </h3>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-2">
          <Skeleton className="h-4 w-60" />
        </div>
      </CardContent>
    </Card>
  )
}

export default MealCardSkeleton
