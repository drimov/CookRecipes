import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Moon, Sun } from "lucide-react"

import { Button } from "../ui/button"
import { COLOR_ACCENT } from "@/commons/constants"
import { NavLink } from "../ui/navlink"
import { links } from "@/types/app"
import { useTheme } from "@/hooks/useTheme"

export function NavbarToggle() {
  const { theme, setTheme } = useTheme()

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
          {theme === "dark" ? (
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun /> <p className="pl-2">Light</p>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <>
                <Moon /> <p className="pl-2">Dark</p>
              </>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <NavLink to={"/"} className={"w-full"} border="left">
              <p className="px-2">Home</p>
            </NavLink>
          </DropdownMenuItem>
          {links.map((link, index) => (
            <DropdownMenuItem key={index}>
              <NavLink to={`/${link}`} className={"w-full"} border="left">
                <p className="px-2">
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </p>
              </NavLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
