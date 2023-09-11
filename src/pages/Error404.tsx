import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import Navbar from "@/components/navbar"

export default function Error404() {
  return (
    <div className="container flex h-screen flex-col px-4 md:px-8 lg:px-16">
      <Navbar />
      <div className="flex flex-grow items-center">
        <div className="mx-auto grid grid-cols-1 px-4 md:grid-cols-2 md:gap-2">
          <div className="mx-auto py-2 md:my-auto">
            <h1 className="mx-auto py-2 text-center text-5xl md:py-4 md:text-6xl">
              Error 404
            </h1>
            <p className="py-2 text-center text-lg md:py-4 md:text-xl">
              The page you are looking for does not exist.
            </p>
            <Link to={"/"} className="flex">
              <Button className="mx-auto" size={"lg"}>
                Back to home
              </Button>
            </Link>
          </div>
          <div className="w-full py-2">
            <img src="/error-404.jpeg" alt="Error 404" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
