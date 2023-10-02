import ContentList from "./content"
import HeaderHome from "./header"
import { Separator } from "@/components/ui/separator"

const Home = () => {
  return (
    <div className="flex flex-col justify-center py-4 md:py-8">
      <HeaderHome />
      <Separator className="my-4 md:my-8" />
      <ContentList />
    </div>
  )
}
export default Home
