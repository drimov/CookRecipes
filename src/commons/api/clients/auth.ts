import { supabase } from "@/lib/supabase/client"

async function createUser(email: string, password: string) {
  const { data, error: errorSignUp } = await supabase.auth.signUp({
    email,
    password,
  })
  const emailIsTaken = data.user?.identities?.length === 0

  const error = {
    errorAuth: errorSignUp,
    emailIsTaken,
  }

  return { data, error }
}

export { createUser }
