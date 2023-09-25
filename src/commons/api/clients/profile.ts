import { Profile } from "@/types/database"
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

async function updateProfile(profile: Partial<Profile>) {
  const updates = {
    ...profile,
    id: profile.id!,
    updated_at: new Date().toDateString(),
  }

  const { error } = await supabase.from("profiles").upsert(updates)

  if (error) {
    throw error
  }
}
export { getProfile, updateProfile }
