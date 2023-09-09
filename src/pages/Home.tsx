import Caroussel from "@/components/Caroussel"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

const Home = () => {
  const slides = [
    // "../media/img/gallery/gallery-1.jpg",
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ]
  return (
    <div>
      {/* <Navbar isNavLogin={true} /> */}
      <Navbar isNavLogin={false} />
      <div className="m-auto flex  w-3/4 flex-col items-center ">
        <h1 className=" mb-7 mt-28  text-7xl">
          A healthy meal delivered to your door, every single day
        </h1>
        <p>
          Never cook again!: Our subscriptions cover 365 days per year, even
          including major holidays. Local and organic: Our cooks only use local,
          fresh, and organic products to prepare your meals. No waste: All our
          partners only use reusable containers to package all your meals. Pause
          anytime: Going on vacation? Just pause your subscription, and we
          refund unused days.
        </p>
        <Button className=" mx-auto my-16">START NOW</Button>
      </div>
      <div className="m-auto w-[60%] pt-11">
        <Caroussel slides={slides} />
      </div>
      <Footer />
    </div>
  )
}
export default Home
