import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/pages/profile/SidebarNav"
import { ProfileLinks } from "@/types/app"
import { Outlet } from "react-router-dom"

type SidebarNavItemProps = { title: string; href: ProfileLinks }[]

const sidebarNavItems: SidebarNavItemProps = [
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Favorite",
    href: "/profile/favorite",
  },
]

export default function ProfileLayout() {
  return (
    <>
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Paramètres</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
