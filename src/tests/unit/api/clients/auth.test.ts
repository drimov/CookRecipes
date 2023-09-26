import {
  createUser,
  getSessionUser,
  loginUser,
  logoutUser,
  updateUser,
} from "@/commons/api/clients/auth"
import { describe, expect, test } from "vitest"
import {
  testUserCreate,
  testUserEmailTakenCreate,
  testUserSession,
} from "@/mocks/data"

import { faker } from "@faker-js/faker"
import { supabase } from "@/lib/supabase/client"

describe("Auth function: createUser", () => {
  test("createUser: success", async () => {
    const mockSignUp = vi.spyOn(supabase.auth, "signUp").mockResolvedValue({
      data: testUserCreate,
      error: null,
    })
    const email = faker.internet.email()
    const password = faker.internet.password()

    const result = await createUser(email, password)

    expect(result).toEqual(testUserCreate)
    expect(mockSignUp).toHaveBeenCalled()
  })
  test("createUser: API error", () => {
    const mockSignUp = vi
      .spyOn(supabase.auth, "signUp")
      .mockImplementation(() => {
        throw Error("API error when create user")
      })

    expect(mockSignUp).toThrowErrorMatchingInlineSnapshot(
      '"API error when create user"'
    )
    expect(mockSignUp).toHaveBeenCalled()
  })

  test("createUser: email already taken", async () => {
    const mockSignUp = vi.spyOn(supabase.auth, "signUp").mockResolvedValue({
      data: testUserEmailTakenCreate,
      error: null,
    })

    const email = faker.internet.email()
    const password = faker.internet.password()
    const mockCreateUser = vi.fn(async () => await createUser(email, password))

    try {
      await mockCreateUser()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        `[Email is already taken: Please use another email]`
      )
    }
    expect(mockSignUp).toHaveBeenCalled()
  })
})

describe("Auth function: loginUser", () => {
  test("loginUser: success", async () => {
    const mockSignIn = vi
      .spyOn(supabase.auth, "signInWithPassword")
      .mockResolvedValue({
        data: testUserCreate,
        error: null,
      })
    const email = faker.internet.email()
    const password = faker.internet.password()

    const result = await loginUser(email, password)

    expect(result).toEqual(testUserCreate)
    expect(mockSignIn).toHaveBeenCalled()
  })

  test("loginUser: API error", () => {
    const mockLogin = vi
      .spyOn(supabase.auth, "signInWithPassword")
      .mockImplementation(() => {
        throw Error("API error when login user")
      })

    expect(mockLogin).toThrowErrorMatchingInlineSnapshot(
      '"API error when login user"'
    )
    expect(mockLogin).toHaveBeenCalled()
  })
})

describe("Auth function: logoutUser", () => {
  test("logoutUser: success", async () => {
    const mockSignOut = vi.spyOn(supabase.auth, "signOut").mockResolvedValue({
      error: null,
    })

    await logoutUser()

    expect(mockSignOut).toHaveBeenCalled()
  })

  test("logoutUser: API error", () => {
    const mockSignOut = vi
      .spyOn(supabase.auth, "signOut")
      .mockImplementation(() => {
        throw Error("API error when logout user")
      })

    expect(mockSignOut).toThrowErrorMatchingInlineSnapshot(
      '"API error when logout user"'
    )
    expect(mockSignOut).toHaveBeenCalled()
  })
})

describe("Auth function: getSessionUser", () => {
  test("getSessionUser: success", async () => {
    const mockGetSessionUser = vi
      .spyOn(supabase.auth, "getSession")
      .mockResolvedValue({
        data: { session: testUserSession },
        error: null,
      })

    const result = await getSessionUser()

    expect(result).toEqual(testUserSession)
    expect(mockGetSessionUser).toHaveBeenCalled()
  })

  test("getSessionUser: API error", () => {
    const mockGetSessionUser = vi
      .spyOn(supabase.auth, "getSession")
      .mockImplementation(() => {
        throw Error("API error getSession")
      })

    expect(mockGetSessionUser).toThrowErrorMatchingInlineSnapshot(
      '"API error getSession"'
    )
    expect(mockGetSessionUser).toHaveBeenCalled()
  })
})

describe("Auth function: updateUser", () => {
  test("updateUser: success", async () => {
    const mockUpdateUser = vi
      .spyOn(supabase.auth, "updateUser")
      .mockResolvedValue({
        data: testUserCreate,
        error: null,
      })

    const email = faker.internet.email()
    const password = faker.internet.password()

    const result = await updateUser(email, password)

    expect(result).toEqual(testUserCreate)
    expect(mockUpdateUser).toHaveBeenCalled()
  })

  test("updateUser: API error", () => {
    const mockUpdateUser = vi
      .spyOn(supabase.auth, "updateUser")
      .mockImplementation(() => {
        throw Error("API error when update user")
      })

    expect(mockUpdateUser).toThrowErrorMatchingInlineSnapshot(
      '"API error when update user"'
    )
    expect(mockUpdateUser).toHaveBeenCalled()
  })
})
