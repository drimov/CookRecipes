import { Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "./ui/button"
import { LinksPath } from "@/types/app"
import { NavLink } from "./ui/navlink"
import { links } from "@/commons/constants"

const Footer = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <img src="/logo.svg" alt="logo" width={"100px"} />
      <div className="my-2 grid grid-cols-1 items-baseline md:grid-cols-3">
        <div className="flex flex-col items-center md:col-span-2 md:items-start md:px-8">
          {/* about */}
          <div className="text-center md:text-left">
            <h1 className="mb-2 mt-4 text-lg md:text-2xl">About</h1>
            <p className="my-1 text-muted-foreground md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniamquis.
            </p>
          </div>
          {/* social */}
          <div className="my-4 flex flex-row gap-4 ">
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
        <div className="flex w-full flex-col items-center md:col-span-1 md:items-center md:text-lg">
          <h1 className="my-2 text-lg md:text-2xl">Site map</h1>
          <div className=" my-2 flex flex-row md:leading-9">
            <ul>
              <li className=" border-2 border-transparent font-semibold text-muted-foreground">
                <NavLink to="/" border="left" className="px-2">
                  Home
                </NavLink>
              </li>
              <SiteMap pathArray={links.slice(0, 2)} />
            </ul>
            <ul>
              <SiteMap pathArray={links.slice(2, 5)} />
            </ul>
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
  pathArray: LinksPath[] | readonly LinksPath[]
}
const SiteMap = ({ pathArray }: SiteMapProps) => {
  return (
    <>
      {pathArray.map((pathLink, index) => (
        <li
          key={index}
          className="border-2 border-transparent font-semibold text-muted-foreground"
        >
          <NavLink to={`/${pathLink}`} border="left" className=" px-2">
            {pathLink.charAt(0).toUpperCase() + pathLink.slice(1)}
          </NavLink>
        </li>
      ))}
    </>
  )
}
export default Footer
