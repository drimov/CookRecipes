import HomeItemSection from "./HomeItemSection"

type Item = {
  title: string
  url: string
  description: string
}
const item1: Item = {
  title: "Tell us what you like (and what not)",
  url: "app_screen_1.png",
  description: `Never again waste time thinking about what to eat! Omnifood AI will
    create a 100% personalized weekly meal plan just for you. It makes
    sure you get all the nutrients and vitamins you need, no matter what
    diet you follow!`,
}
const item2: Item = {
  title: "Approve your weekly meal plan",
  url: "app_screen_2.png",
  description: `Once per week, approve the meal plan generated for you by Omnifood AI.
  You can change ingredients, swap entire meals, or even add your own
  recipes.`,
}
const item3: Item = {
  title: "Receive meals at convenient time",
  url: "app_screen_3.png",
  description: `Best chefs in town will cook your selected meal every day, and we will
  deliver it to your door whenever works best for you. You can change
  delivery schedule and address daily!`,
}

const itemsArrays = [item1, item2, item3]
const HomeSection = () => {
  return (
    <div className="my-4 flex w-full flex-col items-center lg:flex-row lg:items-stretch">
      {itemsArrays.map((item, index) => (
        <HomeItemSection
          key={index}
          item={item}
          isArrowDisabled={index === itemsArrays.length - 1 ? true : false}
        />
      ))}
    </div>
  )
}

export default HomeSection
