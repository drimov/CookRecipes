import {
  NavLinkProps as NavLinkPropsRouter,
  NavLink as NavLinkRouter,
} from "react-router-dom"

import { Links } from "@/types/app"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const navlinkVariants = cva("lg:text-xl")

type NavLinkProps = Omit<NavLinkPropsRouter, "to"> & {
  to: Links
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
      to={to}
      className={({ isActive }) =>
        cn(
          navlinkVariants(),
          `${
            isActive ? "border-primary" : "border-none"
          }  ${borderValue} ${className}`
        )
      }
      {...props}
    />
  )
}
export { NavLink }
