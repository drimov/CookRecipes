import "./App.css"
import { Home, Search, Profil, Produit, Authentification } from "./pages"
import { ThemeProvider } from "./context/ThemeContext"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/produit",
    element: <Produit />,
  },
  {
    path: "/auth",
    element: <Authentification />,
  },
])

type AppProps = {
  children?: React.ReactNode
}
const App = ({ children }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} /> {/* Appel router */}
      <Home />
      <Search />
      <Profil />
      <Produit />
      <Authentification />
      {children}
    </ThemeProvider>
  )
}

export default App
