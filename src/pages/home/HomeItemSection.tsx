import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ArrowRight } from "lucide-react"

type HomeItemSectionProps = {
  item: {
    url: string
    title: string
    description: string
  }
  isArrowDisabled?: boolean
}

const HomeItemSection = ({
  item,
  isArrowDisabled = false,
}: HomeItemSectionProps) => {
  return (
    <>
      <Card className="w-full p-4 text-center md:w-[500px]">
        <CardHeader>
          <CardDescription>
            <img src={item.url} alt={item.title} className="m-auto my-2 w-40" />
          </CardDescription>
          <CardTitle className="my-2">{item.title}</CardTitle>
        </CardHeader>
        <CardContent className="m-4 text-center md:text-xl">
          {item.description}
        </CardContent>
      </Card>
      {!isArrowDisabled ? (
        <ArrowRight
          size={40}
          className="mx-auto my-2 w-40 rotate-90 md:my-8 md:self-center lg:rotate-0"
        />
      ) : null}
    </>
  )
}

export default HomeItemSection
