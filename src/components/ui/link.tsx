import {
  LinkProps as LinkPropsRouter,
  Link as LinkRouter,
} from "react-router-dom"

import { AppRouteKeys } from "@/types/app"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { getRoute } from "@/helpers"

const linkVariants = cva("text-sm")

type LinkProps = Omit<LinkPropsRouter, "to"> & {
  className?: string
  to: AppRouteKeys
}

function Link({ className, to, ...props }: LinkProps) {
  return (
    <LinkRouter
      to={getRoute(to)}
      className={cn(linkVariants, className)}
      {...props}
    />
  )
}
export { Link }
