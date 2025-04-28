"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function WorkSliderNav({
  containerStyles,
  btnStyles,
  iconStyles,
}) {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      {/* Previous Button */}
      <button
        className={
          btnStyles +
          " shadow-sm hover:bg-transparent hover:border-accent-hover hover:text-accent-hover focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 border border-primary"
        }
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      {/* Next Button */}
      <button
        className={
          btnStyles +
          " shadow-sm hover:bg-transparent hover:border-accent-hover hover:text-accent-hover focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 border border-primary"
        }
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
}
