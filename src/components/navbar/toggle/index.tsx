import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RoutesItem, ThemeItem } from "./items"

import { Button } from "@/components/ui/button"
import { COLOR_ACCENT } from "@/commons/constants"
import { Menu } from "lucide-react"
import { useAuthContext } from "@/hooks/useAuthContext"

export function NavbarToggle() {
  const { user } = useAuthContext()

  return (
    <div className="flex md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <Menu color={COLOR_ACCENT} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <ThemeItem />
          <RoutesItem user={user} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
