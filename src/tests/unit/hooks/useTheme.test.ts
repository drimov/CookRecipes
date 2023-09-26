import { act, renderHook } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"

import { ThemeProvider } from "@/context/ThemeContext"
import { useTheme } from "@/hooks/useTheme"

describe("Hook: useTheme", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-color-scheme: dark)",
      })),
    })
    window.localStorage.clear()
  })

  test("Default theme is system", () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider })
    expect(result.current.theme).toBe("system")
  })

  test("Set Dark theme", () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider })

    expect(result.current.theme).toBe("system")
    act(() => {
      result.current.setTheme("dark")
    })
    expect(result.current.theme).toBe("dark")
  })

  test("Set Light theme", () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider })

    expect(result.current.theme).toBe("system")
    act(() => {
      result.current.setTheme("light")
    })
    expect(result.current.theme).toEqual("light")
  })
})
