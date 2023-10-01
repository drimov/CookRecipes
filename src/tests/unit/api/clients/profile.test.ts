import { describe, expect, test } from "vitest"
import {
  downloadImage,
  getProfile,
  updateProfile,
  uploadAvatar,
} from "@/commons/api/clients/profile"

import { fakeUserProfile } from "@/mocks/data"

const fakeUrlImage = "fake_url.png"
export const fakeUrlImageNull = "fake_url_null.png"
const fakeId = "1234"
const fakeImg = "fake.pnj"
const fakePath = "fake_path"
const apiError = "api_error"
const file = new File([""], fakeUrlImage)

const mockedCreateObjectURL = vi
  .spyOn(URL, "createObjectURL")
  .mockImplementation(() => fakeImg)

describe("Profile function: getProfile", () => {
  test("getProfile: success", async () => {
    const profile = await getProfile(fakeId)
    const newFakeProfile = { ...fakeUserProfile, id: fakeId }

    expect(profile).toEqual({ ...newFakeProfile })
  })

  test("getProfile: error", async () => {
    try {
      await getProfile(apiError)
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`
        {
          "message": "API error when get profile",
        }
      `)
    }
  })
})
describe("Profile function: updateProfile", () => {
  test("updateProfile: success", async () => {
    expect(await updateProfile(fakeUserProfile)).toBeUndefined()
  })

  test("updateProfile: error", async () => {
    try {
      await updateProfile({ ...fakeUserProfile, username: apiError })
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`
        {
          "message": "API error when update profile",
        }
      `)
    }
  })
})
describe("Profile function: downloadImage", () => {
  test("downloadImage: success with string", async () => {
    const result = await downloadImage(fakePath)

    expect(result).toEqual(fakeImg)
  })

  test("downloadImage: is null", async () => {
    mockedCreateObjectURL.mockImplementation(() => "")
    const result = await downloadImage(fakePath)

    expect(result).toEqual("")
  })

  test("downloadImage: error", async () => {
    try {
      await downloadImage(apiError)
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        "[StorageApiError: API error when download image]"
      )
    }
  })
})
describe("Profile function: uploadAvatar", () => {
  test("uploadAvatar: success with url", async () => {
    const result = await uploadAvatar(fakeUrlImage, file)

    expect(result.path).toEqual(fakeUrlImage)
  })
  test("uploadAvatar: is null", async () => {
    const result = await uploadAvatar(fakeUrlImageNull, file)
    expect(result).toEqual(null)
  })

  test("uploadAvatar: error", async () => {
    try {
      await uploadAvatar(apiError, file)
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`
        {
          "message": "API error when upload image",
        }
      `)
    }
  })
})
