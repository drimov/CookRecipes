import { Separator } from "@/components/ui/separator"
import HeaderHome from "./Header"
import Content from "./Content"

const Home = () => {
  return (
    <div className="my-4 flex flex-col justify-center md:my-8">
      <HeaderHome />
      <Separator className="my-4" />
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-evenly">
        <div className="flex flex-col items-center gap-4 ">
          <h3 className="text-3xl font-bold">Eat Healthy</h3>
          <h3 className=" mb-10 text-xl font-bold">Live Well</h3>
        </div>
        <Separator className="mb-4 md:hidden" />

        <div className="flex flex-col gap-4 md:flex-row ">
          <img
            src="./gallery-9.svg"
            alt="image"
            className=" w-60 rounded-bl-3xl border-2 border-orange-300"
          />
          <img
            src="./gallery-5.svg"
            alt="image"
            className=" w-60 rounded-bl-3xl border-2 border-orange-300"
          />
        </div>
      </div>
      <Separator className="my-4" />
      <Content />
    </div>
  )
}
export default Home
