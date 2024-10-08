import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-blue-primary w-full flex flex-col items-center">
      <div className="flex flex-col sm:flex-row w-3/4 max-w-[1280px] py-20 gap-20">
        <div className="flex flex-col gap-10 sm:gap-4 w-full sm:w-1/2">
          <div className="flex flex-row items-center">
            <div className="relative h-20 w-20 sm:h-28 sm:w-28 flex-shrink-0">
              <Image src="/logo_200.png" fill alt="logo_200p" sizes="5rem, (min-width: 640px) 7rem" />
            </div>
            {/* <img src="/logo_200.png" className="size-16 sm:size-28" /> */}
            <div className="w-full">
              <p className="text-white text-lg">Lingkungan</p>
              <p className="text-white text-2xl sm:text-4xl font-medium">Santa Maria Goretti</p>
            </div>
          </div>
          <div>
            <h3 className="text-white text-2xl sm:text-xl font-medium">Gereja Santo Matias Rasul</h3>
            <h3 className="text-white text-2xl sm:text-xl font-medium">Paroki Kosambi Baru</h3>
            <p className="w-88 sm:w-96 text-white text-base sm:text-sm mt-2">Paroki Kosambi Baru Gereja St.Matias Rasul Taman Kosambi Barat blok A ext 1 no.120 Perumahan Kosambi Baru, Jakarta Barat 11750</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="text-white hover:text-yellow-accent transition-colors w-fit">Beranda</a>
          <a href="#" className="text-white hover:text-yellow-accent transition-colors w-fit">Profil</a>
          <a href="#" className="text-white hover:text-yellow-accent transition-colors w-fit">Informasi</a>
          <a href="#" className="text-white hover:text-yellow-accent transition-colors w-fit">Galeri</a>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium text-white">Media Sosial</h3>
            <Button
              isIconOnly
              disableRipple
              radius="full"
              as={Link}
              href="https://www.instagram.com/lingkungan_mariagoretti"
              target="_blank"
              startContent={<IoLogoInstagram size={25} />} 
              className="bg-yellow-accent data-[hover=true]:outline-2 data-[hover=true]:outline-yellow-accent text-blue-primary"
              />
            {/* <a href="https://www.instagram.com/lingkungan_mariagoretti" target="_blank">
              <div className="p-2 bg-white w-fit rounded-full hover:bg-yellow-accent"><img src="/instagram-icon.svg" className="w-6" /></div>
            </a> */}
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-950 h-16 text-center flex items-center justify-center">
        <p className="text-blue-400">Lingkungan Santa Maria Goretti - Copyright 2024</p>
      </div>
    </div>
  )
}

export default Footer;