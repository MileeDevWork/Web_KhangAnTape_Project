import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const slides = [
    { id: 1, url: '/img/banner1.png', alt: 'Slide 1' },
    { id: 2, url: '/img/banner2.png', alt: 'Slide 2' },
    // { id: 3, url: '/img/banner1.png', alt: 'Slide 3' },
];

const BannerSlide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
      <div className='w-full h-[500px] relative group p-4'>
          <div className='w-full h-full'>
              <img
                  src={slides[currentIndex].url}
                  alt={`Slide ${currentIndex + 1}`}
                  className='w-full h-full object-contain'
              />
          </div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          {/* Dots */}
          <div className='flex justify-center'>
              {slides.map((slide, slideIndex) => (
                  <div
                      key={slide.id}
                      onClick={() => goToSlide(slideIndex)}
                      className={`cursor-pointer mx-1 rounded-full w-3 h-3 ${currentIndex === slideIndex ? 'bg-black' : 'bg-gray-300'}`}
                  ></div>
              ))}
          </div>
      </div>
  );
};

export default BannerSlide;