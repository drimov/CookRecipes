import * as dotenv from "dotenv"

import { defineConfig } from "cypress"

dotenv.config()

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/",
  },
  env: {
    email: process.env.CYPRESS_EMAIL,
    password: process.env.CYPRESS_PASSWORD,
  },
})
