type InstructionProps = {
  instruction: string
  index: number
  instructionsLength: number
}

const Instruction = ({
  instruction,
  index,
  instructionsLength,
}: InstructionProps) => {
  return (
    <li>
      <div className="flex flex-col">
        <div className="flex flex-row gap-4">
          <div className="item-center flex h-10 w-10 flex-col rounded-md bg-primary text-center">
            <p className="h-10 w-10 p-2 text-secondary dark:text-secondary-foreground">
              {index + 1}
            </p>
          </div>
          <p>{instruction}</p>
        </div>
        {index !== instructionsLength - 1 && (
          <span className="my-4 ml-5 h-10 border-l-2 border-secondary text-center dark:border-primary-foreground"></span>
        )}
      </div>
    </li>
  )
}

export default Instruction
