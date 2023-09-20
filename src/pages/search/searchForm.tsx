import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

type SearchFormProps = {
  handleSearch: React.Dispatch<React.SetStateAction<string>>
}
const SearchForm = ({ handleSearch }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="my-4 flex flex-row justify-center gap-1 space-x-1.5">
      <Input
        className="md:w-80"
        type="text"
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        placeholder="Search here..."
      />
      <Button
        className="hidden md:block"
        onClick={() => handleSearch(searchTerm)}
      >
        Search
      </Button>
    </div>
  )
}

export default SearchForm
