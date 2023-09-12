export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_API_URL
export const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY
export const NODE_ENV = import.meta.env.DEV
export const COLOR_ACCENT = "#FA7C16" // orange

export const routes = {
  home: "/",
  produit: "/produit",
  profile: "/profile",
  search: "/search",
  signup: "/signup",
  login: "/login",
  favorite: "/profile/favorite",
} as const
