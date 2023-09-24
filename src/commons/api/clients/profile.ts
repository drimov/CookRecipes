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

async function downloadImage(path: string) {
  const { data, error } = await supabase.storage.from("avatars").download(path)
  if (error) {
    throw error
  }
  const url = URL.createObjectURL(data)

  return url
}

async function uploadAvatar(filePath: string, file: File) {
  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(filePath, file)

  if (uploadError) {
    throw uploadError
  }
}

export { getProfile, updateProfile, downloadImage, uploadAvatar }
