import AuthForm from "../components/form/auth-form"
import { AuthPath } from "@/types/app"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"
import { Link } from "@/components/ui/link"

type AuthentificationProps = {
  type: AuthPath
}

const Authentification = ({ type }: AuthentificationProps) => {
  console.log(type)
  return (
    <div className="flex h-screen flex-col items-center justify-around py-16 md:py-28">
      <img src="/logo.svg" alt="logo" className="mx-auto my-4 w-60 md:w-72" />
      <div className="w-auto px-4 py-2 md:w-[500px] md:px-8">
        {type === "login" ? (
          <AuthPage template={LoginText} type="signup" />
        ) : (
          <AuthPage template={SignupText} type="login" />
        )}
      </div>
    </div>
  )
}

type AuthText = {
  title: string
  subtitle: string
  access: string
  otherAuth: string
}

const LoginText: AuthText = {
  title: "Welcome back,",
  subtitle: "Sign in to continue",
  access: "New User?",
  otherAuth: "Sign up",
}
const SignupText: AuthText = {
  title: "Create an account",
  subtitle: "Enter your email below to create your account.",
  access: "Already have an account?",
  otherAuth: "Log in",
}

type AuthProps = {
  template: AuthText
  type: AuthPath
}
const AuthPage = ({ template, type }: AuthProps) => {
  return (
    <div className="mx-auto w-[300px] py-4 md:w-[400px]">
      <h1 className="text-lg font-semibold md:text-lg lg:text-2xl">
        {template.title}
      </h1>
      <p className="py-2 text-muted-foreground lg:text-lg">
        {template.subtitle}
      </p>
      <div className="flex flex-row justify-evenly">
        <Button variant="outline" size={"lg"} className="m-2 md:m-4">
          <GithubIcon className="mx-2" /> <p>Github</p>
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
      <AuthForm typeForm={type} />
      <p className="mt-4 text-muted-foreground">
        {template.access}{" "}
        <Link
          to={`/${type}`}
          className="text-primary hover:border-b-2 hover:border-primary"
        >
          {template.otherAuth}
        </Link>
      </p>
    </div>
  )
}

export default Authentification
