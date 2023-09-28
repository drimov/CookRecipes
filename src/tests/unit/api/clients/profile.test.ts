import { describe, expect, test } from "vitest"
import {
  downloadImage,
  getProfile,
  updateProfile,
  uploadAvatar,
} from "@/commons/api/clients/profile"
import { testFakeUrlImage, testUserProfile } from "@/mocks/data"

import { rest } from "msw"
import { server } from "@/mocks/data/server"

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET

describe("Auth function: getProfile", () => {
  test("getProfile: success", async () => {
    const profile = await getProfile("123")
    expect(profile).toEqual({ ...testUserProfile })
  })

  test("getProfile: error", async () => {
    server.use(
      rest.get(`${SUPABASE_URL}/rest/v1/profiles`, async (_req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when get profile" })
        )
      })
    )
    const mockGetProfile = vi.fn(async () => await getProfile("1234"))

    try {
      await mockGetProfile()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`
        {
          "message": "API error when get profile",
        }
      `)
    }
  })
})
describe("Auth function: updateProfile", () => {
  test("updateProfile: success", async () => {
    expect(await updateProfile(testUserProfile)).toBeUndefined()
  })

  test("updateProfile: error", async () => {
    server.use(
      rest.post(`${SUPABASE_URL}/rest/v1/profiles`, async (_req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when update profile" })
        )
      })
    )
    const mockUpdateProfile = vi.fn(
      async () => await updateProfile(testUserProfile)
    )

    try {
      await mockUpdateProfile()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`
        {
          "message": "API error when update profile",
        }
      `)
    }
  })
})
describe("Auth function: downloadImage", () => {
  test("downloadImage: success", async () => {
    const fakeImg = "fake.pnj"
    const createObjectURLSpy = vi.spyOn(URL, "createObjectURL")
    createObjectURLSpy.mockReturnValue(fakeImg)
    const result = await downloadImage("path")

    expect(result).toEqual(fakeImg)
  })

  test("downloadImage: error", async () => {
    server.use(
      rest.get(
        `${SUPABASE_URL}/storage/v1/object/${SUPABASE_BUCKET}/path`,
        async (_req, res, ctx) => {
          return res(
            ctx.status(400),
            ctx.json({ message: "API error when upload image" })
          )
        }
      )
    )
    const mockDownloadImage = vi.fn(async () => await downloadImage("path"))

    try {
      await mockDownloadImage()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        '[StorageUnknownError: {"size":0,"timeout":0}]'
      )
    }
  })
})
describe("Auth function: uploadAvatar", () => {
  test("uploadAvatar: success", async () => {
    const file = new File([testFakeUrlImage], testFakeUrlImage)

    const result = await uploadAvatar(testFakeUrlImage, file)
    expect(result.path).toEqual(testFakeUrlImage)
  })

  test("uploadAvatar: error", async () => {
    server.use(
      rest.post(
        `${SUPABASE_URL}/storage/v1/object/${SUPABASE_BUCKET}/${testFakeUrlImage}`,
        async (_req, res, ctx) => {
          return res(
            ctx.status(400),
            ctx.json({ message: "API error when upload image" })
          )
        }
      )
    )
    const file = new File([testFakeUrlImage], testFakeUrlImage)

    const mockUploadAvatar = vi.fn(
      async () => await uploadAvatar(testFakeUrlImage, file)
    )

    try {
      await mockUploadAvatar()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`
        {
          "message": "API error when upload image",
        }
      `)
    }
  })
})
