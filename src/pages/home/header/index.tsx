import { Button } from "@/components/ui/button"
import HeaderSection from "./HeaderSection"
import { NavLink } from "@/components/ui/navlink"

const imagesTab = ["gallery-4", "gallery-3"] as const
const HeaderHome = () => {
  return (
    <>
      <div className="flex flex-col py-4 md:flex-row">
        <div className="flex basis-3/5 flex-col gap-20 rounded-2xl bg-orange-300 p-4 text-secondary md:bg-transparent md:text-secondary-foreground">
          <h2 className="w-max-96 text-4xl font-semibold capitalize tracking-widest">
            Find your best cooking recipes{" "}
            <span className="font-semibold capitalize tracking-wider text-primary/75">
              here!
            </span>
          </h2>
          <div className="flex flex-col justify-center md:flex-row md:justify-start md:gap-8">
            <NavLink to={"search"} className="mx-auto md:mx-0">
              <Button className="animate-pulse font-semibold md:px-8 md:py-6">
                START NOW
              </Button>
            </NavLink>
            <NavLink to={"search"}>
              <Button
                variant="outline"
                className="hidden rounded-full border-2 border-primary font-semibold md:flex md:px-8 md:py-6"
              >
                Learn More
              </Button>
            </NavLink>
          </div>
        </div>
        <div className="hidden basis-2/5 rounded-l-[8rem] rounded-r-lg bg-primary md:block">
          <div className="flex h-full flex-row items-center gap-x-7">
            <div>
              <img
                src="./gallery-2.svg"
                alt="repas"
                className="relative -left-10 w-36 justify-center rounded-full"
              />
            </div>
            <div className="flex flex-col gap-y-28">
              {imagesTab.map((imageName, index) => (
                <img
                  key={imageName + index}
                  src={`./${imageName}.svg`}
                  alt="repas"
                  className="w-24 justify-center rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <HeaderSection />
    </>
  )
}

export default HeaderHome
