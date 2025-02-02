import React from 'react';
import list from '../../public/list.json';
import Cards from './Cards'; // Ensure correct casing
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='font-bold text-xl pb-4'>Free</div>
      <div className="slider-container">
        {filterData.length > 0 ? (
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        ) : (
          <p>No free items available</p>
        )}
      </div>
    </div>
  );
}

export default Freebook;
