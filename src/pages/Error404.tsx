import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Error404() {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center sm:px-6 md:flex-row lg:px-8">
      <div className="mb-8 w-full text-center md:mb-0 md:pr-4 md:text-left">
        <h1 className="mb-4 text-4xl font-semibold md:text-6xl lg:text-8xl">
          Erreur 404
        </h1>
        <p className="pl-1 text-2xl lg:text-3xl">
          La page que vous recherchez n&apos;existe pas.
        </p>
        <div className="mt-6 flex justify-center pr-4">
          <Link to={"/"} className="no-underline">
            <Button className="mx-4">Revenir à la page d&apos;accueil</Button>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <img
          src="/error-404.jpeg"
          alt="Erreur 404"
          className="h-full w-full lg:w-auto"
        />
      </div>
    </div>
  )
}
