import Instruction from "."
import { Meal } from "@/types/meal"

type InstructionListProps = {
  recipe?: Meal
}
const InstructionList = ({ recipe }: InstructionListProps) => {
  const instructions = recipe?.strInstructions
    ? parseInstructions(recipe.strInstructions)
    : null
  return (
    <div className="flow-root py-8">
      <h2 className="py-4 text-center text-xl font-semibold md:py-8 md:text-left md:text-2xl lg:text-3xl">
        Instructions
      </h2>
      <ul role="list">
        {instructions?.map((instruction, index) => (
          <Instruction
            key={index}
            instruction={instruction}
            index={index}
            instructionsLength={instructions.length}
          />
        ))}
      </ul>
    </div>
  )
}

function parseInstructions(text: string) {
  const pattern = /^(\d+\.\s)(?![(\d+.])/gm // start with a number followed by a dot
  const cleanedText = text.replace(pattern, "")

  const sentences = cleanedText
    .split(". ")
    .filter((sentence) => sentence !== "")

  const instructions = sentences
    .map((sentence) => sentence.trim().replace(/\r?\n|\r/g, "") + ".")
    .filter((sentence) => sentence !== ".")

  const cleanedInstructions = instructions.join(" ")

  const result = cleanedInstructions
    .split(/\.(?!\d)/) // do not split where there is a number (like 0.4)
    .map((sentence) => sentence.replace(/^STEP \d+/, "").trim() + ".") // delete STEP "number"
    .filter((sentence) => sentence !== ".")

  return result
}

export default InstructionList
