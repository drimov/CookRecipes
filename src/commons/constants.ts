export const NODE_ENV = import.meta.env.DEV

export const COLOR_ACCENT = "#FA7C16" // orange

export const routes = {
  home: "/",
  recipe: "/recipe",
  profile: "/profile",
  search: "/search",
  signup: "/signup",
  login: "/login",
  logout: "/",
  favorite: "/profile/favorite",
} as const

export const API_URL = import.meta.env.VITE_API_URL
export const API_IMAGE = import.meta.env.VITE_API_IMAGE

const INVALID_PASSWORD = "Password need to be at least have 6 characters."
const INVALID_EMAIL = "Must be a valid email."
const EMPTY_EMAIL = "Need to enter an email."
const INVALID_MIN_CHARACTERS_USERNAME =
  "Username must be at least 6 characters."
const INVALID_MAX_CHARACTERS_USERNAME =
  "Username must not be longer than 30 characters.."

export const ERROR = {
  INVALID_EMAIL,
  EMPTY_EMAIL,
  INVALID_PASSWORD,
  INVALID_MIN_CHARACTERS_USERNAME,
  INVALID_MAX_CHARACTERS_USERNAME,
}

export const URL_API = {
  CATEGORY: `${API_URL}/filter.php?c`,
  CATEGORIES: `${API_URL}/categories.php`,
  NAME: `${API_URL}/search.php?s`,
  RECIPE: `${API_URL}/lookup.php?i`,
}
