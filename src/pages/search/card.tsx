import { AlarmCheck, Star, UtensilsCrossed } from "lucide-react"
import { dataCategories } from "./searchItems"

// console.log(dataCategories.categories)

const Card = () => {
  return (
    <>
      {dataCategories.categories.map((category) => {
        return (
          <div key={category.idCategory} className="">
            <div className="relative m-10 flex h-60 w-48 flex-col items-center   rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="absolute  -top-10   w-28 rounded-full"
              />
              <div className="absolute inset-0 mt-10 flex flex-col items-center justify-center gap-2">
                <h3 className="text-2xl font-semibold">
                  {category.strCategory}
                </h3>
                <div className="flex flex-row items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <AlarmCheck />
                    <h3>7 mn</h3>
                  </div>
                  <div className=" border-r-500"></div>
                  <div className="flex flex-col items-center gap-2">
                    <UtensilsCrossed />
                    <h3>Serving</h3>
                  </div>
                </div>
                <div className="mt-2 flex flex-row items-center gap-2">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Card