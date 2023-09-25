import { RegistredNav, UnregistredNav } from "./user"

import { ModeToggle } from "../mode-toggle"
import { NavLink } from "../ui/navlink"
import { NavbarToggle } from "./toggle"
import { RouteKeys } from "@/types/app"
import { getTitle } from "@/helpers"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useLogoutUser } from "@/commons/api/hooks/auth"

const Navbar = () => {
  const { user } = useAuthContext()
  const mutation = useLogoutUser()
  const routesNav: RouteKeys[] = ["home", "search"]

  return (
    <div className="flex h-20 flex-row items-center justify-between">
      <img src="/logo.svg" alt="logo" width={"100px"} />
      <nav className="hidden md:flex">
        <ul className="md:text-md flex items-center font-medium md:gap-8 lg:gap-16 lg:text-lg">
          {routesNav.map((route, index) => (
            <li key={index}>
              <NavLink to={route} className="text-primary" border="bottom">
                {getTitle(route)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden gap-2 md:flex">
        <ModeToggle />
        {user ? (
          <RegistredNav
            logout={mutation.mutateAsync}
            isLoading={mutation.isLoading}
          />
        ) : (
          <UnregistredNav />
        )}
      </div>
      <NavbarToggle />
    </div>
  )
}

export default Navbar
