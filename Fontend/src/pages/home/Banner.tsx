import { memo, useEffect, useState } from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

import dataSlider from "./dataSlider";

function Banner() {
  const [slide, setSlide] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut: any = null;
  const carousel="flex flex-1 absolute w-full h-full overflow-hidden ease-in-out duration-700";
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        nextSlide();
      }, 4000);
  });

  const nextSlide = () => {
    if (slide !== dataSlider.length) {
      setSlide(slide + 1);
    } else setSlide(1);
  };
  const prevSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    } else setSlide(dataSlider.length);
  };

  return (
    <>
      {/*Banner begin*/}
              <div
                className="carousel_wrapper flex relative h-[586px] w-full"
                onMouseEnter={() => {
                  setAutoPlay(false);
                  clearTimeout(timeOut);
                }}
                onMouseLeave={() => setAutoPlay(true)}
              >
                {dataSlider.map((_slideData, slideIndex) => {
                  return (
                    <div
                      className={
                        slide === slideIndex + 1
                          ? `${carousel} opacity-100 scale-100 `
                          : `${carousel} opacity-0 scale-75` 
                      }
                      key={slideIndex}
                    >
                      <img className="object-cover"
                        src={
                          import.meta.env.VITE_PUBLIC_URL +
                          `img/banner${slideIndex + 1}.png`
                        }
                      />
                    </div>
                  );
                })}
                <button 
                onMouseEnter={() => {
                  setAutoPlay(false);
                  clearTimeout(timeOut);
                }}
                className="flex absolute items-center justify-center top-1/2 w-9 h-9 border-none rounded-[50%] bg-[#e1e0e0] text-main text-2xl ease-in-out duration-300  left-4 " onClick={prevSlide}>
                  <AiOutlineLeft />
                </button>
                <button 
                className="flex absolute items-center justify-center top-1/2 w-9 h-9 border-none rounded-[50%] bg-[#e1e0e0] text-main text-2xl ease-in-out duration-300  right-4 " onClick={nextSlide}>
                  <AiOutlineRight />
                </button>
                <div className="absolute flex gap-x-2 bottom-1 left-[50%]  ">
                  {dataSlider.map((_dotData, dotIndex) => {
                    return (
                      <div
                        className={
                          slide === dotIndex + 1 ? "h-3 w-3 bg-main rounded-[50%] inline-block hover:scale-125 " : "h-3 w-3 bg-[#dcd9d98c] rounded-[50%] inline-block hover:scale-125"
                        }
                        key={dotIndex}
                        onClick={() => {
                          setSlide(dotIndex + 1);
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
      {/*Banner end*/}
      
    </>
  );
}

export default memo(Banner);
