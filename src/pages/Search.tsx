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
    <div>
      <h1>Mise en place search page</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search here ..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchPage
