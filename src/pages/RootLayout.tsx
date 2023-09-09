import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="container h-screen bg-inherit px-8 md:px-16 lg:px-24">
      <Outlet />
    </div>
  )
}

export default RootLayout
