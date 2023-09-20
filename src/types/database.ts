import { Json } from "./supabase"

export type Profile = {
  avatar_url: string | null
  bio: string | null
  favourites: string[] | null
  id: string
  recipes: Json[] | null
  updated_at: string | null
  username: string | null
}
