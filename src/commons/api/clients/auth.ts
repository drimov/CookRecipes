import { supabase } from "@/lib/supabase/client"

async function createUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  // Check if email is already taken
  const emailIsTaken = data.user?.identities?.length === 0

  if (error) {
    throw error
  }

  if (emailIsTaken) {
    const error = Error("Please use another email")
    error.name = "Email is already taken"
    throw error
  }

  return data
}

async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }

  return data
}

async function logoutUser() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw error
  }
}

async function getSessionUser() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()
  if (error) {
    throw error
  }
  return session
}

export { createUser, loginUser, logoutUser, getSessionUser }
