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
            <Link to={"/"}>Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/produit">Produit</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/search">Search</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/login">Login</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/signup">Sign Up</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
