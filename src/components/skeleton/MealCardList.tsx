import MealCardSkeleton from "./MealCard"

type MealCardListSkeletonProps = {
  nbMeals?: number
}
const MealCardListSkeleton = ({ nbMeals = 10 }: MealCardListSkeletonProps) => {
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
