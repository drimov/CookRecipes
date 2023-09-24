import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import HomeSection from "@/pages/home/HomeSection"

const Home = () => {
  return (
    <div className="my-4 flex flex-col justify-center md:my-8">
      <div className="">
        <div className="flex flex-col md:flex-row">
          <div className="flex basis-3/5 flex-col gap-20 rounded-2xl bg-orange-300 p-2 md:bg-transparent">
            <h2 className="w-max-96 text-4xl font-semibold capitalize tracking-widest">
              Find your best cooking recipes{" "}
              <span className=" font-semibold capitalize tracking-wider text-orange-400">
                here!
              </span>
            </h2>
            <div className="flex flex-col justify-center md:flex-row md:justify-start md:gap-6">
              <Button
                className=" mx-auto w-40 animate-pulse font-semibold md:m-0"
                size={"lg"}
              >
                START NOW
              </Button>
              <Button
                variant="secondary"
                className=" hidden rounded-full border-2 border-orange-200 font-semibold md:block"
                size={"lg"}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden basis-2/5 rounded-l-[8rem] rounded-r-lg bg-primary md:block">
            <div className=" flex h-full flex-row items-center gap-x-7">
              <div>
                <img
                  src="./gallery-2.jpg"
                  alt="repas"
                  className="relative -left-10 w-36 justify-center rounded-full"
                />
              </div>
              <div className="flex flex-col gap-y-28">
                <img
                  src="./gallery-4.jpg"
                  alt="repas"
                  className=" w-24 justify-center rounded-full"
                />
                <img
                  src="./gallery-3.jpg"
                  alt="repas"
                  className="w-24 justify-center rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <HomeSection />
          </div>
        </div>
      </div>

      <div className=" hidden justify-between md:flex md:flex-row">
        {/* <div>
          <img
            src="./gallery-9.jpg"
            alt="image"
            className="my-10 w-72 rounded-t-full border-2 border-orange-300"
          />
        </div> */}
        <HomeSection />
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col items-center md:flex-row md:justify-evenly">
        <div className="flex flex-col items-center gap-4 ">
          <h3 className="text-3xl font-bold">Eat Healthy</h3>
          <h3 className=" mb-10 text-xl font-bold">Live Well</h3>
        </div>
        <Separator className="mb-4 md:hidden" />

        <div className="flex flex-col gap-4 md:flex-row ">
          <img
            src="./gallery-9.jpg"
            alt="image"
            className=" w-60 rounded-bl-3xl border-2 border-orange-300"
          />
          <img
            src="./gallery-5.jpg"
            alt="image"
            className=" w-60 rounded-bl-3xl border-2 border-orange-300"
          />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col items-center md:flex-row">
        <div className="my-4 flex flex-col">
          <h3 className=" my-4 text-3xl font-bold text-primary">
            Best recipes
          </h3>
          <h3 className="my-4 text-3xl font-bold">from around the world</h3>

          <h3 className="my-4 pr-4 text-base">
            the recipes are written from the place the food comes from ti
            maintain the authenticity of the food.
          </h3>
          <Button
            variant="secondary"
            className="mx-auto my-4 w-40 rounded-full border-2 border-orange-200 font-semibold md:block"
            size={"lg"}
          >
            Learn More
          </Button>
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          <img
            src="./gallery-8.jpg"
            alt="image"
            className=" w-64 rounded-bl-3xl border-2 border-orange-300"
          />
          <img
            src="./gallery-10.jpg"
            alt="image"
            className=" w-64 rounded-bl-3xl border-2 border-orange-300"
          />
          <img
            src="./gallery-11.jpg"
            alt="image"
            className=" w-64 rounded-bl-3xl border-2 border-orange-300"
          />
          <img
            src="./gallery-12.jpg"
            alt="image"
            className=" w-64 rounded-bl-3xl border-2 border-orange-300"
          />
        </div>
      </div>
    </div>
  )
}
export default Home
