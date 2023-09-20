export const NODE_ENV = import.meta.env.DEV

export const COLOR_ACCENT = "#FA7C16" // orange

export const routes = {
  home: "/",
  produit: "/produit",
  profile: "/profile",
  search: "/search",
  signup: "/signup",
  login: "/login",
  logout: "/",
  favorite: "/profile/favorite",
} as const

export const API_URL = import.meta.env.VITE_API_URL
