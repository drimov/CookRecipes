import { AppWrapper } from "@/context"
import { MemoryRouter } from "react-router-dom"
import { render as renderReactTestingLibrary } from "@testing-library/react"

type WrapperContext = {
  children: React.ReactNode
}
const wrapperContext = ({ children }: WrapperContext) => {
  return (
    <AppWrapper>
      <MemoryRouter>{children}</MemoryRouter>
    </AppWrapper>
  )
}

type RenderOptions = {
  options?: RenderOptions
}
const render = (ui: React.ReactElement, { ...options }: RenderOptions = {}) => {
  return renderReactTestingLibrary(ui, { wrapper: wrapperContext, ...options })
}

export { render, wrapperContext }
