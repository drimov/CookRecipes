import {
  API_AUTH_EMAIL_TAKEN,
  API_AUTH_ERROR_LOGOUT,
  API_ERROR,
} from "@/mocks/handlers"
import { beforeEach, describe, expect, test } from "vitest"
import {
  createUser,
  getSessionUser,
  loginUser,
  logoutUser,
  updateUser,
} from "@/commons/api/clients/auth"
import { fakeUser, fakeUserSession } from "@/mocks/data"

import { CreateUser } from "@/types/app"
import { faker } from "@faker-js/faker"
import { supabase } from "@/lib/supabase/client"

const localStorageName = "sb-tpyyaxuyruokfwnkqidu-auth-token" as const
describe("Auth function: createUser", () => {
  const mockSignIn = vi.spyOn(supabase.auth, "signUp")

  afterEach(() => {
    mockSignIn.mockClear()
  })

  test("createUser: success", async () => {
    const email = faker.internet.email()
    const password = faker.internet.password()
    const fakeCustomUser: CreateUser = {
      user: {
        ...fakeUser.user,
        email,
      },
      session: null,
    }
    const result = await createUser(email, password)
    expect(result).toEqual(fakeCustomUser)
    expect(mockSignIn).toHaveBeenCalled()
    expect(mockSignIn).toHaveBeenCalledTimes(1)
    expect(mockSignIn).toHaveBeenCalledWith({
      email,
      password,
    })
  })

  test("createUser: API error", async () => {
    const email = API_ERROR
    const password = faker.internet.password()
    try {
      await createUser(email, password)
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        "[AuthApiError: API error when create user]"
      )
    }
    expect(mockSignIn).toHaveBeenCalled()
    expect(mockSignIn).toHaveBeenCalledTimes(1)
    expect(mockSignIn).toHaveBeenCalledWith({
      email,
      password,
    })
  })

  test("createUser: email already taken", async () => {
    const email = API_AUTH_EMAIL_TAKEN
    const password = faker.internet.password()
    try {
      await createUser(email, password)
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        "[Email is already taken: Please use another email]"
      )
    }
    expect(mockSignIn).toHaveBeenCalled()
    expect(mockSignIn).toHaveBeenCalledTimes(1)
    expect(mockSignIn).toHaveBeenCalledWith({
      email,
      password,
    })
  })
})

describe("Auth function: loginUser", () => {
  const mockLogin = vi.spyOn(supabase.auth, "signInWithPassword")

  afterEach(() => {
    mockLogin.mockClear()
  })
  test("loginUser: success", async () => {
    const email = faker.internet.email()
    const password = faker.internet.password()
    const newFakeUserSession = {
      ...fakeUserSession,
      user: {
        ...fakeUserSession.user,
        email,
      },
    }

    const result = await loginUser(email, password)
    expect(result.user).toStrictEqual(newFakeUserSession.user)
    expect(mockLogin).toHaveBeenCalled()
    expect(mockLogin).toHaveBeenCalledTimes(1)
    expect(mockLogin).toHaveBeenCalledWith({ email, password })
  })

  test("loginUser: API error", async () => {
    const email = API_ERROR
    const password = faker.internet.password()

    try {
      await loginUser(email, password)
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        "[AuthApiError: API error when login user]"
      )
    }

    expect(mockLogin).toHaveBeenCalled()
    expect(mockLogin).toHaveBeenCalledTimes(1)
    expect(mockLogin).toHaveBeenCalledWith({ email, password })
  })
})

describe("Auth function: logoutUser", () => {
  const mockSignOut = vi.spyOn(supabase.auth, "signOut")

  beforeEach(() => {
    localStorage.setItem(localStorageName, JSON.stringify(fakeUserSession))
  })
  afterEach(() => {
    localStorage.removeItem(API_ERROR)
    mockSignOut.mockClear()
  })
  test("logoutUser: success", async () => {
    await logoutUser()

    expect(mockSignOut).toHaveBeenCalled()
    expect(mockSignOut).toHaveBeenCalledTimes(1)
  })

  test("logoutUser: API error", async () => {
    localStorage.setItem(API_AUTH_ERROR_LOGOUT, JSON.stringify(null))
    try {
      await logoutUser()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        "[AuthApiError: API error when logout user]"
      )
    }

    expect(mockSignOut).toHaveBeenCalled()
  })
})

describe("Auth function: getSessionUser", () => {
  const mockGetSessionUser = vi.spyOn(supabase.auth, "getSession")
  beforeEach(() => {
    localStorage.setItem(localStorageName, JSON.stringify(fakeUserSession))
  })
  afterEach(() => {
    localStorage.removeItem(localStorageName)
    localStorage.removeItem(API_ERROR)
    mockGetSessionUser.mockClear()
  })
  test("getSessionUser: success", async () => {
    const result = await getSessionUser()

    expect(result).toEqual(fakeUserSession)
    expect(mockGetSessionUser).toHaveBeenCalled()
    expect(mockGetSessionUser).toBeCalledTimes(1)
  })

  test("getSessionUser: API error", async () => {
    localStorage.setItem(API_ERROR, JSON.stringify(null))
    try {
      await getSessionUser()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        "[AuthApiError: API error when get session]"
      )
    }

    expect(mockGetSessionUser).toHaveBeenCalled()
    expect(mockGetSessionUser).toBeCalledTimes(1)
  })
})

describe("Auth function: updateUser", () => {
  const mockUpdateUser = vi.spyOn(supabase.auth, "updateUser")

  beforeEach(() => {
    localStorage.setItem(localStorageName, JSON.stringify(fakeUserSession))
  })
  afterEach(() => {
    localStorage.removeItem(localStorageName)
    mockUpdateUser.mockClear()
  })
  test("updateUser: success", async () => {
    const email = faker.internet.email()
    const password = faker.internet.password()

    const result = await updateUser(email, password)
    const newFakeUser = {
      ...fakeUser.user,
      email,
    }

    expect(result.user).toEqual(newFakeUser)
    expect(mockUpdateUser).toHaveBeenCalled()
    expect(mockUpdateUser).toHaveBeenCalledTimes(1)
    expect(mockUpdateUser).toHaveBeenCalledWith({ email, password })
  })

  test("updateUser: API error", async () => {
    const email = API_ERROR
    const password = faker.internet.password()

    try {
      await updateUser(email, password)
    } catch (error) {
      expect(error).toMatchInlineSnapshot(
        "[AuthApiError: API error when update user]"
      )
    }
    expect(mockUpdateUser).toHaveBeenCalled()
    expect(mockUpdateUser).toHaveBeenCalledTimes(1)
    expect(mockUpdateUser).toHaveBeenCalledWith({ email, password })
  })
})
