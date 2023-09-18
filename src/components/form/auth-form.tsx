import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RouteAuthKeys } from "@/types/app"
import { useCreateUser } from "@/commons/api/hooks/auth"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const authSchema = z.object({
  email: z.string().min(1, { message: "Need to enter an email" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password need to be at least have 6 characters" }),
})

type ValidationAuthSchema = z.infer<typeof authSchema>

type AuthFormProps = {
  typeForm: RouteAuthKeys
}
const AuthForm = ({ typeForm }: AuthFormProps) => {
  const navigate = useNavigate()
  const { mutateAsync } = useCreateUser()
  async function onSubmit(values: ValidationAuthSchema) {
    if (typeForm === "signup") {
      await mutateAsync({
        email: values.email,
        password: values.password,
      }).then((res) => {
        if (!res.error.emailIsTaken) navigate("/profile")
      })
    }
  }

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full space-y-4 px-4 md:text-lg lg:text-2xl"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="johnDoe@example.com"
                  {...field}
                  className="text-muted-foreground"
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {typeForm === "login" ? "Log in" : "Create account"}
        </Button>
      </form>
    </Form>
  )
}

export default AuthForm
