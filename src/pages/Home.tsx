// import Footer from "@/components/footer"

import Homestep from "@/components/homestep"
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col ">
        <div className="m-auto flex w-3/4 flex-col items-center">
          <h1 className="mb-10 mt-40 text-8xl">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="mt-4 text-2xl">
            Never cook again!: Our subscriptions cover 365 days per year, even
            including major holidays. Local and organic: Our cooks only use
            local, fresh, and organic products to prepare your meals. No waste:
            All our partners only use reusable containers to package all your
            meals. Pause anytime: Going on vacation? Just pause your
            subscription, and we refund unused days.
          </p>
          <Button className="mx-auto my-48 animate-pulse p-8 text-3xl">
            START NOW
          </Button>
        </div>
        <Homestep />
      </div>
    </>
  )
}
export default Home
