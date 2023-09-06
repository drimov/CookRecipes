import "./App.css"

import { Authentification, Home, Produit, Profil, Search } from "./pages"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { ThemeProvider } from "./context/ThemeContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
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
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
