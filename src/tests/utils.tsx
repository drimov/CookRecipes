import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { MemoryRouter } from "react-router-dom"
import { ThemeProvider } from "@/context/ThemeContext"
import { render as renderReactTestingLibrary } from "@testing-library/react"

type WrapperContext = {
  children: React.ReactNode
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const wrapperContext = ({ children }: WrapperContext) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <MemoryRouter>{children}</MemoryRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

type RenderOptions = {
  options?: RenderOptions
}
const render = (ui: React.ReactElement, { ...options }: RenderOptions = {}) => {
  return renderReactTestingLibrary(ui, { wrapper: wrapperContext, ...options })
}

export { render, wrapperContext }
