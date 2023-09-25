import { act, screen } from "@testing-library/react"
import { beforeEach, expect } from "vitest"

import AuthForm from "@/components/form/auth"
import { faker } from "@faker-js/faker"
import { render } from "@/tests/utils"
import userEvent from "@testing-library/user-event"

describe("Auth Form", () => {
  const mockSubmit = vi.fn()

  beforeEach(() => {
    act(() => {
      render(
        <AuthForm authForm="login" isLoading={false} onSubmit={mockSubmit} />
      )
    })
  })

  test("Email is not a valid", async () => {
    const invalidEmail = "test@test"
    const password = faker.internet.password()
    const emailInput = screen.getByLabelText(/Email/)
    const passwordInput = screen.getByLabelText(/Password/)

    expect(emailInput.getAttribute("value")).toBe("")
    expect(passwordInput.getAttribute("value")).toBe("")

    await userEvent.type(emailInput, invalidEmail)
    await userEvent.type(passwordInput, password)
    await userEvent.click(screen.getByRole("button", { name: /Log in/ }))

    expect(/Must be a valid email/).toBeTruthy()
    expect(mockSubmit).not.toBeCalled()
  })

  test("Email is valid", async () => {
    const validEmail = faker.internet.email()
    const password = faker.internet.password()
    const emailInput = screen.getByLabelText(/Email/)
    const passwordInput = screen.getByLabelText(/Password/)

    expect(emailInput.getAttribute("value")).toBe("")
    expect(passwordInput.getAttribute("value")).toBe("")

    await userEvent.type(emailInput, validEmail)
    await userEvent.type(passwordInput, password)
    await userEvent.click(screen.getByRole("button", { name: /Log in/ }))
    const errorEmail = screen.queryByText(/Must be a valid email/)

    expect(errorEmail).not.toBeInTheDocument()
    expect(mockSubmit).toBeCalled()
    // expect(mockSubmit.).toHaveBeenCalledWith({
    //   email: validEmail,
    //   password,
    // })
  })
})
// expect(emailInput.getAttribute("value")).toBe(invalidEmail)
