import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import AboutSection from '../components/about-us/About';
import PartnersSection from '../components/partners/PartnersSection';
import ScheduleSection from '../components/schedule/ScheduleSection';
import Loader from '../components/loader/Loader';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';

export default function ConferencePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pt-24">
          {/* Swiper carousel setup */}
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper h-screen"
          >
            <SwiperSlide>
              <div className="w-full h-[80vh] relative">
                <img src={hero1} alt="Slide 1" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[80vh] relative">
                <img src={hero2} alt="Slide 2" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[80vh] relative">
                <img src={hero3} alt="Slide 3" className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          </Swiper>
          <main className="mt-[-130px]">
            <AboutSection />
            <PartnersSection />
            <ScheduleSection />
          </main>
        </div>
      )}
    </>
  );
}
