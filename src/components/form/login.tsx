import AuthForm, { ValidationAuthSchema } from "./auth"

import { toastMessage } from "../toast-message"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useGetProfile } from "@/commons/api/hooks/profile"
import { useLoginUser } from "@/commons/api/hooks/auth"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const LoginForm = () => {
  const { setProfile } = useAuthContext()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const mutationProfile = useGetProfile({
    onSuccess(data) {
      setProfile(data)
      setIsLoading(false)
      toastMessage({
        title: "Welcome back",
        message: `${data.username ?? "User"}`,
      })
      navigate("/profile")
      navigate("/profile")
    },
  })
  const mutationLogin = useLoginUser({
    onSuccess: (id) => {
      void mutationProfile.mutateAsync(id)
    },
  })
  const onSubmit = async (values: ValidationAuthSchema) => {
    setIsLoading(true)
    await mutationLogin.mutateAsync({
      email: values.email,
      password: values.password,
    })
  }
  return <AuthForm authForm="login" onSubmit={onSubmit} isLoading={isLoading} />
}

export default LoginForm
