"use client";
import React, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import Aos from "aos";

const CarouselComp = () => {
  useEffect(() => {
    // Initialize the Bootstrap Carousel when the component mounts
    // $('#homepage-feature').carousel();
    Aos.init()
  }, []);

  return (
    <div className="relative mt-0">
      {/* Konten di lapisan bawah */}
      <div
        className="bg-black text-white p-0 relative z-10"
        style={{ height: 600 }}
      >
        {/* Konten Lapisan Bawah */}
        <Carousel
          nextArrow={false}
          prevArrow={false}
          // navigation={false}
          loop={true}
          autoplayDelay={7000}
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
      <div className="absolute inset-0  flex items-center justify-left z-20 lg:pl-5">
        <div
          data-aos="fade-right"
          className="md:w-2/6 md:h-32px bg-black text-lefts p-5 bg-opacity-50"
          // style={{width:'40%', height:350}}
        >
          <h3 className="text-4xl font-bold tracking-tight text-white-900 sm:text-4xl">
            <span className="text-blue-600">Page kita</span> solusi untuk bisnis
            anda
          </h3>
          {/* <h1 style={{
      fontSize: 60,
      fontWeight: 'bold'
    }}>Company <span className='text-blue-500'>Profile</span></h1> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Venenatis tellus in metus vulputate eu scelerisque felis. Vitae
            congue mauris rhoncus aenean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselComp;
