import MealCardSkeleton from "./MealCard"

const MealCardListSkeleton = () => {
  const nbMeals = 10
  const list = []
  for (let i = 0; i < nbMeals; i++) {
    list.push(i)
  }

  return (
    <>
      {list.map((_item, index) => (
        <MealCardSkeleton key={`${index}item`} />
      ))}
    </>
  )
}

export default MealCardListSkeleton
