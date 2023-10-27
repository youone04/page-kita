"use client"
import React, { useEffect } from 'react';
import { Carousel } from "@material-tailwind/react";


const CarouselComp = () => {
  useEffect(() => {
    // Initialize the Bootstrap Carousel when the component mounts
    // $('#homepage-feature').carousel();
  }, []);

  return (
    <div className="relative mt-0">
  {/* Konten di lapisan bawah */}
  <div className="bg-black text-white p-0 relative z-10" style={{height:600}}>
    {/* Konten Lapisan Bawah */}
    <Carousel 
    nextArrow={false} 
    prevArrow={false} 
    // navigation={false} 
    loop={true} 
    // autoplayDelay={7000} 
    // transition={{ duration: 5 }} 
    autoplay={true} 
    // className="rounde-xls"
    >
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.inews.co.id/media/822/files/inews_new/2022/08/22/Gedung_tertinggi_di_Indonesia__Wisma_BNI_46.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  </div>


  {/* Konten di lapisan atas */}
  <div className="absolute inset-0  flex items-center justify-left z-20 pl-5">
    <div className="bg-black p-0 text-left p-5 bg-opacity-60" style={{width:'30%', height:350}}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
  </div>

</div>

  );
};

export default CarouselComp;
