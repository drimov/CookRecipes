import AuthHeader from "./AuthHeader"
import { Link } from "@/components/ui/link"
import LoginForm from "@/components/form/login"
import { RouteAuthKeys } from "@/types/app"
import SignUpForm from "@/components/form/signup"

type AuthTemplate = {
  title: string
  subheading: string
  text: string
  linkText: string
  route: RouteAuthKeys
}

export const LoginText: AuthTemplate = {
  title: "Welcome back,",
  subheading: "Sign in to continue",
  text: "New User?",
  linkText: "Sign up",
  route: "signup",
} as const
export const SignupText: AuthTemplate = {
  title: "Create an account",
  subheading: "Enter your email below to create your account.",
  text: "Already have an account?",
  linkText: "Log in",
  route: "login",
} as const

type AuthentificationProps = {
  type: RouteAuthKeys
}
const Authentification = ({ type }: AuthentificationProps) => {
  let template: AuthTemplate
  let AuthForm: JSX.Element

  switch (type) {
    case "login":
      template = LoginText
      AuthForm = <LoginForm />
      break
    case "signup":
      template = SignupText
      AuthForm = <SignUpForm />
  }
  return (
    <div className="flex h-screen flex-col items-center justify-around py-16 md:py-28">
      <img src="/logo.svg" alt="logo" className="mx-auto my-4 w-60 md:w-72" />
      <div className="w-auto px-4 py-2 md:w-[500px] md:px-8">
        <div className="mx-auto w-[300px] py-4 md:w-[400px]">
          <AuthHeader subheading={template.subheading} title={template.title} />
          {AuthForm}
          <p className="mt-4 px-4 text-muted-foreground">
            {template.text}{" "}
            <Link
              to={template.route}
              className="text-primary hover:border-b-2 hover:border-primary"
            >
              {template.linkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Authentification
