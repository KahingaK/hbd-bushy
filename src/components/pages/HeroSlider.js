import React from 'react'
//import swiper
import { Swiper, SwiperSlide } from "swiper/react";
//Import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
//import modules
import { EffectFade, Autoplay } from "swiper/modules";
import Back from '../Back';
import HappyBirthday from '../HappyBirthday';

function HeroSlider() {
    const Slides = [
        {
          component: <HappyBirthday/>
        
        },
        {
          component: <Back/>
          
        },
        // Add more slides as needed
      ];
    
      return (
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect={"fade"}

          autoplay={{
            delay: 15000,
            disableOnInteraction: true,
          }}
          className="heroSlider h-[600px] lg:h-[660px]"
        >
          {Slides.map((slide, index) => (
            <SwiperSlide key={index}>
              
            {slide.component}
            
            </SwiperSlide>
          ))}
        </Swiper>
      );
}

export default HeroSlider