// import Footer from "@/components/footer"

import { ArrowRight } from "lucide-react"

const Homestep = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col ">
        <div className=" m-auto mb-28 flex w-full flex-col justify-between gap-10 md:flex-row">
          <div className="w-full rounded-xl border-2 p-4">
            <img
              src="../../public/Ressources/img/app/app-screen-1.png "
              alt="photo"
              className=" m-auto w-40 rounded-xl"
            />
            <h3 className="m-4 rounded-lg bg-orange-500 bg-opacity-50 p-2 text-center text-xl">
              Tell us what you like (and what not)
            </h3>
            <p className="m-4 text-center text-xl">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <ArrowRight
            size={40}
            className="m-auto w-full sm:w-40 sm:rotate-90 md:w-40 md:rotate-0 xl:rotate-0"
          />
          <div className="w-full rounded-xl border-2 p-4">
            <img
              src="../../public/Ressources/img/app/app-screen-2.png "
              alt="photo"
              className="m-auto w-40 rounded-xl"
            />
            <h3 className="m-4 rounded-lg bg-orange-500 bg-opacity-50 p-2 text-center text-xl">
              Approve your weekly meal plan
            </h3>
            <p className="m-4 text-center text-xl">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>
          <ArrowRight
            size={40}
            className="m-auto sm:rotate-90 md:w-40 md:rotate-0 xl:rotate-0"
          />
          <div className="w-full rounded-xl border-2 p-4">
            <img
              src="../../public/Ressources/img/app/app-screen-3.png "
              alt="photo"
              className="m-auto w-40 rounded-xl"
            />
            <h3 className="m-4 rounded-lg bg-orange-500 bg-opacity-50 p-2 text-center text-xl">
              Receive meals at convenient time
            </h3>
            <p className="m-4 text-center text-xl">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Homestep
