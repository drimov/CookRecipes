import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
    <Card className="mx-auto my-10 w-[350px]">
      <CardHeader>
        <CardTitle className="text-center">
          What are your favorite cuisines?
        </CardTitle>
        <CardDescription>PERSONALIZE YOUR EXPERIENCE.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search here ..."
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Categories</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="beef">Beef</SelectItem>
                  <SelectItem value="chick">Chicken</SelectItem>
                  <SelectItem value="veget">Vegetarian</SelectItem>
                  <SelectItem value="dessert">Dessert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSearch}>Search</Button>
      </CardFooter>
    </Card>
  )
}

export default SearchPage
