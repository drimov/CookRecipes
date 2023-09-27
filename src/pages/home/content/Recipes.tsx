import { Button } from "@/components/ui/button"
import { NavLink } from "@/components/ui/navlink"

const imagesTab = [
  "gallery-4",
  "gallery-10",
  "gallery-11",
  "gallery-12",
] as const
const Recipes = () => {
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
            variant="outline"
            className="mx-auto my-4 w-40 rounded-full border-2 border-primary font-semibold md:block"
            size={"lg"}
          >
            Learn More
          </Button>
        </NavLink>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {imagesTab.map((imageName, index) => (
          <img
            key={imageName + index}
            src={`./${imageName}.svg`}
            alt="image"
            className="md:w-82 w-64 rounded-bl-3xl border-2 border-orange-300"
          />
        ))}
      </div>
    </div>
  )
}

export default Recipes
