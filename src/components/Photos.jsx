const Photos = () => {
  return (
    <div className="bg-white w-full min-h-96 flex justify-center py-20">
      <div className="w-3/4 max-w-[1280px] flex items-center flex-col gap-4">
        <h1 className="text-3xl font-medium text-blue-primary">Galeri</h1>
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-4">
            <div className="w-full">
              <img src="https://cdn.discordapp.com/attachments/1245367927130034199/1256523911873691668/tatib1.jpeg?ex=66811495&is=667fc315&hm=a6065761fd9dd4b3aa8daeee9169d93f96c9a0a05c5e0ba780e26ef2c320dc43&"
              className="object-cover w-full h-56 rounded-lg hover:shadow-2xl hover:shadow-blue-950/50 hover:-translate-y-2 transition-all"/>
            </div>
            <div className="w-full">
              <img src="https://cdn.discordapp.com/attachments/1245367927130034199/1256567313294168164/ziarek1_compressed.jpeg?ex=66813d01&is=667feb81&hm=816e3db8d6bf017f45abc4a6cc51c3f1c665f6ce6cfd6e3e68fdfe53a60e3989&"
              className="object-cover w-full h-56 rounded-lg hover:shadow-2xl hover:shadow-blue-950/50 hover:-translate-y-2 transition-all"/>
            </div>
            <div className="w-full">
              <img src="https://cdn.discordapp.com/attachments/1245367927130034199/1256568134488428625/ziarek2_compressed.jpeg?ex=66813dc5&is=667fec45&hm=9d26e40c6ebd2a44b54e2f80e9c2ffbd9e31755c939c1d6e102def2d32cecf64&"
              className="object-cover w-full h-56 rounded-lg hover:shadow-2xl hover:shadow-blue-950/50 hover:-translate-y-2 transition-all"/>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <img src="https://cdn.discordapp.com/attachments/1245367927130034199/1256523912926335056/koor_1.jpeg?ex=66811495&is=667fc315&hm=3a15ea1c5a47ee91722ed3d40aaf3434e3658f8726592d011e52c4f126f26a50&"
              className="object-cover w-full h-56 rounded-lg hover:shadow-2xl hover:shadow-blue-950/50 hover:-translate-y-2 transition-all"/>
            </div>
            <div className="w-full">
              <img src="https://cdn.discordapp.com/attachments/1245367927130034199/1256523912926335056/koor_1.jpeg?ex=66811495&is=667fc315&hm=3a15ea1c5a47ee91722ed3d40aaf3434e3658f8726592d011e52c4f126f26a50&"
              className="object-cover w-full h-56 rounded-lg hover:shadow-2xl hover:shadow-blue-950/50 hover:-translate-y-2 transition-all"/>
            </div>
            <div className="w-full">
              <img src="https://cdn.discordapp.com/attachments/1245367927130034199/1256523912926335056/koor_1.jpeg?ex=66811495&is=667fc315&hm=3a15ea1c5a47ee91722ed3d40aaf3434e3658f8726592d011e52c4f126f26a50&"
              className="object-cover w-full h-56 rounded-lg hover:shadow-2xl hover:shadow-blue-950/50 hover:-translate-y-2 transition-all"/>
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