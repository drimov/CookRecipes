import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Moon, Sun } from "lucide-react"

import { Button } from "../ui/button"
import { COLOR_ACCENT } from "@/commons/constants"
import { Link } from "../ui/link"
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
            <Link to={"/"} className="w-full">
              Home
            </Link>
          </DropdownMenuItem>
          {links.map((link, index) => (
            <DropdownMenuItem key={index}>
              <Link to={`/${link}`} className="w-full">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
