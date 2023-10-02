import {
  fakeMealByCategory,
  fakeMealCategories,
  fakeMeals,
  fakeRecipe,
  fakeUser,
  fakeUserEmailTakenCreate,
  fakeUserProfile,
  fakeUserSession,
} from "./data"

import { API_MEAL_ENDPOINTS } from "@/commons/constants"
import { rest } from "msw"

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET

export const URL_AUTH = {
  SIGNUP: `${SUPABASE_URL}/auth/v1/signup`,
  SESSION: `${SUPABASE_URL}/auth/v1/token`,
  LOGOUT: `${SUPABASE_URL}/auth/v1/logout`,
  USER: `${SUPABASE_URL}/auth/v1/user`,
}
export const URL_DB = {
  PROFILES: `${SUPABASE_URL}/rest/v1/profiles`,
  STORAGES: `${SUPABASE_URL}/storage/v1/object/${SUPABASE_BUCKET}/*`,
}
export const URL_MEAL = {
  CATEGORIES: `${API_MEAL_ENDPOINTS.CATEGORIES}.php`,
  NAME: `${API_MEAL_ENDPOINTS.NAME}.php*`,
  CATEGORY: `${API_MEAL_ENDPOINTS.CATEGORY}.php*`,
  RECIPE: `${API_MEAL_ENDPOINTS.RECIPE}.php*`,
}

export const API_ERROR = "api_error"
export const API_AUTH_ERROR_LOGOUT = `${API_ERROR}_logout`
export const API_AUTH_EMAIL_TAKEN = "email_taken"

const handlersAuth = [
  // SIGNUP
  rest.post(URL_AUTH.SIGNUP, async (req, res, ctx) => {
    const body = (await req.json()) as unknown
    const isObject = typeof body === "object"
    const isNotNull = body !== null
    const isInEmail = isObject && isNotNull && "email" in body

    if (isInEmail) {
      if (body.email === API_ERROR) {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when create user" })
        )
      }
      if (body.email === "email_taken") {
        return res(ctx.status(200), ctx.json(fakeUserEmailTakenCreate))
      }
      return res(
        ctx.status(200),
        ctx.json({
          ...fakeUser,
          user: {
            ...fakeUser.user,
            email: body.email as string,
          },
        })
      )
    }
  }),

  // LOGIN | GET SESSION
  rest.post(URL_AUTH.SESSION, async (req, res, ctx) => {
    if (req.url.search === "?grant_type=refresh_token") {
      if (localStorage.getItem(API_ERROR)) {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when get session" })
        )
      }
      return res(ctx.status(200), ctx.json(fakeUserSession))
    }
    if (req.url.search === "?grant_type=password") {
      // LOGIN
      const body = (await req.json()) as unknown
      const isObject = typeof body === "object"
      const isNotNull = body !== null
      const isInEmail = isObject && isNotNull && "email" in body
      if (isInEmail) {
        if (body.email === API_ERROR) {
          return res(
            ctx.status(400),
            ctx.json({ message: "API error when login user" })
          )
        }
        const newFakeUserSession: typeof fakeUserSession = {
          ...fakeUserSession,
          user: {
            ...fakeUserSession.user,
            email: body.email as string,
          },
        }
        return res(ctx.status(200), ctx.json(newFakeUserSession))
      }
    }
  }),
  // LOGOUT
  rest.post(URL_AUTH.LOGOUT, async (_req, res, ctx) => {
    if (localStorage.getItem(API_AUTH_ERROR_LOGOUT)) {
      return res(
        ctx.status(400),
        ctx.json({ message: "API error when logout user" })
      )
    }
    return res(ctx.status(200))
  }),
  // UPDATE USER
  rest.put(URL_AUTH.USER, async (req, res, ctx) => {
    const body = (await req.json()) as unknown
    const isNotNull = body !== null
    const isObject = typeof body === "object"
    const isEmailInBody = isObject && isNotNull && "email" in body
    let newFakeUser = fakeUser.user
    if (isEmailInBody) {
      newFakeUser = {
        ...newFakeUser,
        email: body.email as string,
      }
    }
    if (isEmailInBody && body.email === API_ERROR) {
      return res(
        ctx.status(400),
        ctx.json({ message: "API error when update user" })
      )
    }
    return res(ctx.status(200), ctx.json(newFakeUser))
  }),
]
const handlersProfile = [
  // GET PROFILE
  rest.get(URL_DB.PROFILES, async (req, res, ctx) => {
    const searchTab = req.url.search.split(".")
    const id = searchTab[searchTab.length - 1]
    if (id === API_ERROR) {
      return res(
        ctx.status(400),
        ctx.json({ message: "API error when get profile" })
      )
    }
    return res(ctx.status(200), ctx.json({ ...fakeUserProfile, id }))
  }),
  // UPDATE PROFILE
  rest.post(URL_DB.PROFILES, async (req, res, ctx) => {
    const body = (await req.json()) as unknown
    const isObject = typeof body === "object" && body

    if (isObject && "username" in body && body.username === API_ERROR) {
      return res(
        ctx.status(400),
        ctx.json({ message: "API error when update profile" })
      )
    }

    return res(ctx.status(200))
  }),
  // DOWNLOAD AVATAR
  rest.get(URL_DB.STORAGES, async (req, res, ctx) => {
    const pathTab = req.url.pathname.split("/")
    const path = pathTab[pathTab.length - 1]
    if (path === API_ERROR) {
      return res(
        ctx.status(400),
        ctx.json({ message: "API error when download image" })
      )
    }
    const newBlob = new Blob([""], { type: "text/html" })
    return res(ctx.status(200), ctx.json(newBlob))
  }),
  // UPLOAD AVATAR
  rest.post(URL_DB.STORAGES, async (req, res, ctx) => {
    const pathTab = req.url.pathname.split("/")
    const path = pathTab[pathTab.length - 1]
    if (path === API_ERROR) {
      return res(
        ctx.status(400),
        ctx.json({ message: "API error when upload image" })
      )
    }
    if (path === "fake_url_null.png") {
      return res(ctx.status(400), ctx.json(null))
    }
    return res(ctx.status(200), ctx.json({ path }))
  }),
]

const handlersAPI = [
  // GET CATEGORIES
  rest.get(URL_MEAL.CATEGORIES, async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeMealCategories))
  }),
  // GET MEAL BY NAME
  rest.get(URL_MEAL.NAME, async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeMeals))
  }),
  // GET MEAL BY CATEGORY
  rest.get(URL_MEAL.CATEGORY, async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeMealByCategory))
  }),
  // GET RECIPE
  rest.get(URL_MEAL.RECIPE, async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeRecipe))
  }),
]

export const handlers = [...handlersAuth, ...handlersProfile, ...handlersAPI]
