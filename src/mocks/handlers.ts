import {
  fakeMealByCategory,
  fakeMealCategories,
  fakeMeals,
  fakeRecipe,
  fakeUrlImage,
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

const handlersSUPABASE = [
  // GET PROFILE
  rest.get(URL_DB.PROFILES, async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeUserProfile))
  }),
  // UPDATE PROFILE
  rest.post(URL_DB.PROFILES, (_req, res, ctx) => {
    return res(ctx.status(200))
  }),
  // DOWNLOAD AVATAR
  rest.get(URL_DB.STORAGES, (_req, res, ctx) => {
    const newBlob = new Blob([""], { type: "text/html" })
    return res(ctx.status(200), ctx.json(newBlob))
  }),
  // UPLOAD AVATAR
  rest.post(URL_DB.STORAGES, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ path: fakeUrlImage }))
  }),
]

const handlersAPI = [
  // GET CATEGORIES
  rest.get(URL_MEAL.CATEGORIES, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeMealCategories))
  }),
  // GET MEAL BY NAME
  rest.get(URL_MEAL.NAME, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeMeals))
  }),
  // GET MEAL BY CATEGORY
  rest.get(URL_MEAL.CATEGORY, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeMealByCategory))
  }),
  // GET RECIPE
  rest.get(URL_MEAL.RECIPE, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeRecipe))
  }),
]

export const handlers = [...handlersSUPABASE, ...handlersAPI]
