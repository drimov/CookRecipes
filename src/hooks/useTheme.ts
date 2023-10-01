import { ThemeProviderState, initialState } from "@/context/ThemeContext"
import { createContext, useContext } from "react"

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState)
const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
export { useTheme }
