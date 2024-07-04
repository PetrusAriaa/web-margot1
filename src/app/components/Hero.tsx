'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import { Image } from '@nextui-org/react';


const HeroSection = () => {
  return (
    <div className="w-full">
        <Swiper slidesPerView={1}
          loop
          className='w-full h-48 sm:h-[30rem]'
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          centeredSlides
        modules={[Autoplay]}
        >
          <SwiperSlide className='overflow-hidden'>
            <Image
              className='w-full'
              alt='swiper-image'
              radius='none'
            src='https://storage.googleapis.com/margot-web/hero_thumb_compressed.png'/>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className='w-full'
              alt='swiper-image'
              radius='none'
            src='https://storage.googleapis.com/margot-web/ziarek_1.webp'/>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className='w-full'
              alt='swiper-image'
              radius='none'
            src='https://storage.googleapis.com/margot-web/ziarek_anyer.webp' />
          </SwiperSlide>
          <SwiperSlide className='flex w-full'>
            <Image
              className='min-w-full'
              alt='swiper-image'
              radius='none'
            src='https://storage.googleapis.com/margot-web/ziarek_2022_resize.webp' />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default HeroSection;