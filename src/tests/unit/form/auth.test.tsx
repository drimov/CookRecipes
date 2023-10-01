import { act, screen } from "@testing-library/react"
import { beforeEach, expect } from "vitest"

import AuthForm from "@/components/form/auth"
import { ERROR } from "@/commons/constants"
import { faker } from "@faker-js/faker"
import { render } from "@/tests/utils"
import userEvent from "@testing-library/user-event"

const mockSubmit = vi.fn()

describe("Auth Form", () => {
  let emailInput: HTMLElement
  let passwordInput: HTMLElement

  beforeEach(async () => {
    act(() => {
      render(
        <AuthForm authForm="login" isLoading={false} onSubmit={mockSubmit} />
      )
    })
    emailInput = screen.getByLabelText(/Email/)
    passwordInput = screen.getByLabelText(/Password/)

    //clean input and clean call
    await userEvent.clear(emailInput)
    await userEvent.clear(passwordInput)
    mockSubmit.mockClear()
  })

  test("Form is correct", async () => {
    const email = faker.internet.email()
    const password = faker.internet.password()

    expect(emailInput.getAttribute("value")).toBe("")
    expect(passwordInput.getAttribute("value")).toBe("")

    await userEvent.type(emailInput, email)
    await userEvent.type(passwordInput, password)
    await userEvent.click(screen.getByRole("button", { name: /Log in/ }))
    const errorEmail = screen.queryByText(ERROR.INVALID_EMAIL)
    const errorPassword = screen.queryByText(ERROR.INVALID_PASSWORD)

    expect(errorEmail).not.toBeInTheDocument()
    expect(errorPassword).not.toBeInTheDocument()
    expect(mockSubmit).toHaveBeenCalled()
  })

  test("Form with empty email", async () => {
    const password = faker.internet.password()

    expect(emailInput.getAttribute("value")).toBe("")
    expect(passwordInput.getAttribute("value")).toBe("")

    await userEvent.type(passwordInput, password)
    await userEvent.click(screen.getByRole("button", { name: /Log in/ }))

    const errorEmail = screen.queryByText(ERROR.EMPTY_EMAIL)
    const errorPassword = screen.queryByText(ERROR.INVALID_PASSWORD)

    expect(errorEmail).toBeInTheDocument()
    expect(errorPassword).not.toBeInTheDocument()
    expect(mockSubmit).not.toBeCalled()
  })

  test("Form with invalid email", async () => {
    const invalidEmail = "test@test"
    const password = faker.internet.password()

    expect(emailInput.getAttribute("value")).toBe("")
    expect(passwordInput.getAttribute("value")).toBe("")

    await userEvent.type(emailInput, invalidEmail)
    await userEvent.type(passwordInput, password)
    await userEvent.click(screen.getByRole("button", { name: /Log in/ }))

    const errorEmail = screen.queryByText(ERROR.INVALID_EMAIL)
    const errorPassword = screen.queryByText(ERROR.INVALID_PASSWORD)

    expect(errorEmail).toBeInTheDocument()
    expect(errorPassword).not.toBeInTheDocument()
    expect(mockSubmit).not.toBeCalled()
  })

  test("Form with invalid password", async () => {
    const email = faker.internet.email()
    const password = "12345" // need 6 or more characters

    expect(emailInput.getAttribute("value")).toBe("")
    expect(passwordInput.getAttribute("value")).toBe("")

    await userEvent.type(emailInput, email)
    await userEvent.type(passwordInput, password)
    await userEvent.click(screen.getByRole("button", { name: /Log in/ }))

    const errorEmail = screen.queryByText(ERROR.INVALID_EMAIL)
    const errorPassword = screen.queryByText(ERROR.INVALID_PASSWORD)

    expect(errorEmail).not.toBeInTheDocument()
    expect(errorPassword).toBeInTheDocument()
    expect(mockSubmit).not.toBeCalled()
  })
})

describe("Auth Form submit button", () => {
  test("Form: button disabled when isLoading is true", () => {
    act(() => {
      render(
        <AuthForm authForm="login" isLoading={true} onSubmit={mockSubmit} />
      )
    })
    const btnSubmit = screen.getByRole("button", { name: /Log in/ })

    expect(btnSubmit).toHaveAttribute("disabled")
  })
  test("Form: button not disabled when isLoading is false", () => {
    act(() => {
      render(
        <AuthForm authForm="login" isLoading={false} onSubmit={mockSubmit} />
      )
    })
    const btnSubmit = screen.getByRole("button", { name: /Log in/ })
    expect(btnSubmit).not.toHaveAttribute("disabled")
  })
})
