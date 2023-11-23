import { act, renderHook } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { useSearch } from "@/hooks/useSearch"

describe("Hook: useSearch", () => {
  test("Default value state", () => {
    const { result } = renderHook(() => useSearch())

    expect(result.current.category).toBe("All")
    expect(result.current.activeSearch).toBe("name")
    expect(result.current.activeValue).toBe("")
  })

  test("Set value for category type", () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setSearch("SeaFood", "category")
    })

    expect(result.current.category).toBe("SeaFood")
    expect(result.current.activeSearch).toBe("category")
    expect(result.current.activeValue).toBe("SeaFood")
  })
  test("Set value for name type", () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setSearch("Corba", "name")
    })

    expect(result.current.category).toBe("All")
    expect(result.current.activeSearch).toBe("name")
    expect(result.current.activeValue).toBe("Corba")
  })
  test("Set value for name type and category", () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.setSearch("Corba", "name")
      result.current.setSearch("SeaFood", "category")
    })

    expect(result.current.category).toBe("SeaFood")
    expect(result.current.activeSearch).toBe("category")
    expect(result.current.activeValue).toBe("SeaFood")
  })
})
