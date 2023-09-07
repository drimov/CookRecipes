import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const validationSchema = z.object({
  email: z.string().min(1, { message: "Vous devez entrer votre email" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
})

type ValidationSchema = z.infer<typeof validationSchema>

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data)

  return (
    <form
      className="m-auto mb-4 max-w-xl px-8 pb-8 pt-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-black dark:text-white"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={`w-full border px-3 py-2 text-sm leading-tight text-gray-700 ${
            errors.email && "border-red-500"
          } focus:shadow-outline appearance-none rounded focus:outline-none`}
          id="email"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-black dark:text-white"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className={`w-full border px-3 py-2 text-sm leading-tight text-gray-700 ${
            errors.password && "border-red-500"
          } focus:shadow-outline appearance-none rounded focus:outline-none`}
          id="password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.password?.message}
          </p>
        )}
      </div>
      <div className="mb-6 text-center">
        <Button className="mx-4" type="submit">
          Connexion
        </Button>
      </div>
      <hr className="mb-6 border-t" />
      <div className="text-center">
        <Link to={"/subscribe"}>
          <p className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 dark:hover:text-blue-400">
            Vous n'avez pas encore de compte ? Inscrivez-vous !
          </p>
        </Link>
      </div>
    </form>
  )
}

export default Form
