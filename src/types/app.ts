import { routes } from "@/commons/constants"

type Route = typeof routes
export type RouteKeys = keyof Route
export type RouteAuthKeys = keyof Pick<Route, "signup" | "login">
export type RouteProfileKeys = keyof Pick<Route, "profile" | "favorite">
export type AppRouteKeys = RouteKeys | RouteAuthKeys | RouteProfileKeys
