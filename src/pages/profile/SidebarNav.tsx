import { Link } from "@/components/ui/link"
import { RouteProfileKeys } from "@/types/app"
import { buttonVariants } from "@/components/ui/button/variants"
import { cn } from "@/lib/utils"
import { getRoute } from "@/helpers"
import { useLocation } from "react-router-dom"

type SidebarNavProps = {
  className?: string
  items: {
    route: RouteProfileKeys
    title: string
  }[]
}

export function SidebarNav({ className, items }: SidebarNavProps) {
  const { pathname } = useLocation()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
    >
      {items.map((item) => (
        <Link
          to={item.route}
          key={item.title}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === getRoute(item.route)
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
