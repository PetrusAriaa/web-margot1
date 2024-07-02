import {Image} from '@nextui-org/react';

const Photos = () => {
  return (
    <div className="bg-white w-full min-h-96 flex justify-center py-20">
      <div className="w-3/4 max-w-[1280px] flex items-center flex-col gap-4">
        <h1 className="text-3xl font-medium text-blue-primary">Galeri</h1>
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full flex">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/tatib1.jpeg" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}}/>
            </div>
            <div className="w-full">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/ziarek1_compressed.jpeg" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}} />
            </div>
            <div className="w-full">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/ziarek2_compressed.jpeg" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}} />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/koor_1.jpeg" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}} />
            </div>
            <div className="w-full">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/hero_thumb_compressed.png" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}} />
            </div>
            <div className="w-full">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/koor_1.jpeg" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}}/>
            </div>
          </div>
        </div>
        <div>
          <button className="border-2 border-blue-primary px-4 py-2 rounded-lg font-medium hover:bg-blue-primary hover:text-white transition-colors">Kunjungi Galeri</button>
        </div>
      </div>
    </div>
  )
}

export default Photos;