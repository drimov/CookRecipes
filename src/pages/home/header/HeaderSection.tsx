import { BookOpen, Users2, Utensils } from "lucide-react"

import { Separator } from "@/components/ui/separator"

type Item = {
  icon: JSX.Element
  title: string
  description: string
}
const items: Item[] = [
  {
    icon: <BookOpen className="h-auto w-12 p-2 md:w-14" />,
    title: "Over 100+",
    description: "recipes from around the world.",
  },
  {
    icon: <Utensils className="h-auto w-12 p-2 md:w-14" />,
    title: "Cooking tips",
    description: "to help you improve your cooking skills.",
  },
  {
    icon: <Users2 className="h-auto w-12 p-2 md:w-14" />,
    title: "Communities",
    description: "to share and get closer with people.",
  },
]

export const HeaderSection = () => {
  return (
    <div className="flex flex-col gap-4 rounded-e-3xl p-4 md:flex-row md:justify-center md:border-2 md:border-primary/50">
      <Separator className="md:hidden" />
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-2"
        >
          <div className="rounded-full bg-primary">{item.icon}</div>
          <div className="text-center capitalize">{item.title}</div>
          <div className="text-center capitalize">{item.description}</div>
        </div>
      ))}
    </div>
  )
}

export default HeaderSection
