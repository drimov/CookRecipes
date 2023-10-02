import { Skeleton } from "@/components/ui/skeleton"

type InstructionProps = {
  index: number
  instructionsLength: number
}
const InstructionSkeleton = ({
  index,
  instructionsLength,
}: InstructionProps) => {
  return (
    <li>
      <div className="flex flex-col">
        <div className="flex flex-row gap-4">
          <Skeleton className="item-center flex h-10 w-10 flex-col rounded-md" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-40 md:w-96" />
            <Skeleton className="h-4 w-32 md:w-72" />
          </div>
        </div>
        {index !== instructionsLength - 1 && (
          <span className="my-4 ml-5 h-10 border-l-2 border-secondary text-center"></span>
        )}
      </div>
    </li>
  )
}

export default InstructionSkeleton
