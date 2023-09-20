import Card from "./card.tsx"
import HighlightsCateg from "./highlightsCateg.tsx"

import SearchForm from "./searchForm.tsx"
import { useState } from "react"

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="place-content-center items-center justify-center p-2">
      <header className="flex items-center justify-center">
        <div className="m-4 flex flex-col items-center justify-center gap-10 space-x-4 md:flex-row">
          <div className="my-4 flex flex-col justify-center gap-4 p-4">
            <h3 className="text-center text-3xl font-semibold md:text-left md:text-5xl">
              Make delicious food
            </h3>
            <h3 className=" text-center text-2xl text-orange-500 md:text-left md:text-4xl">
              and feel experience like a professional chef
            </h3>
            <p className="text-center text-lg md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              debitis.
            </p>
            <SearchForm handleSearch={setSearchTerm} />
          </div>
          <div className="">
            <img
              src="./gallery-3.jpg"
              alt="photo"
              className="w-80 rounded-full"
            />
          </div>
        </div>
      </header>
      <div className="m-4 border-t-2"></div>
      <div className="mb-10  flex flex-col items-center gap-6">
        <h3>Highlights</h3>
        <div className="grid grid-cols-1 items-center gap-4 md:flex md:flex-row">
          <HighlightsCateg />
        </div>
      </div>
      <div className="mb-16 mt-4 items-center border-t-2"></div>
      <div className="mb-4 grid grid-cols-1 place-content-center items-center border-2 p-2 sm:grid-cols-2  md:p-6 lg:grid-cols-3 lg:p-6">
        <Card searchTerm={searchTerm} />
      </div>
    </div>
  )
}

export default SearchPage
