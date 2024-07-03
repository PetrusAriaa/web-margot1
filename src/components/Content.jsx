import { Link } from "react-router-dom";

const MainContent = () => {
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
      <div className="bg-blue-secondary min-h-screen sm:min-h-96 py-28 sm:py-0 sm:h-fit w-full flex justify-center">
        <div className="w-3/4 max-w-[1280px] h-screen sm:h-96 flex flex-col sm:flex-row justify-center items-center gap-8">
          <div>
            <img src="https://storage.googleapis.com/margot-web/keling_compress.png"
            className="w-64 sm:w-72 rounded-xl object-cover" />
          </div>
          {/* <div className="size-72 bg-slate-200 rounded-xl animate-pulse flex-shrink-0" /> */}
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-white text-5xl max-w-[30rem] leading-tight font-serif font-semibold">&quot;Aku Diberkati, Kamu Diberkati, Kita Semua Diberkati.&quot;</h1>
              <p className="text-white">Mengenal Lingkungan St. Maria Goretti Lebih Dekat...</p>
            </div>
            <div className="flex justify-end">
              <Link to='/sejarah'>
                <button className="px-4 py-2 border-white border-2 rounded-lg text-white hover:bg-white hover:text-blue-primary transition-colors active:scale-95">Kunjungi Profil</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent;