import { Button } from "@/components/ui/button"
import Card from "./card.tsx"
import { Input } from "@/components/ui/input"

import React, { useState } from "react"

type SearchPageProps = {
  onSearch: (query: string) => void
}

const SearchPage: React.FC<SearchPageProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    // Perform search logic here using the searchQuery state
    onSearch(searchQuery)
  }

  return (
    <>
      <header>
        <div className="m-4 flex flex-col items-center justify-center gap-10 space-x-4 md:flex-row">
          <div className="my-4 flex flex-col justify-center gap-4 p-4">
            <h3 className="text-5xl font-semibold">Make delicious food</h3>
            <h3 className=" text-4xl text-orange-500">
              and feel experience like a professional chef
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              debitis.
            </p>
            <div className="my-4 flex flex-row space-x-1.5">
              <Input
                className="w-80"
                id="name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search here ..."
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </div>
          <div className="">
            <img
              src="../public/gallery-3.jpg"
              alt="photo"
              className="w-80 rounded-full"
            />
          </div>
        </div>
      </header>
      <div className="m-4 border-t-2"></div>
      <div className="mb-10 flex flex-col items-center gap-6">
        <h3>Highlights</h3>
        <div className="flex flex-row gap-4">
          <Button>Category 1</Button>
          <Button variant="ghost">Category 2</Button>
          <Button variant="ghost">Category 3</Button>
          <Button variant="ghost">Category 4</Button>
          <Button variant="ghost">Category 5</Button>
        </div>
      </div>
      <div className="mb-16 mt-4 border-t-2"></div>
      <div className="bor mb-4 grid grid-cols-2 items-center border-2 p-4 md:grid-cols-3 lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* <CardContent>
        <div className="my-4 flex flex-row space-x-1.5">
          <Input
            id="name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search here ..."
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <div className="flex flex-row justify-evenly space-x-4">
          <div className="flex flex-col justify-center gap-6 text-4xl font-semibold">
            <h3>Your favorite food</h3>
            <h3>Make it good</h3>
          </div>
          <img src="../public/hero.png" alt="photo" className="w-96 " />
        </div>
        <div className="m-4 border-t-2"></div>
        <div className=" flex flex-col items-center">
          <h3>Highlights</h3>
          <div
            className="mt-8 flex
         flex-row gap-4"
          >
            <div className="flex flex-col items-center">
              <img
                src="../public/gallery-1.jpg"
                alt="photo"
                className="w-32 rounded-full"
              />
              <h4>Categories 1</h4>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="../public/gallery-1.jpg"
                alt="photo"
                className="w-32 rounded-full"
              />
              <h4>Categories 1</h4>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="../public/gallery-1.jpg"
                alt="photo"
                className="w-32 rounded-full"
              />
              <h4>Categories 1</h4>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="../public/gallery-1.jpg"
                alt="photo"
                className="w-32 rounded-full"
              />
              <h4>Categories 1</h4>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="../public/gallery-1.jpg"
                alt="photo"
                className="w-32 rounded-full"
              />
              <h4>Categories 1</h4>
            </div>
          </div>
        </div>
        <div className="m-4 border-t-2"></div>
        <div className="relative flex flex-row items-center">
          <img
            src="../public/gallery-8.jpg"
            alt="photo"
            className="w-96 rounded-md"
          />
          <div className=" absolute -left-4 flex w-80 flex-col gap-4 rounded-md bg-orange-500 p-4">
            <h3>Easy Simple</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ab labore voluptates tempora modi facilis praesentium ea.
              Consequuntur, eveniet quasi.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
      </CardContent> */}
    </>
  )
}

export default SearchPage
