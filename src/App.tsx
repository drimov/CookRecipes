import "./App.css"

import { AppWrapper } from "./context"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/config"

const App = () => {
  return (
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  )
}

export default App
