import { Card, CardContent, CardHeader } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { ModeToggle } from "@/components/mode-toggle"

const Home = () => {
  return (
    <div className="m-8 flex flex-col items-center justify-center">
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
  )
}
export default Home
