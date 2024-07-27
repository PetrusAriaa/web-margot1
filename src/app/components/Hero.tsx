const MouseScrollIco = () => {
  return (
      <svg className="w-3 sm:w-6" viewBox="0 0 32 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="1.5" width="29" height="50" rx="14.5" stroke="#E7EAF3" strokeWidth="3" />
        <rect x="12.5" y="12.5" width="7" height="14" rx="3.5" stroke="#E7EAF3" strokeWidth="3" />
      </svg>
  )
}

const HeroSection = () => {
  return (
    <div className='w-full h-screen min-h-[400px]'>
      <div className='w-full h-screen min-h-[400px] bg-[url("/img/thumb.png")] bg-cover bg-center'>
        <div className='w-full h-screen min-h-[400px] bg-neutral-black/75 flex justify-center items-end'>
          <div className='w-3/4 max-w-[1024px] h-4/5 flex flex-col items-center gap-20 landscape:gap-0 landscape:justify-between'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-4xl lg:text-5xl font-black text-neutral-white text-center'>LINGKUNGAN SANTA MARIA GORETTI</h1>
              <div>
                <h2 className='text-2xl lg:text-4xl text-neutral-white text-center'>PAROKI KOSAMBI BARU</h2>
                <h2 className='text-2xl lg:text-4xl text-neutral-white text-center'>GEREJA SANTO MATIAS RASUL</h2>
              </div>
            </div>
            <div className='flex flex-col items-center landscape:gap-2 pb-2'>
              <div className='animate-bounce'>
                <MouseScrollIco />
              </div>
              <p className='text-neutral-white'>Gulir ke bawah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;