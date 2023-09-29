import { describe, expect, test } from "vitest"
import {
  downloadImage,
  getProfile,
  updateProfile,
  uploadAvatar,
} from "@/commons/api/clients/profile"
import { testFakeUrlImage, testUserProfile } from "@/mocks/data"

import { URL_DB } from "@/mocks/handlers"
import { rest } from "msw"
import { server } from "@/mocks/data/server"

describe("Auth function: getProfile", () => {
  const testId = "1234"
  test("getProfile: success", async () => {
    const profile = await getProfile(testId)
    expect(profile).toEqual({ ...testUserProfile })
  })

  test("getProfile: error", async () => {
    server.use(
      rest.get(URL_DB.PROFILES, async (_req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when get profile" })
        )
      })
    )
    const mockGetProfile = vi.fn(async () => await getProfile(testId))

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
      rest.post(URL_DB.PROFILES, async (_req, res, ctx) => {
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
      rest.get(URL_DB.STORAGES, async (_req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when upload image" })
        )
      })
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
  const file = new File([testFakeUrlImage], testFakeUrlImage)

  test("uploadAvatar: success", async () => {
    const result = await uploadAvatar(testFakeUrlImage, file)
    expect(result.path).toEqual(testFakeUrlImage)
  })

  test("uploadAvatar: error", async () => {
    server.use(
      rest.post(URL_DB.STORAGES, async (_req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when upload image" })
        )
      })
    )

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
