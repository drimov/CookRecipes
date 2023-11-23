import { LoginText, SignupText } from "@/pages/authentification"
import { describe, expect } from "vitest"

import { Authentification } from "@/pages"
import { act } from "react-dom/test-utils"
import { render } from "../../utils"
import { screen } from "@testing-library/react"

describe("Authentication", () => {
  test("Props 'login' into Authentication render Login page", () => {
    act(() => {
      render(<Authentification type="login" />)
    })

    const title = screen.getByText(LoginText.title)
    const subheading = screen.getByText(LoginText.subheading)
    const text = screen.getByText(LoginText.text)

    expect(title).toBeTruthy()
    expect(subheading).toBeTruthy()
    expect(text).toBeTruthy()
  })
  test("Props 'signup' into Authentication render SignUp page", () => {
    act(() => {
      render(<Authentification type="signup" />)
    })

    const title = screen.getByText(SignupText.title)
    const subheading = screen.getByText(SignupText.subheading)
    const text = screen.getByText(SignupText.text)

    expect(title).toBeTruthy()
    expect(subheading).toBeTruthy()
    expect(text).toBeTruthy()
  })
})
