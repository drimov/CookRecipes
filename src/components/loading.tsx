import { Loader2 } from "lucide-react"

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-secondary">
      <Loader2 size={"64px"} className="animate-spin" />
    </div>
  )
}

export default Loading
