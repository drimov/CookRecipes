import { Button } from "@/components/ui/button"
import HomeSection from "@/pages/home/HomeSection"

const Home = () => {
  return (
    <div className="my-4 flex flex-col md:my-8">
      <div className="mx-auto flex w-full flex-col items-center px-4 md:px-16">
        <h1 className="my-4 text-center text-3xl md:text-4xl lg:text-5xl">
          A healthy meal delivered to your door, every single day
        </h1>
        <p className="text-center leading-6 md:my-8 md:text-xl">
          Never cook again!: Our subscriptions cover 365 days per year, even
          including major holidays. Local and organic: Our cooks only use local,
          fresh, and organic products to prepare your meals. No waste: All our
          partners only use reusable containers to package all your meals. Pause
          anytime: Going on vacation? Just pause your subscription, and we
          refund unused days.
        </p>
        <Button
          className="mx-auto my-4 animate-pulse font-semibold"
          size={"lg"}
        >
          START NOW
        </Button>
      </div>
      <HomeSection />
    </div>
  )
}
export default Home
