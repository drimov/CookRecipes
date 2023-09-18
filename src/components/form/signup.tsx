import AuthForm, { ValidationAuthSchema } from "./auth"

import { useCreateUser } from "@/commons/api/hooks/auth"

const SignUpForm = () => {
  const mutation = useCreateUser()

  const onSubmit = async (values: ValidationAuthSchema) => {
    await mutation.mutateAsync({
      email: values.email,
      password: values.password,
    })
  }
  return (
    <AuthForm
      authForm="signup"
      onSubmit={onSubmit}
      isLoading={mutation.isLoading}
    />
  )
}

export default SignUpForm
