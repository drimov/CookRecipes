import { Outlet, useLocation } from "react-router-dom"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"

const RootLayout = () => {
  const { pathname } = useLocation()
  const pathForbidden = ["/login", "/signup"]

  return (
    <>
      <div className="container bg-inherit px-4 md:px-8 lg:px-16">
        {!pathForbidden.includes(pathname) ? <Navbar /> : null}
        <Outlet />
        <Toaster />
      </div>
      {!pathForbidden.includes(pathname) ? <Footer /> : null}
    </>
  )
}

export default RootLayout
