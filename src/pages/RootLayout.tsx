import { Outlet, useLocation } from "react-router-dom"

import Navbar from "@/components/navbar"

const RootLayout = () => {
  const { pathname } = useLocation()
  const pathForbidden = ["/login", "/signup"]

  return (
    <div className="container h-screen bg-inherit px-4 md:px-8 lg:px-16">
      {!pathForbidden.includes(pathname) ? <Navbar /> : null}
      <Outlet />
    </div>
  )
}

export default RootLayout
