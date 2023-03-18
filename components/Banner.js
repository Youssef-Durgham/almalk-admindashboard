import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cookies from 'js-cookie';

import { useRouter } from "next/router";
function Banner({ bannerdata }) {
  const router=useRouter();
  function removeBearer(token) {
    // Check if the input string starts with 'Bearer '
    if (token.startsWith('Bearer ')) {
      // Remove the 'Bearer ' string from the input string and return the result
      return token.replace('Bearer ', '');
    } else {
      // If the input string doesn't start with 'Bearer ', return it as is
      return token;
    }
  }
    const handleDeleteAds= async(id)=>{
        const response = await fetch(`http://ap.almalk.org:3000/item/${id}`, {
            method: 'DELETE',
            headers: {
              'x-access-token': removeBearer(Cookies.get('token'))
            },
          })
          const data = await response.json()
          console.log(data)
          if(data){
            router.reload();
          }
        }
    
  return (
    <section className="relative mt-2 shadow-2xl max-w-full mx-auto h-[100%]">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
        swipeable={true}
      >
        {bannerdata?.map((ad) => (
            <div
            className="cursor-pointer w-full h-[25vh] ssm:h-[25vh] sm:h-[35vh] mdb:h-[30vh] md:h-[30vh] lg:h-[60vh] "
            key={ad._id}
            >
            <button onClick={()=>handleDeleteAds(ad._id)} className="absolute top-1/4 rounded-r-md pl-20 z-20 font-bold text-2xl p-2 bg-white text-red-400 shadow-lg ">Delete</button>
            <button  className="absolute top-1/4 rounded-r-md pl-20 z-20 font-bold text-2xl p-2 bg-white text-blue-400 mt-16 shadow-lg">Details</button>
            <img
            className="object-cover"
              loading="lazy"
              src={ad.images[0]}
              alt=""
            />

            <h2 className="absolute text-sm tablet:text-4xl lg:text-4xl 1xl:text-5xl bg-black/70 rounded-xl p-2 text-white bottom-4 left-1/2 -translate-x-1/2 mb-5">
              {ad.title}
            </h2>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Banner;