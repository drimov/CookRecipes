import { Authentification, Home, Produit, Profile, Search } from "@/pages"

import Error404 from "@/pages/Error404"
import Favorite from "@/pages/profile/Favorite"
import ProfileLayout from "@/pages/profile"
import ProtectedRoute from "./ProtectedRoute"
import RootLayout from "@/pages/RootLayout"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
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
        element: (
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        ),
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
