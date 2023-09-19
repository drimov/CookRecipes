import { Outlet, useLocation } from "react-router-dom"

import Footer from "@/components/footer"
import Loading from "@/components/loading"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { useAuthContext } from "@/hooks/useAuthContext"

const RootLayout = () => {
  const { pathname } = useLocation()
  const pathForbidden = ["/login", "/signup"]
  const { isLoading } = useAuthContext()

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container bg-inherit px-4 md:px-8 lg:px-16">
            {!pathForbidden.includes(pathname) ? <Navbar /> : null}
            <Outlet />
            <Toaster />
          </div>
          {!pathForbidden.includes(pathname) ? <Footer /> : null}
        </>
      )}
    </>
  )
}

export default RootLayout
