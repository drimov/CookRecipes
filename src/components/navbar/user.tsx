import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

import { Button } from "@/components/ui/button"
import { NavLink } from "../ui/navlink"
import { RouteAuthKeys } from "@/types/app"
import { getTitle } from "@/helpers"

export const UnregistredNav = () => {
  const routesNavButton: RouteAuthKeys[] = ["login", "signup"]
  return (
    <>
      {routesNavButton.map((route, index) => (
        <NavLink to={route} key={index}>
          <Button
            variant={route === "login" ? "ghost" : "default"}
            className="lg:text-lg"
          >
            {getTitle(route)}
          </Button>
        </NavLink>
      ))}
    </>
  )
}

type RegistredNavProps = {
  logout: () => void
}

export const RegistredNav = ({ logout }: RegistredNavProps) => {
  return (
    <>
      <NavLink to={"profile"}>
        <Avatar className="mx-2">
          <AvatarImage src="/default_avatar.svg" alt="avatar-profile" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </NavLink>

      <NavLink to={"logout"}>
        <Button className="lg:text-lg" onClick={() => logout()}>
          {getTitle("logout")}
        </Button>
      </NavLink>
    </>
  )
}
