import { testFakeUrlImage, testUserProfile } from "./data"

import { rest } from "msw"

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET

export const URLS_DB = {
  PROFILES: `${SUPABASE_URL}/rest/v1/profiles`,
  STORAGES: `${SUPABASE_URL}/storage/v1/object/${SUPABASE_BUCKET}/*`,
}
export const handlers = [
  // GET PROFILE
  rest.get(URLS_DB.PROFILES, async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...testUserProfile }))
  }),
  // UPDATE PROFILE
  rest.post(URLS_DB.PROFILES, (_req, res, ctx) => {
    return res(ctx.status(200))
  }),
  // DOWNLOAD AVATAR
  rest.get(URLS_DB.STORAGES, (_req, res, ctx) => {
    const newBlob = new Blob([""], { type: "text/html" })
    return res(ctx.status(200), ctx.json(newBlob))
  }),
  // UPLOAD AVATAR
  rest.post(URLS_DB.STORAGES, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ path: testFakeUrlImage }))
  }),
]
