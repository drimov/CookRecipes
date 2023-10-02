import { Separator } from "@/components/ui/separator"

const imagesTab = ["gallery-9", "gallery-5"] as const
const Eat = () => {
  return (
    <div className="flex flex-col items-center md:flex-row-reverse md:justify-evenly">
      <div className="flex flex-col items-center gap-4 py-4">
        <h3 className="text-3xl font-bold">Eat Healthy</h3>
        <h3 className="text-xl font-bold">Live Well</h3>
      </div>
      <Separator className="md:hidden" />
      <div className="flex flex-col gap-4 py-4 md:flex-row">
        {imagesTab.map((imageName, index) => (
          <img
            key={imageName + index}
            src={`./${imageName}.svg`}
            alt="image"
            className=" w-60 rounded-bl-3xl border-2 border-orange-300"
          />
        ))}
      </div>
    </div>
  )
}

export default Eat
