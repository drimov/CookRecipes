import AuthForm, { ValidationAuthSchema } from "./auth"

import { useLoginUser } from "@/commons/api/hooks/auth"

const LoginForm = () => {
  const mutation = useLoginUser()
  const onSubmit = async (values: ValidationAuthSchema) => {
    await mutation.mutateAsync({
      email: values.email,
      password: values.password,
    })
  }
  return (
    <AuthForm
      authForm="login"
      onSubmit={onSubmit}
      isLoading={mutation.isLoading}
    />
  )
}

export default LoginForm
