import * as matchers from "@testing-library/jest-dom/matchers"

import { expect } from "vitest"
import { fetch } from "cross-fetch"
import { server } from "@/mocks/data/server"

global.fetch = fetch

beforeAll(() => server.listen({ onUnhandledRequest: `error` }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

expect.extend(matchers)
