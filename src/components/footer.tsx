import { Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "./ui/button"
import { NavLink } from "./ui/navlink"
import { RouteKeys } from "@/types/app"
import { User } from "@supabase/supabase-js"
import { getTitle } from "@/helpers"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useLogoutUser } from "@/commons/api/hooks/auth"

const Footer = () => {
  const { user } = useAuthContext()
  const routesRight: RouteKeys[] = ["home", "produit", "search"]
  const routesUnregistred: RouteKeys[] = ["login", "signup"]
  const routesRegistred: RouteKeys[] = ["profile", "logout"]
  const routesleft = user ? routesRegistred : routesUnregistred

  return (
    <div className="flex flex-col items-center bg-primary-foreground px-4 py-2">
      <div className="grid grid-cols-1 p-4 lg:grid-cols-3 lg:items-center">
        <div className="mx-auto lg:col-span-1">
          <img src="/logo.svg" alt="logo" width={"100px"} />
        </div>
        <div className="grid items-end md:grid-cols-2 lg:col-span-2">
          <div className="flex flex-col items-center md:col-span-1 md:items-start md:px-8">
            {/* about */}
            <div className="text-center md:text-left">
              <h1 className="mb-2 mt-4 text-lg text-primary md:text-2xl">
                About
              </h1>
              <p className="my-1 text-muted-foreground md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniamquis.
              </p>
            </div>
            {/* social */}
            <div className="my-4 flex flex-row gap-4 text-primary">
              <Button variant={"ghost"}>
                <Twitter />
              </Button>
              <Button variant={"ghost"}>
                <Facebook />
              </Button>
              <Button variant={"ghost"}>
                <Instagram />
              </Button>
            </div>
          </div>
          {/* site map */}
          <div className="flex h-full flex-col items-center md:col-span-1 md:text-lg">
            <h1 className="my-2 text-lg text-primary md:text-2xl">Site map</h1>
            <div className="my-2 flex flex-row md:leading-8 lg:my-4">
              <SiteMap routesArray={routesRight} user={user} />
              <SiteMap routesArray={routesleft} user={user} />
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-muted-foreground" />
        </div>
      </div>
      <div className="my-2 grid h-8 grid-cols-2 items-center text-center font-medium text-primary">
        <p className="mx-2 border-r-2 border-muted-foreground">@2023</p>
        <p className="mx-2">All rights reserved</p>
      </div>
    </div>
  )
}

type SiteMapProps = {
  routesArray: RouteKeys[]
  user: User | null
}
const SiteMap = ({ routesArray, user }: SiteMapProps) => {
  const mutation = useLogoutUser()
  return (
    <ul>
      {routesArray.map((route, index) => (
        <li
          key={index}
          className="border-2 border-transparent font-semibold text-muted-foreground"
        >
          <NavLink
            to={route}
            border="left"
            className=" px-2"
            onClick={user ? () => mutation.mutateAsync() : undefined}
          >
            {getTitle(route)}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
export default Footer
