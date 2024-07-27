import { Image, Divider } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sejarah - Lingkungan St. Maria Goretti Paroki Kosambi Baru",
  description: "Website Lingkungan Santa Maria Goretti Paroki Kosambi Baru Gereja Santo Matias Rasul",
}

const SejarahPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className='w-full h-[60vh] bg-[url("/api/static/img/Goretti_6July.webp")] bg-cover bg-center'>
        <div className='w-full h-[60vh] bg-neutral-black/75 flex items-center justify-center'>
          <div className='w-3/4 max-w-[1024px] flex flex-col items-center text-center'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-4xl md:text-5xl font-black text-neutral-white'>Sejarah Lingkungan St. Maria Goretti</h1>
              {/* <div>
                <h4 className='text-2xl md:text-4xl text-neutral-white'>Gunakan formulir di bawah ini untuk menghubungi kami dan menentukan janji temu dengan ketua lingkungan.</h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center min-h-screen">
        <div className="max-w-prose pt-8 pb-20 px-4">
          {/* <h1 className="text-4xl text-blue-primary font-semibold pb-4">Sejarah Lingkungan St. Maria Goretti</h1>
          <Divider orientation="horizontal" /> */}
          {/* <div className="my-4">
            <Image alt="Santa Maria Goretti" title="Santa Maria Goretti" radius="none" src="/api/static/img/Goretti_6July.webp" />
            <p className="text-center text-sm text-slate-400 italic">Sumber: <a href="https://www.catholicnewsagency.com">www.catholicnewsagency.com</a></p>
          </div> */}
          <p className="pb-4 text-justify">Proses pembentukan Lingkungan Santa Maria Goretti dimulai pada akhir tahun 2011. Awalnya lingkungan ini terdiri dari umat diaspora yang berasal dari lingkungan dan wilayah paroki yang berbeda-beda. Sekitar bulan Oktober 2011, muncul ide dari Bapak Yohanes Saka yang saat itu menjadi ketua Lingkungan Maria Magdalena untuk mekar menjadi lingkungan baru. Ini dilakukan karena wilayah lingkungan yang terlalu luas menyebabkan pelayanan kurang maksimal di titik-titik yang kurang terjangkau. Akhirnya diadakan pertemuan perdana di daerah Kali Tempe untuk membahas terkait pemekaran lingkungan.</p>
          <p className="pb-4 text-justify">Saat itu terjadi dilema, yakni tentang persyaratan pembuatan lingkungan baru yang harus terdiri dari minimal 20 KK. Sementara saat itu, umat Lingkungan Maria Magdalena baru terdaftar sebanyak 7 KK, ditambah dengan umat diaspora menjadi 12 KK. Berkat kerja keras dan rahmat dari Tuhan Yesus, terbentuklah lingkungan baru yang saat ini menjadi Lingkungan Maria Goretti.</p>
          <p className="pb-4 text-justify">Wilayah XII dikenal juga dengan Wilayah Maria, sehingga pemilihan nama pelindung lingkungan perlu mempertimbangkan sosok terbaik yang berkaitan dengan nama &apos;Maria&apos;. Nama pelindung pertama yang diajukan adalah Maria Fatima. Akan tetapi, setelah diajukan ke pihak dewan paroki ternyata nama Maria Fatima sudah dimiliki oleh lingkungan lain. Akhirnya dipilihlah nama Maria Goretti sebagai nama pelindung lingkungan. Maria Goretti dikenal sebagai pelindung para perawan yang harus berakhir sebagai martir sebab dibunuh oleh tetangganya yang bernama Alessandro ketika menjaga kesuciannya.</p>
          <p className="pb-4 text-justify">Diluar dugaan, umat Maria Goretti bertumbuh sangat pesat selama 10 tahun. Umat Maria Goretti berasal dari berbagai macam daerah baik dari dalam maupun luar Pulau Jawa. Berasal dari suku dan budaya yang berbeda-beda justru mempererat hubungan kami di dalam lingkungan. Berbagai kegiatan kami lakukan bersama, seperti doa, ziarek, olahraga, dan pelayan-pelayanan di Gereja. Tak lupa kami juga melibatkan anak-anak serta OMK dalam kehidupan lingkungan. Mulai dari kegiatan koor, misdinar, dan mendukung keaktifan OMK di Wilayah XII dan paroki.</p>
          <p className="pb-4 text-justify">Berbagai dinamika hidup berlingkungan telah kami lalui. Pada tahun 2023, tercatat umat Lingkungan Maria Goretti mencapai 85 KK. Saat itu, Dewan Paroki meminta agar Lingkungan Maria Goretti dimekarkan agar pelayanan dapat lebih maksimal. Mempertimbangkan kondisi yang ada, pada tahun 2023 Lingkungan Maria Goretti mekar menjadi lingkungan baru, namun tetap mempertahankan identitas Maria Goretti. Lingkungan tersebut adalah <span className="font-medium text-blue-secondary">Lingkungan Maria Goretti 1</span> dan <span className="font-medium text-blue-secondary">Lingkungan Maria Goretti 2</span>. Pesta nama pelindung lingkungan tetap dilakukan bersama-sama dengan mempertahankan semangat persaudaraan sebagai Lingkungan Maria Goretti.</p>
        </div>
      </div>
    </div>
  )
}

export default SejarahPage