import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import list from "../list.json";
import Card from "./Card";
import axios from "axios";

const Freebook = () => {

  const [book, setBook] = useState([])
  
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:3000/v1/api/book"); 
          const data = res.data.book.filter((data) => data.category === "Free");       
          setBook(data);
        } catch (error) {
          console.log(error)
        }      
      }
  
      getBook();
    }, [])

  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <>
      <div className="text-black dark:text-white dark:bg-slate-900 max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white md:mt-4">
        <div>
            <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
            veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
            non suscipit, iure neque earum?
            </p>
        </div>
      
      <div >
        <Slider {...settings}>
          {book.map((item) => (<Card item={item} key={item.id}/>))}
        </Slider>
      </div>
      </div>
    </>
  );
};

export default Freebook;
