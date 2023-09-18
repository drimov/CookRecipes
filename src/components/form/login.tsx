import AuthForm, { ValidationAuthSchema } from "./auth"

import { getError } from "@/helpers"
import { loginUser } from "@/commons/api/clients/auth"
import { toastMessage } from "../toast-message"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const navigate = useNavigate()
  const onSubmit = async (values: ValidationAuthSchema) => {
    await loginUser(values.email, values.password)
      .then(() => {
        navigate("/profile")
      })
      .catch((error: unknown) => {
        const newError = getError(error, {
          message: "Error when login user",
        })
        toastMessage({
          title: newError.name,
          message: newError.message,
          variant: "error",
        })
      })
  }
  return <AuthForm authForm="signup" onSubmit={onSubmit} />
}

export default LoginForm
