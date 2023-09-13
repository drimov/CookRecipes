import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"

type AuthHeaderProps = {
  title: string
  subheading: string
}

const AuthHeader = ({ title, subheading }: AuthHeaderProps) => {
  return (
    <>
      <h1 className="text-lg font-semibold md:text-lg lg:text-2xl">{title}</h1>
      <p className="py-2 text-muted-foreground lg:text-lg">{subheading}</p>
      <div className="flex flex-row justify-evenly">
        <Button variant="outline" size={"lg"} className="m-2 md:m-4">
          <GithubIcon className="mx-2" />
          <p>Github</p>
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </>
  )
}

export default AuthHeader
