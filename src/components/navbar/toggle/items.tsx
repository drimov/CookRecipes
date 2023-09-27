import { Moon, Sun } from "lucide-react"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { NavLink } from "@/components/ui/navlink"
import { RouteKeys } from "@/types/app"
import { User } from "@supabase/supabase-js"
import { getTitle } from "@/helpers"
import { useLogoutUser } from "@/commons/api/hooks/auth"
import { useTheme } from "@/hooks/useTheme"

export const ThemeItem = () => {
  const { theme, setTheme } = useTheme()

  const oppositeTheme = theme === "dark" ? "light" : "dark"

  return (
    <DropdownMenuItem
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="hover:cursor-pointer"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
      <p className="pl-2">
        {oppositeTheme.charAt(0).toUpperCase() + oppositeTheme.slice(1)}
      </p>
    </DropdownMenuItem>
  )
}

type RoutesItemProps = {
  user: User | null
}

export const RoutesItem = ({ user }: RoutesItemProps) => {
  const mutation = useLogoutUser()

  const unRegistredRoutes: RouteKeys[] = ["home", "search", "login", "signup"]
  const registredRoutes: RouteKeys[] = ["home", "search", "profile", "logout"]
  const routes = user ? registredRoutes : unRegistredRoutes
  return (
    <>
      {routes.map((route, index) => (
        <NavLink to={route} key={index}>
          <DropdownMenuItem
            onClick={
              user && route === "logout"
                ? () => mutation.mutateAsync()
                : undefined
            }
            className="rounded-l-none hover:cursor-pointer hover:border-l-2 hover:border-primary"
          >
            <p className="px-2">{getTitle(route)}</p>
          </DropdownMenuItem>
        </NavLink>
      ))}
    </>
  )
}
