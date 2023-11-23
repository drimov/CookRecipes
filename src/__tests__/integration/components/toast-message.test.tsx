import { describe, expect, test } from "vitest"

import { Toaster } from "@/components/ui/toaster"
import { faker } from "@faker-js/faker"
import { render } from "../../utils"
import { screen } from "@testing-library/react"
import { toastMessage } from "@/components/toast-message"

type TestComponentPropos = {
  props: {
    title: string
    message: string
    variant?: "success" | "error"
  }
}
const TestComponent = ({ props }: TestComponentPropos) => {
  const { title, message, variant } = props
  toastMessage({
    title,
    message,
    variant,
  })
  return (
    <div>
      <Toaster />
    </div>
  )
}
const successColor = "bg-green-500"
const errorColor = "bg-red-500"
describe("Component: Toast message", () => {
  const title = faker.word.words()
  const message = faker.lorem.sentence()
  test("toast: default values", () => {
    render(<TestComponent props={{ title, message }} />)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(message)).toBeInTheDocument()
    const bgColorElement = screen
      .getAllByRole("status")[0]
      .getAttribute("class")
    const classTab = bgColorElement?.split(" ")
    const isBgColorSuccess = classTab?.includes(successColor)

    expect(isBgColorSuccess).toBeTruthy()
  })

  test("toast: with error color ", () => {
    render(<TestComponent props={{ title, message, variant: "error" }} />)

    const bgColorElement = screen
      .getAllByRole("status")[0]
      .getAttribute("class")
    const classTab = bgColorElement?.split(" ")
    const isBgColorError = classTab?.includes(errorColor)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(message)).toBeInTheDocument()
    expect(isBgColorError).toBeTruthy()
  })
})
