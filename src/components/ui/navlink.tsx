import {
  NavLinkProps as NavLinkPropsRouter,
  NavLink as NavLinkRouter,
} from "react-router-dom"

import { AppRouteKeys } from "@/types/app"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { getRoute } from "@/helpers"

const navlinkVariants = cva("lg:text-xl")

type NavLinkProps = Omit<NavLinkPropsRouter, "to"> & {
  to: AppRouteKeys
  border?: "left" | "bottom"
  className?: string
}

function NavLink({ className, to, border, ...props }: NavLinkProps) {
  let borderValue = ""

  switch (border) {
    case "left":
      borderValue = "border-l-2"
      break
    case "bottom":
      borderValue = "border-b-2"
      break
    case undefined:
      borderValue = ""
      break
  }

  return (
    <NavLinkRouter
      to={getRoute(to)}
      className={({ isActive }) =>
        cn(
          navlinkVariants(),
          `${
            isActive ? "border-primary" : "border-transparent"
          }  ${borderValue} ${className}`
        )
      }
      {...props}
    />
  )
}
export { NavLink }
