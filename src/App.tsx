import "./App.css"

import { Authentification, Home, Produit, Profil, Search } from "./pages"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { AppWrapper } from "./context"
import RootLayout from "./pages/RootLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "profil",
        element: <Profil />,
      },
      {
        path: "produit",
        element: <Produit />,
      },
      {
        path: "login",
        element: <Authentification type="login" />,
      },
      {
        path: "signup",
        element: <Authentification type="signup" />,
      },
    ],
  },
])

const App = () => {
  return (
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  )
}

export default App
