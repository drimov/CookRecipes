import { Button } from "@/components/ui/button"
import { NavLink } from "@/components/ui/navlink"

const Content = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="my-4 flex flex-col">
        <h3 className=" my-4 text-3xl font-bold text-primary">Best recipes</h3>
        <h3 className="my-4 text-3xl font-bold">from around the world</h3>

        <h3 className="my-4 pr-4 text-base">
          The recipes are written from the place the food comes from ti maintain
          the authenticity of the food.
        </h3>
        <NavLink to={"search"} className={"mx-auto"}>
          <Button
            variant="secondary"
            className="mx-auto my-4 w-40 rounded-full border-2 border-orange-200 font-semibold md:block"
            size={"lg"}
          >
            Learn More
          </Button>
        </NavLink>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        <img
          src="./gallery-4.svg"
          alt="image"
          className=" w-64 rounded-bl-3xl border-2 border-orange-300"
        />
        <img
          src="./gallery-10.svg"
          alt="image"
          className=" w-64 rounded-bl-3xl border-2 border-orange-300"
        />
        <img
          src="./gallery-11.svg"
          alt="image"
          className=" w-64 rounded-bl-3xl border-2 border-orange-300"
        />
        <img
          src="./gallery-12.svg"
          alt="image"
          className=" w-64 rounded-bl-3xl border-2 border-orange-300"
        />
      </div>
    </div>
  )
}

export default Content
