import { Skeleton } from "../ui/skeleton"

type HighLightProps = {
  nbHighLight?: number
}
const HighLightSkeleton = ({ nbHighLight = 10 }: HighLightProps) => {
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
