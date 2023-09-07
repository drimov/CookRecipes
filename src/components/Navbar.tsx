import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu"

// type Props = {}

const Navbar = () => {
  return (
    <div className="max-w-max">
      <NavigationMenu>
        <span className="w-1/3 items-center justify-center text-3xl font-bold tracking-wider text-slate-500 hover:text-orange-600 sm:text-lg md:text-2xl">
          Logo
        </span>
        <NavigationMenuItem className="flex-lg flex w-2/3 items-center justify-center ">
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
          <Card>
            <CardContent className="flex-lg mx-4 my-4 flex items-center justify-center ">
              <Link to={"/signup"}>
                <Button className="mx-4 ">Signup</Button>
              </Link>
              <Link to={"/login"}>
                <Button className="mx-4">Login</Button>
              </Link>
              <ModeToggle />
            </CardContent>
          </Card>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  )
}

export default Navbar
