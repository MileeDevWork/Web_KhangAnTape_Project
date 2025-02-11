import { memo, useEffect, useState } from "react";
import {
  // AiOutlineMenu,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dataCategory from "./dataCategory";
import dataSlider from "./dataSlider";
import { Link } from "react-router-dom";
import"./styleButtonCategory.scss";

function Category() {
  //const [showCat, setShowCat] = useState(true);
  const [slide, setSlide] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut: any = null;
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
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/*Category begin */}
      <div className="container max-w-[1200px] m-auto">
        <Carousel responsive={responsive}>
          {dataCategory.map((category, indexCategory) => (
           <Link to=''>
            <div
              className="h-[350px]  relative bg-cover border-[#e5e7eb] border-[1px] rounded-md ml-1 mr-1 
  first-child:ml-0 first-child:mr-0 last-child:ml-0 last-child:mr-0 flex flex-col overflow-hidden hover:border-main"
              key={indexCategory}
            >
              <img className="h-[250px] object-contain"src={ import.meta.env.VITE_PUBLIC_URL +
                          `img/item.png`
                        } alt="" />
             
              <div className="bg-white pl-4 pt-6">
              <div className="text-lg font-medium line-clamp-1 text-[#111827] hover:text-main">{category.title}</div>
              <p className="text-lg pt-2"><span className="font-bold text-xl">{category.value}</span> / Cuộn</p>
              </div>
              
              </div>
              </Link>
          ))}
        </Carousel>
      </div>
      {/*Category end */}
    </>
  );
}

export default memo(Category);
