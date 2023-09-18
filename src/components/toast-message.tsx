import { CheckIcon, X } from "lucide-react"

import { toast } from "./ui/use-toast"

type ToastMessage = {
  title: string
  message: string
  variant?: "success" | "error"
}
const toastMessage = ({
  title,
  variant = "success",
  message,
}: ToastMessage) => {
  let Icon: JSX.Element
  let bgColor: string

  switch (variant) {
    case "error":
      Icon = <X />
      bgColor = "bg-red-500"
      break
    case "success":
      Icon = <CheckIcon />
      bgColor = "bg-green-500"
  }
  toast({
    action: (
      <div className="flex w-full items-center justify-start gap-2">
        {Icon}
        <div className="flex flex-col">
          <span className="font-semibold first-letter:capitalize">{title}</span>
          <span className="first-letter:capitalize">{message}</span>
        </div>
      </div>
    ),
    className: `${bgColor} text-primary-foreground`,
  })
}

export { toastMessage }
