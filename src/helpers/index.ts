import { AppRouteKeys } from "@/types/app"
import { routes } from "@/commons/constants"

export const getRoute = (route: AppRouteKeys) => {
  return routes[route]
}
export const getTitle = (route: AppRouteKeys) => {
  return route.slice(0, 1).toUpperCase() + route.slice(1)
}

export const getError = (
  error: unknown,
  defaulValue: { name?: string; message: string }
) => {
  let newError: Error
  if (error instanceof Error) {
    newError = error
  } else {
    newError = Error(defaulValue.message)
    newError.name = defaulValue.name ?? "Unexpected error"
  }
  return newError
}
