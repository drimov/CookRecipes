import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { NavLink } from "../ui/navlink"
import { RouteAuthKeys } from "@/types/app"
import { getTitle } from "@/helpers"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useGetAvatar } from "@/commons/api/hooks/profile"

export const UnregistredNav = () => {
  const routesNavButton: RouteAuthKeys[] = ["login", "signup"]
  return (
    <>
      {routesNavButton.map((route, index) => (
        <NavLink to={route} key={index}>
          <Button
            variant={route === "login" ? "ghost" : "default"}
            className="lg:text-lg"
          >
            {getTitle(route)}
          </Button>
        </NavLink>
      ))}
    </>
  )
}

type RegistredNavProps = {
  logout: () => void
  isLoading: boolean
}

export const RegistredNav = ({ logout, isLoading }: RegistredNavProps) => {
  const { profile } = useAuthContext()
  const { mutateAsync } = useGetAvatar()
  const avatar = useRef<string | null>(null)

  useEffect(() => {
    const getAvatar = async () => {
      if (profile?.avatar_url) {
        avatar.current = await mutateAsync(profile?.avatar_url)
      }
    }
    void getAvatar()
  }, [mutateAsync, profile?.avatar_url])
  return (
    <>
      <NavLink to={"profile"}>
        <Avatar className="mx-2">
          <AvatarImage src={avatar.current ?? ""} alt="avatar-profile" />
          <AvatarFallback className="border-2 border-primary">
            CR
          </AvatarFallback>
        </Avatar>
      </NavLink>

      <NavLink to={"logout"}>
        <Button className="lg:text-lg" onClick={() => logout()}>
          {getTitle("logout")}
          <LogOut
            className={`ml-4 ${isLoading ? `animate-ping` : `animate-none`}`}
            size={"24px"}
          />
        </Button>
      </NavLink>
    </>
  )
}
