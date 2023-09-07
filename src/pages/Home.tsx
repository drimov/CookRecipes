import { Outlet } from "react-router-dom"

import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    // <div className="mx-0 grid h-screen w-screen grid-cols-1 bg-primary-foreground">
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default Home
