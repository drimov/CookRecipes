import "./App.css"

import { Authentification, Home, Produit, Search } from "./pages"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { AppWrapper } from "./context"
import RootLayout from "./pages/RootLayout"
import Error404 from "./pages/Error404"
import ProfileLayout from "./pages/profile"
import Favorite from "./pages/profile/Favorite"
import Profile from "./pages/profile/Profile"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error404 />,
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
        path: "profile",
        element: <ProfileLayout />,
        children: [
          { index: true, element: <Profile /> },
          { path: "favorite", element: <Favorite /> },
        ],
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
