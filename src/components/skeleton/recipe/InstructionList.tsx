import InstructionSkeleton from "./Instruction"
import { Skeleton } from "@/components/ui/skeleton"

type InstructionProps = {
  nbInstructions?: number
}
const InstructionListSkeleton = ({ nbInstructions = 5 }: InstructionProps) => {
  const list = []
  for (let i = 0; i < nbInstructions; i++) {
    list.push(i)
  }
  return (
    <div className="flow-root py-8">
      <h2 className="py-4 text-center text-xl font-semibold md:py-8 md:text-left md:text-2xl lg:text-3xl">
        <Skeleton className="h-8 w-48" />
      </h2>
      <ul role="list">
        {list?.map((_item, index) => (
          <InstructionSkeleton
            key={index}
            index={index}
            instructionsLength={list.length}
          />
        ))}
      </ul>
    </div>
  )
}

export default InstructionListSkeleton
