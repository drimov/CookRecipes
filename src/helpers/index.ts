import { AppRouteKeys } from "@/types/app"
import { routes } from "@/commons/constants"

export const getRoute = (route: AppRouteKeys) => {
  return routes[route]
}
export const getTitle = (route: AppRouteKeys) => {
  return route.slice(0, 1).toUpperCase() + route.slice(1)
}
