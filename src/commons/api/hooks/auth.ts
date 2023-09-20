import {
  createUser,
  getSessionUser,
  loginUser,
  logoutUser,
  updateUser,
} from "../clients/auth"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Session } from "@supabase/supabase-js"
import { getError } from "@/helpers"
import { toastMessage } from "@/components/toast-message"
import { useNavigate } from "react-router-dom"

type UserProps = {
  email: string
  password: string
}
const useCreateUser = () => {
  const navigate = useNavigate()

  return useMutation(
    (user: UserProps) => createUser(user.email, user.password),
    {
      onSuccess: () => {
        toastMessage({
          title: "Account created",
          message: "Verify your email",
        })
        navigate("/profile")
      },
      onError: (error) => {
        const newError = getError(error, {
          message: "Error when create user",
          name: "Error when create user",
        })
        toastMessage({
          title: newError.name,
          message: newError.message,
          variant: "error",
        })
      },
    }
  )
}
const useLoginUser = () => {
  const navigate = useNavigate()

  return useMutation(
    (user: UserProps) => loginUser(user.email, user.password),
    {
      onSuccess: () => {
        toastMessage({
          title: "Welcome back",
          message: "",
        })
        navigate("/profile")
      },
      onError: (error) => {
        const newError = getError(error, {
          message: "Error when login user",
          name: "Error when login user",
        })
        toastMessage({
          title: newError.name,
          message: newError.message,
          variant: "error",
        })
      },
    }
  )
}

const useLogoutUser = () => {
  const queryClient = useQueryClient()
  return useMutation(() => logoutUser(), {
    onSuccess: () => {
      queryClient.removeQueries()
    },
  })
}

type useGetSessionUserProps = {
  onSuccess: (session: Session | null) => void
}
const useGetSessionUser = ({ onSuccess }: useGetSessionUserProps) => {
  return useMutation(() => getSessionUser(), {
    onError: (error: unknown) => {
      const newError = getError(error, {
        message: "Error when get session user",
        name: "Error when get session user",
      })
      toastMessage({
        title: newError.name,
        message: newError.message,
        variant: "error",
      })
    },
    onSuccess: (data) => {
      onSuccess(data)
    },
  })
}

type UserUpdate = {
  email?: string
  password?: string
}
// type useUpdateUserProps = {
//   onSuccess: (user: User | null) => void
// }
const useUpdateUser = () => {
  return useMutation(
    (userUpdate: UserUpdate) =>
      updateUser(userUpdate.email, userUpdate.password),
    {
      onSuccess: () => {
        // onSuccess(data.user)
      },
    }
  )
}

export {
  useCreateUser,
  useGetSessionUser,
  useLoginUser,
  useLogoutUser,
  useUpdateUser,
}
