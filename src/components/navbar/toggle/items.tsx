import { Moon, Sun } from "lucide-react"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { NavLink } from "@/components/ui/navlink"
import { RouteKeys } from "@/types/app"
import { User } from "@supabase/supabase-js"
import { getTitle } from "@/helpers"
import { useLogoutUser } from "@/commons/api/hooks/auth"
import { useTheme } from "@/hooks/useTheme"

export const LogoutItem = () => {
  const mutation = useLogoutUser()

  return (
    <DropdownMenuItem onClick={() => mutation.mutateAsync()}>
      <NavLink to={"home"} className={"w-full"}>
        <p className="px-2">Logout</p>
      </NavLink>
    </DropdownMenuItem>
  )
}

export const ThemeItem = () => {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenuItem
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
      <p className="pl-2">{theme.charAt(0).toUpperCase() + theme.slice(1)}</p>
    </DropdownMenuItem>
  )
}

type RoutesItemProps = {
  user: User | null
}

export const RoutesItem = ({ user }: RoutesItemProps) => {
  const unRegistredRoutes: RouteKeys[] = [
    "home",
    "produit",
    "search",
    "login",
    "signup",
  ]
  const registredRoutes: RouteKeys[] = ["home", "produit", "search", "profile"]
  const routes = user ? registredRoutes : unRegistredRoutes
  return (
    <>
      {routes.map((route, index) => (
        <DropdownMenuItem key={index}>
          <NavLink to={route} className={"w-full"} border="left">
            <p className="px-2">{getTitle(route)}</p>
          </NavLink>
        </DropdownMenuItem>
      ))}
    </>
  )
}
