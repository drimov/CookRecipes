import React, { useState } from "react"
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react"

// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs"

interface CarouselProps {
  slides: string[]
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState<number>(0)

  const previousSlide = (): void => {
    if (current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = (): void => {
    if (current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className="relative overflow-hidden">
      <div
        className={`duration-40 flex transition ease-out`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img src={s} key={index} alt={`slide-${index}`} />
        ))}
      </div>

      <div className="absolute top-0 flex h-full w-full items-center justify-between px-10 text-3xl text-white">
        <button onClick={previousSlide}>
          {/* <BsFillArrowLeftCircleFill /> */}
          <ArrowLeftCircle />
        </button>
        <button onClick={nextSlide}>
          {/* <BsFillArrowRightCircleFill /> */}
          <ArrowRightCircle />
        </button>
      </div>

      <div className="absolute bottom-0 flex w-full justify-center gap-3 py-4">
        {slides.map((_, i) => (
          <div
            onClick={() => {
              setCurrent(i)
            }}
            key={"circle" + i}
            className={`h-5 w-5 cursor-pointer rounded-full  ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
