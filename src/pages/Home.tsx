import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Link, Outlet } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const Home = () => {
  return (
    <div className="mx-0 grid h-screen w-screen grid-cols-1 bg-primary-foreground">
      <Outlet />
      <div className="flex flex-col items-center justify-center">
        <Card>
          <CardHeader>
            <ModeToggle />
          </CardHeader>
          <CardContent>
            <Link to={"/produit"}>
              <Button className="mx-4">produit</Button>
            </Link>

            <Link to={"/profil"} className="no-underline">
              <Button className="mx-4">profil</Button>
            </Link>
            <Link to={"/search"}>
              <Button className="mx-4">search</Button>
            </Link>
            <Link to={"/signup"}>
              <Button className="mx-4">signup</Button>
            </Link>
            <Link to={"/login"}>
              <Button className="mx-4">login</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Home
