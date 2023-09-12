import { Link } from "@/components/ui/link"
import { RouteProfileKeys } from "@/types/app"
import { buttonVariants } from "@/components/ui/button/variants"
import { cn } from "@/lib/utils"
import { useState } from "react"

type SidebarNavProps = {
  className?: string
  items: {
    href: RouteProfileKeys
    title: string
  }[]
}

export function SidebarNav({ className, items }: SidebarNavProps) {
  const [pathname, setPathname] = useState("Profile")

  const clickHandler = (page: string) => {
    setPathname(page)
  }

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
    >
      {items.map((item) => (
        <Link
          to={item.href}
          onClick={() => clickHandler(item.title)}
          key={item.title}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.title
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
