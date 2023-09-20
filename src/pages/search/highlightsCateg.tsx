import { useState } from "react"
import { useCategories } from "./searchItems.tsx"
import { Button } from "@/components/ui/button"

const HighlightsCateg = () => {
  const { data, error, status } = useCategories()

  const [isActiveCategory, setIsActiveCategory] = useState(
    data?.categories[0].strCategory
  )

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "error" && error instanceof Error) {
    return <div>Error: {error.message}</div>
  }

  return (
    //filtre card onclick button
    <div>
      {data?.categories.map((category) => {
        return (
          <Button
            key={category.idCategory}
            variant={
              category.strCategory === isActiveCategory ? "default" : "ghost"
            }
            onClick={() => setIsActiveCategory(category.strCategory)}
          >
            {category.strCategory}
          </Button>
        )
      })}
    </div>
  )
}

export default HighlightsCateg
