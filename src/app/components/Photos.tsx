import SectionHeader from '@/templates/SectionHeader';
import {Image} from '@nextui-org/react';
import { FC, HTMLAttributes } from 'react';

type GalleryImageItemProps = { src: string, index: number}
const GalleryImageItem: FC<GalleryImageItemProps> = ({ src, index }) => {
  const hasMargin = index
  return <Image
    src={src}
    isZoomed
    alt=""
    classNames={
      { 
        wrapper: [hasMargin ? "mt-4" : "mt-0"],
      }
    }
    />
}


const Photos = () => {
  const baseUrl = "/api/static/img/"
  const imgSources = [
    "tatib1.jpeg",
    "ziarek1_compressed.jpeg",
    "ziarek2_compressed.jpeg",
    "koor_1.jpeg",
    "hero_thumb_compressed.png",
    "koor_1.jpeg",
  ]
  return (
    <main className = "w-full flex justify-center bg-neutral-black min-h-screen py-20">
      <div className='w-[90%]'>
        <SectionHeader title='Galeri' theme='dark' />
        <div className='columns-6'>
          {
            imgSources.map((imgUrl, i) => <GalleryImageItem key={i} index={i} src={baseUrl + imgUrl} />)
          }
        </div>
      </div>
    </main>
  )
}

const Photos_unused = () => {
  return (
    <div className="bg-white w-full min-h-96 flex justify-center py-20">
      <div className="w-3/4 max-w-[1280px] flex items-center flex-col gap-4">
        <h1 className="text-3xl font-medium text-blue-primary">Galeri</h1>
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full flex">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/tatib1.jpeg" alt="" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}}/>
            </div>
            <div className="w-full">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/ziarek1_compressed.jpeg" alt="" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}} />
            </div>
            <div className="w-full">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/ziarek2_compressed.jpeg" alt="" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}} />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/koor_1.jpeg" alt="" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}} />
            </div>
            <div className="w-full">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/hero_thumb_compressed.png" alt="" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}} />
            </div>
            <div className="w-full">
              <Image isZoomed src="https://storage.googleapis.com/margot-web/koor_1.jpeg" alt="" classNames={{wrapper: "min-w-full", img: "h-56 object-cover w-full"}}/>
            </div>
          </div>
        </div>
        <div>
          <button disabled className="disabled:cursor-not-allowed disabled:border-0 disabled:bg-slate-300 disabled:text-slate-400 border-2 border-blue-primary px-4 py-2 rounded-lg font-medium hover:bg-blue-primary hover:text-white transition-colors">Kunjungi Galeri</button>
        </div>
      </div>
    </div>
  )
}

export default Photos;