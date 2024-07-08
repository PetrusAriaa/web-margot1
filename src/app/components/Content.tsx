import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";

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
    <div className="w-full md:h-[75vh] md:max-h-[1140px] flex justify-center">
      <div className="h-full w-[40%] bg-red-500 relative">
        <Image fill src="https://storage.googleapis.com/margot-web/keling_compress.png" alt="" className="object-cover select-none" />
      </div>
      <div className="w-[60%] bg-blue-primary pl-24 pb-24">
        <div className="h-full w-[85%] max-w-[1280px] flex flex-col justify-end gap-8">
          <p className="text-5xl font-bold text-neutral-white leading-tight selection:bg-neutral-white selection:text-blue-primary">
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

const HeaderTemplate = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-2 mt-4 mb-28">
      <div>
        <h1 className="text-5xl text-blue-primary text-center">Jadwal <span className="font-bold">Ekaristi</span></h1>
        <p className="text-2xl text-blue-primary text-center">Gereja Santo Matias Rasul Kosambi Baru</p>
      </div>
      <div className="h-[6px] w-14 bg-blue-primary" />
    </div>
  )
}

const JadwalMisa = () => {
  return (
    <div className="w-full flex justify-center bg-neutral-white h-screen max-h-[1280px] py-20">
      <div className="w-full max-w-prose h-fit">
        <HeaderTemplate />
        <div className="flex flex-row justify-between">
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

const MainContent_unused = () => {
  return (
    <div>
      <div className="bg-white min-h-96 w-full flex flex-col items-center justify-center gap-8 py-14 sm:py-28">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl">Jadwal Ekaristi</h1>
          <p className="text-lg sm:text-2xl">Gereja Santo Matias Rasul Kosambi Baru</p>
        </div>
        <div className="flex flex-row gap-10 sm:gap-24">
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-blue-primary">Misa Harian</h2>
            <div>
              <h3 className="font-semibold">Senin, Rabu, Jumat</h3>
              <p>19.00 WIB</p>
            </div>
            <div>
              <h3 className="font-semibold">Selasa, Kamis, Sabtu</h3>
              <p>06.00 WIB</p>
            </div>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-blue-primary">Misa Mingguan</h2>
            <div>
              <h3 className="font-semibold">Sabtu</h3>
              <p>17.00 WIB</p>
            </div>
            <div>
              <h3 className="font-semibold">Minggu</h3>
              <p>06.00 WIB</p>
              <p>08.30 WIB</p>
              <p>17.00 WIB</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-blue-secondary min-h-screen sm:min-h-96 py-28 sm:py-0 sm:h-fit w-full flex justify-center">
        <div className="w-3/4 max-w-[1280px] h-screen sm:h-96 flex flex-col sm:flex-row justify-center items-center gap-8">
          <Image src="https://storage.googleapis.com/margot-web/keling_compress.png"
            alt="Ketua Lingkungan Maria Goretti 1" title="Ketua Lingkungan"
            className="w-64 sm:w-72" loading="lazy"
          />
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-white text-5xl max-w-[30rem] leading-tight font-serif font-semibold">&quot;Aku Diberkati, Kamu Diberkati, Kita Semua Diberkati.&quot;</h1>
              <p className="text-white">Mengenal Lingkungan St. Maria Goretti Lebih Dekat...</p>
            </div>
            <div className="flex justify-end">
              <Link href='/sejarah'>
                <button className="px-4 py-2 border-white border-2 rounded-lg text-white hover:bg-white hover:text-blue-primary transition-colors active:scale-95">Kunjungi Profil</button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default MainContent;