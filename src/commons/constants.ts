export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_API_URL
export const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY
export const NODE_ENV = import.meta.env.DEV
export const COLOR_ACCENT = "#FA7C16" // orange
export const authLinks = ["signup", "login"] as const
export const links = [
  "produit",
  "profile",
  "search",
  "signup",
  "login",
] as const
export const profileLinks = ["profile", "profile/favorite"] as const
