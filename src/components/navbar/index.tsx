import { Button } from "../ui/button"
import { Link } from "../ui/link"
import { ModeToggle } from "../mode-toggle"
import { NavbarToggle } from "./toggle"

const Navbar = () => {
  return (
    <div className="flex h-20 flex-row items-center justify-between md:border-b-2 md:border-primary">
      <img src="/logo.svg" alt="logo" width={"100px"} />
      <nav className="hidden md:flex">
        <ul className="md:text-md flex items-center font-medium md:gap-8 lg:gap-16 lg:text-lg">
          <Link to={"/"} className="text-primary">
            Home
          </Link>
          <Link to="/produit" className="text-primary">
            Produit
          </Link>
          <Link to="/search" className="text-primary">
            Search
          </Link>
        </ul>
      </nav>
      <div className="hidden gap-2 md:flex">
        <ModeToggle />
        <Link to="/login">
          <Button variant={"ghost"}>Login</Button>
        </Link>
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
      </div>
      <NavbarToggle />
    </div>
  )
}

export default Navbar
