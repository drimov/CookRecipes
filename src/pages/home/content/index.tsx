import Eat from "./Eat"
import Recipes from "./Recipes"
import { Separator } from "@/components/ui/separator"

const ContentList = () => {
  return (
    <div className="flex flex-col gap-4">
      <Eat />
      <Separator className="md:my-4" />
      <Recipes />
    </div>
  )
}

export default ContentList
