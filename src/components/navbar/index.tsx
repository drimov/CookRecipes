import { RouteAuthKeys, RouteKeys } from "@/types/app"

import { Button } from "../ui/button"
import { ModeToggle } from "../mode-toggle"
import { NavLink } from "../ui/navlink"
import { NavbarToggle } from "./toggle"
import { getTitle } from "@/helpers"

const Navbar = () => {
  const routesNav: RouteKeys[] = ["home", "produit", "search"]
  const routesNavButton: RouteAuthKeys[] = ["login", "signup"]
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
      </div>
      <NavbarToggle />
    </div>
  )
}

export default Navbar
