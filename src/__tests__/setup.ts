import * as matchers from "@testing-library/jest-dom/matchers"

import { expect, vi } from "vitest"

import { cleanup } from "@testing-library/react"
import createFetchMock from "vitest-fetch-mock"
import { server } from "@/mocks/data/server"

const fetchMocker = createFetchMock(vi)
fetchMocker.disableMocks()

beforeEach(() => cleanup())
beforeAll(() => server.listen({ onUnhandledRequest: `error` }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

expect.extend(matchers)
