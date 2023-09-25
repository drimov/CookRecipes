import { BookOpen, Users2, Utensils } from "lucide-react"

type Item = {
  icon: JSX.Element
  title: string
  description: string
}
const items: Item[] = [
  {
    // icon: "./book_icon.svg",
    icon: (
      <BookOpen className="h-auto w-12 rounded-full bg-primary p-2 md:w-14" />
    ),
    title: "Over 100+",
    description: "recipes from around the world.",
  },
  {
    icon: (
      <Utensils className="h-auto w-12 rounded-full bg-primary p-2 md:w-14" />
    ),
    title: "Cooking tips",
    description: "to help you improve your cooking skills.",
  },
  {
    icon: (
      <Users2 className="h-auto w-12 rounded-full bg-primary p-2 md:w-14" />
    ),
    title: "Communities",
    description: "to share and get closer with people.",
  },
]

export const HomeSection = () => {
  return (
    <div className="my-10 flex flex-col gap-4 rounded-e-3xl border-2 border-orange-300 p-4 md:flex-row">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center ">
          {/* <img
            src={item.icon}
            alt={item.icon}
            className="w-12 rounded-full bg-primary p-1 md:w-14"
          /> */}
          {/* <div className="w-12 rounded-full bg-primary p-1 md:w-14"> */}
          {item.icon}
          {/* </div> */}

          <div className="text-center capitalize">{item.title}</div>
          <div className="text-center capitalize">{item.description}</div>
          {/* <BookOpen /> */}
        </div>
      ))}
    </div>
  )
}

export default HomeSection
