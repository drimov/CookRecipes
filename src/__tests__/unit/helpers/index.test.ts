import { describe, expect, test } from "vitest"
import { getError, getRoute, getTitle } from "@/helpers"

import { faker } from "@faker-js/faker"
import { routes } from "@/commons/constants"

describe("Helpers simple functions", () => {
  test("getRoute", () => {
    expect(getRoute("favorite")).toBe(routes["favorite"])
    expect(getRoute("home")).toBe(routes["home"])
    expect(getRoute("login")).toBe(routes["login"])
  })
  test("getTitle", () => {
    expect(getTitle("favorite")).toBe("Favorite")
    expect(getTitle("home")).toBe("Home")
    expect(getTitle("login")).toBe("Login")
  })
})
describe("Helpers error function", () => {
  test("getError: default value, without instance error", () => {
    const error: unknown = ""
    const message = faker.lorem.sentence({ min: 3, max: 6 })
    const result = getError(error, { message })

    expect(result.message).toEqual(message)
    expect(result.name).toEqual("Unexpected error")
  })

  test("getError: default value, with instance error", () => {
    const message = faker.lorem.sentence({ min: 3, max: 6 })
    const error = Error(message)
    const result = getError(error, { message: "" })

    expect(result.message).toEqual(message)
    expect(result.name).toEqual("Error")
  })
  test("getError: default value with custom name", () => {
    const message = faker.lorem.sentence({ min: 3, max: 6 })
    const name = faker.lorem.word()
    const error: unknown = ""
    const result = getError(error, { message, name })

    expect(result.message).toEqual(message)
    expect(result.name).toEqual(name)
  })
  test("getError: error with custom name", () => {
    const message = faker.lorem.sentence({ min: 3, max: 6 })
    const name = faker.lorem.word()
    const error = Error(message)
    error.name = name
    const result = getError(error, { message: "" })

    expect(result.message).toEqual(message)
    expect(result.name).toEqual(name)
  })
})
