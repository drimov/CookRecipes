import { supabase } from "./client"

async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: "user",
        bio: "",
        receipes: [],
      },
    },
  })

  if (error) {
    throw new Error(`${error.name} : ${error.message}`)
  }
  return data
}

export { signUp }
