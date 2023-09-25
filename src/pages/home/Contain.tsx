import { Button } from "@/components/ui/button"

const Contain = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="my-4 flex flex-col">
        <h3 className=" my-4 text-3xl font-bold text-primary">Best recipes</h3>
        <h3 className="my-4 text-3xl font-bold">from around the world</h3>

        <h3 className="my-4 pr-4 text-base">
          the recipes are written from the place the food comes from ti maintain
          the authenticity of the food.
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
  )
}

export default Contain
