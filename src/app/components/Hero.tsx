'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import { Image } from '@nextui-org/react';

const MouseScrollIco = () => {
  return (
    <svg width="30" viewBox="0 0 32 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="29" height="50" rx="14.5" stroke="#E7EAF3" strokeWidth="3" />
      <rect x="12.5" y="12.5" width="7" height="14" rx="3.5" stroke="#E7EAF3" strokeWidth="3" />
    </svg>
  )
}

const HeroSection = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full min-h-screen bg-[url("/img/thumb.png")] bg-cover bg-center'>
        <div className='w-full h-screen bg-neutral-black/75 flex justify-center'>
          <div className='w-3/4 max-w-[1024px] h-full flex flex-col items-center justify-end gap-64 py-16'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-5xl font-black text-neutral-white text-center'>LINGKUNGAN SANTA MARIA GORETTI</h1>
              <div>
                <h2 className='text-4xl text-neutral-white text-center'>PAROKI KOSAMBI BARU</h2>
                <h2 className='text-4xl text-neutral-white text-center'>GEREJA SANTO MATIAS RASUL</h2>
              </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <div className='animate-bounce'>
                <MouseScrollIco />
              </div>
              <p className='text-neutral-white'>Gulir ke bawah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="w-full">
    //     <Swiper slidesPerView={1}
    //       loop
    //       className='w-full h-48 sm:h-[30rem]'
    //       autoplay={{
    //         delay: 4000,
    //         disableOnInteraction: false,
    //       }}
    //       centeredSlides
    //     modules={[Autoplay]}
    //     >
    //       <SwiperSlide className='overflow-hidden'>
    //         <Image
    //           className='w-full'
    //           alt='swiper-image'
    //           radius='none'
    //         src='https://storage.googleapis.com/margot-web/hero_thumb_compressed.png'/>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Image
    //           className='w-full'
    //           alt='swiper-image'
    //           radius='none'
    //         src='https://storage.googleapis.com/margot-web/ziarek_1.webp'/>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <Image
    //           className='w-full'
    //           alt='swiper-image'
    //           radius='none'
    //         src='https://storage.googleapis.com/margot-web/ziarek_anyer.webp' />
    //       </SwiperSlide>
    //       <SwiperSlide className='flex w-full'>
    //         <Image
    //           className='min-w-full'
    //           alt='swiper-image'
    //           radius='none'
    //         src='https://storage.googleapis.com/margot-web/ziarek_2022_resize.webp' />
    //       </SwiperSlide>
    //     </Swiper>
    // </div>
  )
}

export default HeroSection;