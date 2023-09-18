import { createUser } from "../clients/auth"
import { toastMessage } from "@/components/toast-message"
import { useMutation } from "@tanstack/react-query"

type CreateUserProps = {
  email: string
  password: string
}

const useCreateUser = () => {
  const mutation = useMutation({
    mutationFn: (user: CreateUserProps) => {
      return createUser(user.email, user.password)
    },
    onError: (error) => {
      let newError: Error
      if (error instanceof Error) newError = error
      else newError = new Error("Error when create user")

      toastMessage({
        title: newError.name,
        message: newError.message,
        variant: "error",
      })
    },
    onSuccess: (data) => {
      const { error } = data
      if (error.emailIsTaken) {
        toastMessage({
          title: "Email is already taken",
          message: "Please use another email",
          variant: "error",
        })
      } else {
        toastMessage({
          title: "your account has been created",
          message: "confirm your email address",
        })
      }

      return data
    },
  })
  return mutation
}

export { useCreateUser }
