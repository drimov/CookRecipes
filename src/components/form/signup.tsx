import AuthForm, { ValidationAuthSchema } from "./auth"

import { createUser } from "@/commons/api/clients/auth"
import { getError } from "@/helpers"
import { toastMessage } from "../toast-message"
import { useNavigate } from "react-router-dom"

const SignUpForm = () => {
  const navigate = useNavigate()
  const onSubmit = async (values: ValidationAuthSchema) => {
    await createUser(values.email, values.password)
      .then(() => {
        navigate("/profile")
      })
      .catch((error: unknown) => {
        const newError = getError(error, {
          message: "Error when create user",
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

export default SignUpForm
