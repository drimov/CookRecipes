// import { useState } from "react"
import { dataCategories } from "./searchItems"
import { Button } from "@/components/ui/button"

const data = dataCategories.categories

const ButtonCateg = () => {
  //   const [data, setData] = useState([])

  return (
    <div>
      {data.map((category) => {
        return (
          <Button key={category.idCategory} variant="ghost">
            {category.strCategory}
          </Button>
        )
      })}
    </div>
  )
}

export default ButtonCateg
