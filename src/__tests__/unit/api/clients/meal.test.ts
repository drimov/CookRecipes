import { describe, expect, test } from "vitest"
import {
  fakeMealByCategory,
  fakeMealCategories,
  fakeMeals,
  fakeRecipe,
} from "@/mocks/data"
import {
  getCategories,
  getMealByCategory,
  getMealByName,
  getRecipe,
} from "@/commons/api/clients/meal"

import { URL_MEAL } from "@/mocks/handlers"
import { rest } from "msw"
import { server } from "@/mocks/data/server"

describe("Meal function: getCategories", () => {
  test("getCategories: success", async () => {
    const result = await getCategories()
    expect(result).toEqual(fakeMealCategories)
  })
  test("getCategories: error", async () => {
    server.use(
      rest.get(URL_MEAL.CATEGORIES, (_req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when get categories" })
        )
      })
    )
    const mockGetCategories = vi.fn(async () => await getCategories())

    try {
      await mockGetCategories()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`
        {
          "message": "API error when get categories",
        }
      `)
    }
  })
})

describe("Meal function: getMealByName", () => {
  const mealName = "corba"
  test("getMealByName: success", async () => {
    const result = await getMealByName(mealName)
    expect(result).toEqual(fakeMeals)
  })
  test("getMealByName: error", async () => {
    server.use(
      rest.get(URL_MEAL.NAME, (_req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when get meal by name" })
        )
      })
    )
    const mockGetMealByName = vi.fn(async () => await getMealByName(mealName))

    try {
      await mockGetMealByName()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`
        {
          "message": "API error when get meal by name",
        }
      `)
    }
  })
})

describe("Meal function: getMealByCategory", () => {
  const mealCategory = "SeaFood"
  test("getMealByCategory: success", async () => {
    const result = await getMealByCategory(mealCategory)
    expect(result).toEqual(fakeMealByCategory)
  })
  test("getMealByCategory: error", async () => {
    server.use(
      rest.get(URL_MEAL.CATEGORY, (_req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when get meal by category" })
        )
      })
    )
    const mockGetMealByCategory = vi.fn(
      async () => await getMealByCategory(mealCategory)
    )

    try {
      await mockGetMealByCategory()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`
        {
          "message": "API error when get meal by category",
        }
      `)
    }
  })
})

describe("Meal function: getRecipe", () => {
  const recipeId = "12345"
  test("getRecipe: success", async () => {
    const result = await getRecipe(recipeId)
    expect(result).toEqual(fakeRecipe)
  })
  test("getRecipe: error", async () => {
    server.use(
      rest.get(URL_MEAL.RECIPE, (_req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({ message: "API error when get recipe" })
        )
      })
    )
    const mockGetMealByCategory = vi.fn(async () => await getRecipe(recipeId))

    try {
      await mockGetMealByCategory()
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`
        {
          "message": "API error when get recipe",
        }
      `)
    }
  })
})
