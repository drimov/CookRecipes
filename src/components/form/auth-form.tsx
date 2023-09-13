import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { RouteAuthKeys } from "@/types/app"
import { signUp } from "@/lib/supabase/auth"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useToast } from "../ui/use-toast"
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
  const { toast } = useToast()
  const navigate = useNavigate()
  async function onSubmit(values: ValidationAuthSchema) {
    if (typeForm !== "signup") {
      await signUp(values.email, values.password).then((data) => {
        toast({
          action: (
            <div className="flex w-full items-center justify-start gap-2">
              <CheckIcon />
              <div className="flex flex-col">
                <span className="font-semibold first-letter:capitalize">
                  your account has been created
                </span>
                <span className="first-letter:capitalize">
                  confirm your email address
                </span>
              </div>
            </div>
          ),
          className: "bg-green-500 text-primary-foreground",
        })
        if (data.user) {
          navigate("/profile")
        }
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
          {typeForm !== "login" ? "Log in" : "Create account"}
        </Button>
      </form>
    </Form>
  )
}

export default AuthForm
