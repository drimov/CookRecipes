type Item = {
  icon: string
  title: string
  description: string
}
const items: Item[] = [
  {
    icon: "./book_icon.svg",
    title: "Over 100+",
    description: "recipes from around the world.",
  },
  {
    icon: "./ustensil_icon.svg",
    title: "Cooking tips",
    description: "to help you improve your cooking skills.",
  },
  {
    icon: "./people_icon.svg",
    title: "Communities",
    description: "to share and get closer with people.",
  },
]

export const HomeSection = () => {
  return (
    <div className="my-10 flex flex-col gap-4 rounded-e-3xl border-2 border-orange-300 p-4 md:flex-row">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center ">
          <img
            src={item.icon}
            alt={item.icon}
            className="w-12 rounded-full bg-primary p-1 md:w-14"
          />
          <div className="text-center capitalize">{item.title}</div>
          <div className="text-center capitalize">{item.description}</div>
        </div>
      ))}
    </div>
  )
}

export default HomeSection
