import { Image, Divider } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nama Pelindung - Lingkungan St. Maria Goretti Paroki Kosambi Baru",
  description: "Website Lingkungan Santa Maria Goretti Paroki Kosambi Baru Gereja Santo Matias Rasul",
}

const MariaGorettiPage = () => {
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="max-w-prose pt-8 pb-20 px-4">
        <h1 className="text-4xl text-blue-primary font-semibold pb-4">Mengenal Santa Maria Goretti</h1>
        <Divider orientation="horizontal" />
        <div className="my-4">
          <Image alt="Santa Maria Goretti" title="Santa Maria Goretti" radius="none" src="https://storage.googleapis.com/margot-web/Goretti_6July.webp" />
          <p className="text-center text-sm text-slate-400 italic">Sumber: <a href="https://www.catholicnewsagency.com">www.catholicnewsagency.com</a></p>
        </div>
        <p className="pb-4 text-justify">Santa Maria Goretti merupakan orang yang memperoleh kanonisasi sebagai orang kudus termuda. Ia wafat sebagai martir pada 6 Juli 1902 di usianya yang menginjak sebelas tahun.</p>
        <p className="pb-4 text-justify">Maria Teresa Goretti lahir di dalam sebuah keluarga sederhana pada 16 Oktober 1890. Ia dan keluarganya pindah dari Italia Timur menuju Italia Barat di usia enam tahun. Ayah dan keluarganya berharap bisa memperoleh kehidupan yang lebih baik di tempat yang baru.</p>
        <p className="pb-4 text-justify">Tiga tahun setelahnya, ayah Maria meninggal. Sejak saat itu, Maria bertanggung jawab untuk menjaga kelima saudara kandungnya sementara sang ibu bekerja sebagai petani untuk mencukupi kebutuhan hidup mereka.</p>
        <p className="pb-4 text-justify">Masa-masa sulit ini dialami oleh Maria dan keluarganya. Disamping tanggung jawabnya untuk menjaga adik-adiknya, Maria juga mengerahkan tenaganya sebagai juru masak dan pembersih di rumah tetangganya, Giovanni Serenelli dan Alessandro, anak Giovanni yang membantu ibu Maria bertani.</p>
        <p className="pb-4 text-justify">Selama bekerja untuk tetangganya, Maria kerap menerima perlakuan kasar dan tidak pantas dari Alessandro. Maria sampai harus beberapa kali pergi dari tempat tersebut untuk melindungi dirinya. Hingga akhirnya, Alessandro mulai berani memaksa Maria untuk berhubungan dan mengambil kesuciannya. Maria berkali-kali menolak kehendak Alessandro meskipun itu berarti ia harus menghadapi Alessandro selama berbulan-bulan.</p>
        <p className="pb-4 text-justify">Penolakan dari Maria ternyata tidak membuat Alessandro berhenti dari tindakannya. Suatu hari, Maria kembali mengalami perlakuan bengis Alessandro yang berakhir ia harus terluka akibat tusukan Alessandro sebanyak 14 kali. Maria wafat keesokan harinya akibat infeksi pada luka-lukanya. Di akhir hidupnya, Maria mengampuni Alessandro dengan berkata, &quot;Aku mengampuni Alessandro Serenelli dan aku berharap ia akan bersama denganku di surga selamanya.&quot;</p>
        <p className="pb-4 text-justify">Alessandro dijatuhi hukuman 30 tahun penjara atas tindakannya. Berdasarkan catatan, Alessandro sempat mengalami perjumpaan dengan Maria Goretti semasa hukuman. Menerima pengampunan dari Maria, Alessandro membuat perubahan besar dalam kehidupannya. Ia memutuskan untuk hidup dalam kekudusan dan menjadi seorang Fransiskan.</p>
        <div className="my-4">
          <Image alt="Santa Maria Goretti" title="Santa Maria Goretti" radius="none" src="https://storage.googleapis.com/margot-web/basilika.webp" />
          <p className="text-center text-sm text-slate-400 italic">Foto Basilika Santo Petrus Saat Ini. Sumber: <a href="https://www.kompas.com/">Kompas.com</a></p>
        </div>
        <p className="pb-4 text-justify">Pada 27 April 1947, Maria menerima beatifikasi dan pada 24 Juni 1950, Maria diberikan gelar orang kudus oleh Paus Pius XII. Maria Goretti menjadi orang termuda yang menerima kanonisasi sebagai orang kudus sepanjang sejarah Gereja Katolik. Kanonisasinya dihadiri oleh lebih dari 500.000 umat, menjadikan upacara kanonisasinya sebagai yang terbesar bahkan di Basilika Santo Petrus.</p>
        <div className="my-4">
          <Image alt="Santa Maria Goretti" title="Santa Maria Goretti" radius="none" src="https://storage.googleapis.com/margot-web/Goretti-reliq.webp" />
          <p className="text-center text-sm text-slate-400 italic">Sumber: <a href="https://mariagoretti.com">mariagoretti.com</a></p>
        </div>
        <p className="pb-4 text-justify">Jasad Maria Goretti disimpan di dalam peti kaca. Sisa tulangnya dijaga dan dilindungi dengan patung lilin yang menyerupai struktur tulang-tulang tersebut.</p>
        <p className="pb-4 text-justify">Tanggal 6 Juli diperingati sebagai Pesta Nama Santa Maria Goretti. Keberanian dan keteguhannya dalam menjaga kesucian diri, menjadikannya teladan kesetiaan terhadap Kristus dan keberanian untuk mengampuni.</p>
        <div>
          <p className="italic text-slate-400">Sumber: <a className="text-blue-500 underline" href="https://mariagoretti.com" target="_blank">mariagoretti.com</a> (diakses tanggal 03 Juli 2024)</p>
          <p className="italic text-slate-400">Terjemahan dari Bahasa Inggris</p>
        </div>
      </div>
    </div>
  )
}

export default MariaGorettiPage;