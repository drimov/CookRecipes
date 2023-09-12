import {
  LinkProps as LinkPropsRouter,
  Link as LinkRouter,
} from "react-router-dom"

import { AppLinks } from "@/types/app"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const linkVariants = cva("text-sm")

type LinkProps = Omit<LinkPropsRouter, "to"> & {
  className?: string
  to: AppLinks
}

function Link({ className, to, ...props }: LinkProps) {
  return (
    <LinkRouter to={to} className={cn(linkVariants, className)} {...props} />
  )
}
export { Link }
