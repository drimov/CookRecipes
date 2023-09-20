import { supabase } from "@/lib/supabase/client"

async function getProfile(id: string) {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    throw error
  }
  return profile
}

export { getProfile }
