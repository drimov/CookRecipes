import HomeSection from "@/pages/home/HomeSection"
import { Button } from "@/components/ui/button"
import { NavLink } from "@/components/ui/navlink"

const HeaderHome = () => {
  return (
    <div>
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
              <NavLink to={"search"} className={"mx-auto"}>
                <Button
                  className=" mx-auto w-40 animate-pulse font-semibold md:m-0"
                  size={"lg"}
                >
                  START NOW
                </Button>
              </NavLink>
              <NavLink to={"search"} className={"mx-auto"}>
                <Button
                  variant="secondary"
                  className=" hidden rounded-full border-2 border-orange-200 font-semibold md:block"
                  size={"lg"}
                >
                  Learn More
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="hidden basis-2/5 rounded-l-[8rem] rounded-r-lg bg-primary md:block">
            <div className=" flex h-full flex-row items-center gap-x-7">
              <div>
                <img
                  src="./gallery-2.svg"
                  alt="repas"
                  className="relative -left-10 w-36 justify-center rounded-full"
                />
              </div>
              <div className="flex flex-col gap-y-28">
                <img
                  src="./gallery-4.svg"
                  alt="repas"
                  className=" w-24 justify-center rounded-full"
                />
                <img
                  src="./gallery-3.svg"
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
        <HomeSection />
      </div>
    </div>
  )
}

export default HeaderHome
