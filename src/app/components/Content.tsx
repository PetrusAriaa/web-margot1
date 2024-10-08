import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import SectionHeader from "@/templates/SectionHeader";

interface ButtonComponentProps extends HTMLAttributes<HTMLButtonElement> {
  width?: "fit" | "full";
  content: string
}

const ButtonPrimary: FC<ButtonComponentProps> = ({ width = "full", content}) => {
  return(
    <div>
      <Button className={"rounded px-16 bg-neutral-white text-neutral-black " + 
        (width === "fit" ? "w-fit" : "w-full")}>
        {content}
      </Button>
    </div>
  )
}

const TentangLingkungan = () => {
  return (
    <div className="w-full md:h-[75vh] md:max-h-[1140px] flex justify-center flex-col md:flex-row">
      <div className="h-full w-full md:w-[40%] min-h-96 relative">
        <Image
          fill
          src="/api/static/img/keling_compress.png"
          alt="Ketua Lingkungan Maria Goretti"
          priority
          className="object-cover select-none" />
      </div>
      <div className="w-full md:w-[60%] bg-blue-primary px-4 sm:pl-24 pb-0 md:pb-24 min-h-screen md:min-h-fit flex items-center">
        <div className="h-full w-full md:w-[85%] max-w-[1280px] flex flex-col justify-end gap-8 py-16 md:py-0">
          <p className="text-5xl md:text-5xl font-bold text-neutral-white leading-tight selection:bg-neutral-white selection:text-blue-primary">
            &quot;Aku Diberkati, Kamu Diberkati, Kita Semua Diberkati.&quot;
          </p>
          <p className="text-lg text-neutral-white leading-tight selection:bg-neutral-white selection:text-blue-primary">
            Mengenal Lingkungan St. Maria Goretti Lebih Dekat...
          </p>
          <ButtonPrimary width="fit" content="Kunjungi Profil" />
        </div>
      </div>
    </div>
  )
}

const JadwalMisa = () => {
  return (
    <div className="w-full flex justify-center bg-neutral-white h-screen max-h-[1280px] py-20 px-4 sm:px-0">
      <div className="w-full max-w-prose h-fit">
        <SectionHeader title="Jadwal Ekaristi" subtitle="Gereja Santo Matias Rasul Kosambi Baru" />
        <div className="flex flex-row justify-center gap-4 md:gap-0 md:justify-between mb-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-lg text-blue-secondary font-bold">Misa Harian</h2>
              <div>
                <h3 className="text-lg font-semibold">Senin, Rabu, Jumat</h3>
                <li className="list-disc">19.00 WIB</li>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-lg text-blue-secondary font-bold">Misa Jumat Pertama</h2>
              <div>
                <h3 className="text-lg font-semibold">Hari Jumat Minggu Pertama</h3>
                <li className="list-disc">19.00 WIB</li>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-lg text-blue-secondary font-bold">Misa Mingguan</h2>
              <div>
                <h3 className="text-lg font-semibold">Sabtu</h3>
                <li className="list-disc">17.00 WIB</li>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Minggu</h3>
                <li className="list-disc">06.00 WIB</li>
                <li className="list-disc">08.30 WIB</li>
                <li className="list-disc">17.00 WIB</li>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            as={Link}
            href="https://maps.app.goo.gl/do2fUpnL85PaDuzQA"
            target="_blank"
            className="rounded w-full text-neutral-white bg-blue-primary max-w-96 md:max-w-full">
            Lokasi Gereja
          </Button>
        </div>
      </div>
    </div>
  )
}

const KalenderLiturgi = () => {
  return (
    <div className="w-full flex justify-center bg-neutral-white h-screen max-h-[1280px] py-20">
      <div className="w-full max-w-prose h-fit">
        {/* <SectionHeader /> */}
        <div></div>
      </div>
    </div>
  )
}

const MainContent = () => {
  return (
    <div className="w-full">
      <TentangLingkungan />
      <JadwalMisa />
    </div>
  )
}

export default MainContent;