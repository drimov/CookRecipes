import {
  fakeMealByCategory,
  fakeMealCategories,
  fakeMeals,
  fakeRecipe,
  fakeUserProfile,
} from "./data"

import { API_MEAL_ENDPOINTS } from "@/commons/constants"
import { rest } from "msw"

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET

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

const API_ERROR = "api_error"
const handlersSUPABASE = [
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
    if (
      body &&
      typeof body === "object" &&
      "username" in body &&
      body.username === API_ERROR
    ) {
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

export const handlers = [...handlersSUPABASE, ...handlersAPI]
