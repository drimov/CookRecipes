import { Button } from "@/components/ui/button"
import { Link } from "./ui/link"

import { Menu } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

const Navbar = ({ isNavLogin }: { isNavLogin: boolean }) => {
  return (
    <div className="container ">
      <div className="container">
        <div className="mx-auto w-full border-4 bg-inherit px-8">
          <div className="my4 my-2 box-border flex  h-16 flex-row items-center justify-between px-4">
            <h1 className="flex items-center">LOGO</h1>
            <Menu className="flex dark:hidden md:hidden" color="#b62525" />
            <Menu className="hidden dark:flex dark:md:hidden" />

            <div className=" hidden w-auto justify-evenly md:flex">
              <Link to={"/"}>
                <Button className="mx-4">Home</Button>
              </Link>
              <Link to={"/produit"}>
                <Button className="mx-4">Produit</Button>
              </Link>

              <Link to={"/profil"} className="no-underline">
                <Button className="mx-4">Profil</Button>
              </Link>
              <Link to={"/search"}>
                <Button className="mx-4">Search</Button>
              </Link>
              {!isNavLogin ? (
                <>
                  <Button className="mx-2">Sign up</Button>
                  <Button className="mx-2">Login</Button>
                </>
              ) : null}

              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
