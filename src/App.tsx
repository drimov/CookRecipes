import "./App.css"

import { Authentification, Home, Produit, Profil, Search } from "./pages"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { ThemeProvider } from "./context/ThemeContext"

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

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
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  )
}

export default App
