import { Skeleton } from "../ui/skeleton"

const HighLightSkeleton = () => {
  const nbHighLight = 10
  const list = []
  for (let i = 0; i < nbHighLight; i++) {
    list.push(i)
  }

  return (
    <>
      {list.map((_item, index) => (
        <Skeleton className="h-10 w-28 rounded-full" key={index} />
      ))}
    </>
  )
}

export default HighLightSkeleton
