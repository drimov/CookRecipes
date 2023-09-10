import { Button } from "../ui/button"
import { ModeToggle } from "../mode-toggle"
import { NavLink } from "../ui/navlink"
import { NavbarToggle } from "./toggle"

const Navbar = () => {
  return (
    <div className="flex h-20 flex-row items-center justify-between">
      <img src="/logo.svg" alt="logo" width={"100px"} />
      <nav className="hidden md:flex">
        <ul className="md:text-md flex items-center font-medium md:gap-8 lg:gap-16 lg:text-lg">
          <NavLink to={"/"} className="text-primary" border="bottom">
            Home
          </NavLink>
          <NavLink to="/produit" className="text-primary" border="bottom">
            Produit
          </NavLink>
          <NavLink to="/search" className="text-primary" border="bottom">
            Search
          </NavLink>
        </ul>
      </nav>
      <div className="hidden gap-2 md:flex">
        <ModeToggle />
        <NavLink to="/login">
          <Button variant={"ghost"} className="lg:text-lg">
            Login
          </Button>
        </NavLink>
        <NavLink to="/signup">
          <Button className="lg:text-lg">Signup</Button>
        </NavLink>
      </div>
      <NavbarToggle />
    </div>
  )
}

export default Navbar
