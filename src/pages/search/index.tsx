import { SearchType, useSearch } from "@/hooks/useSearch"

import Highlight from "./HighLight"
import MealCardList from "./MealCardList"
import SearchForm from "@/components/form/search"

const Search = () => {
  const { setSearch, category, activeSearch, activeValue } = useSearch()

  const handleSearch = (term: string, type: SearchType) => {
    setSearch(term, type)
  }

  return (
    <div className="items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <div className="flex w-full flex-col justify-center p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col justify-center gap-4 px-4 py-8">
            <h1 className="text-center text-3xl font-semibold md:text-left md:text-5xl">
              Make delicious food
            </h1>
            <h2 className="text-center text-2xl text-orange-500 md:text-left md:text-4xl">
              and feel experience like a professional chef
            </h2>
            <p className="text-center text-lg md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              debitis.
            </p>
            <SearchForm handleSearch={handleSearch} />
          </div>
          <img
            src="./gallery-3.svg"
            alt="photo"
            className="hidden h-auto rounded-full md:block md:w-60 lg:w-80"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Highlight setCategory={handleSearch} categorySelected={category} />
        <MealCardList searchTerm={activeValue} searchType={activeSearch} />
      </div>
    </div>
  )
}

export default Search
