import Navbar from "../component/Navbar";
import foto1 from "/images/1.jpg";

import Rongsoan from "/images/rongsoan.jpg";
import Mewarnai from "/images/mewarnai.jpg";
import Foto4 from "/images/4.jpg";
import Foto7 from "/images/7.jpg";
import Festival from "/images/56.jpg";
import Dita from "/images/53.jpg";
import Talita from "/images/talita.jpg";
import Footer from "../component/Footer";
import Caberawit from "/images/cab.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import CarouselPages from "../component/Carouselpages";

function Caberawitkg() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      {/* <CarouselPages /> */}

      <div className="caberawitpage bg-gradient-to-r from-rose-100 to-sky-300 to-90% ">
        <div className="container mx-auto px-4 py-2 ">
          <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
            <div className="box">
              <h1
                data-aos="fade-down"
                data-aos-duration="2000"
                className="lg:text-5xl/tight text-2xl font-bold mb-2 text-center shadow-sm shadow-red-200 "
              >
                CABERAWIT NGASINAN
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="200"
                className="py-2 text-sm font-semibold"
              >
                Hai Caberawit Ngasinan
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="200"
                className="text-base text-justify mb-2  "
              >
                Halaman ini menceritakan tentang kegiatan-kegiatan apa saja yang
                telah dilakukan oleh Caberawit Ngasinan selama tahun 2024-2025
              </p>
              {/* <a
                          href="#"
                          className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
                        >
                          Scrolll kebawah yaa!!
                          <i className="ri-eye-line ms-1"></i>
                        </a> */}
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="2000">
              <img
                src={Caberawit}
                // data-aos="zoom-in"
                // data-aos-duration="2000"
                alt="Halaman Homepage"
                className="md:w-full w-[400px]  mx-auto md:m-0  rounded-xl  shadow-lg shadow-white  h-[450px] md:h-[550px] "
              />
            </div>
          </div>

          <div className="md:h-24 h-16 mt-10 shadow-white rounded-lg ">
            <h1 className="items-center md:pt-9  pt-3 font-semibold text-center md:text-2xl text-lg shadow-md shadow-red-200  ">
              KEGIATAN CABERAWIT
            </h1>
          </div>

          <div className="main grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 items-center gap-10 ">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Festival}
                alt="Lebaran Bersama Generus"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Festival Anak Sholeh
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Alhamdulillah, Dalam acara yang diselenggarakan oleh Desa
                  Timur 2,Caberawit ngasinan tampil sangat antusias dengan
                  berhasil menyabet 3 piala pada perlombaan tersebut. adapun
                  juara yang di dapat adalah Juara 1 Lomba Murottal Alquran,
                  Juara 1 Lomba Mewarnai kategori Paud dan Juara 2 Lomba
                  mewarnai kategori Kelas 4-6 Sd.
                </p>
              </div>
              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                <i className="ri-calendar-line mr-2"></i>Minggu, 3 November 2024
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Dita}
                alt="Lebaran Bersama Generus"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Andita Juara 1 Murottal
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Asyikk Mba Dita juara 1 Murottal, sebuah kebanggan bagi diri
                  saya sendiri, Saya tau bacaan dia bagaiman sejak pertama kali
                  saya datang, sangat jelek ngga sih wkwk. Setelah saya tau
                  bacaannya kurang bagus pernah suatu ketika dengan paksaan saya
                  buat dia membaca satu halaman, mba Ditanya malah nangisss
                  hadehhh cupuuuuu!. Dan pada akhirnya dengan paksaan itu bacaan
                  mba dita jadi lancarrrr. alhamdulillah.
                </p>
              </div>
              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                <i className="ri-calendar-line mr-2"></i>Minggu, 3 November 2024
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Talita}
                alt="Lebaran Bersama Generus"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Talita & Izza Juara Mewarnai
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Dengan kekompakan dan kesemangatan remaja kelompok Ngasinan,
                  Alhamdulillah Acara Bazar kali ini berjalan dengan lancar dan
                  semua makanan serta minuman terjual ludesss. Adapun tujuan
                  dari penyelanggaraan ini bagi kami adalah untuk mempererat
                  kekompakan dan kesemangatan remaja Ngasinan. Semoga kedepannya
                  semakin kompak dan rukun.Aaamiiinnn...
                </p>
              </div>

              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                <i className="ri-calendar-line mr-2"></i>Minggu, 3 November 2024
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Mewarnai}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Mewarnai Di Pasar Malam
                </div>
                <p className="text-gray-700 text-base text-justify  line-clamp-5 hover:line-clamp-none">
                  Pasar malam memang selalu menyenangkan bagi anak-anak, hal itu
                  terbukti pada cabarawit ngasinan, bersama mas hilal ingin
                  mencoba wahana-wahana yang ada diapasar malam itu tapi
                  kebanyakan takut mencobanya, akhirnya pilihan mereka jatuh
                  pada wahana mewarnai wkwk.
                </p>
              </div>

              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                <i className="ri-calendar-line"></i>
                20 Juli 2024
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Foto4}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Lomba 17 Agustus 2024
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Untuk memeriahkan hari kemerdekaan indonesia, kami dari
                  caberawit ngasinan mengadakan berbagai macam lomba, salah satu
                  contohnhya yaitu lomba makan kerupu, lomba memindahkan air,
                  lomba cerdas cermat dan lomba canto cething. setiap lomba
                  memiliki hadiah yang spesiallah pokoknya.
                </p>
              </div>
              <div className="px-6 pt-1 pb-1">
                <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                  <i className="ri-calendar-line pr-2"></i>
                  17 Agustus 2024
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Foto7}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Hadiah Lebaran Buat MT
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Ini merupakan tradisi Generus Ngasinan yaitu memberikan
                  cendramata kepada mas Mt-nya, Biasanya berupa Baju lebaran
                  atau kopiah untuk ngajar. ini merupakan tradisi yang sangat
                  baik dan harus dipertahankan wkwkw.
                </p>
              </div>

              <div className="px-6 pt-4 pb-2">
                <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                  <i className="ri-calendar-line pr-2"></i>1 Maret 2024
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Rongsoan}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Ngeronsok Sampah</div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none ">
                  Kegiatan ini merupakan kegiatan bulanan bagi generus ngasinan,
                  jadi generus mengambil ronsoan yang ada dirumah-rumah
                  jamaah,lalu dikumpuka di mesjid. kemudian setelah dikumpulkan
                  lalu dijual. nah hasilnya itu digunakan untuk rekreasi hehe.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                  <i className="ri-calendar-line pr-2"></i>1 Maret 2024
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={foto1}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Liburan Ke Intan Pari
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Kegiatan ini merupakan agenda rutin tahunan caberawit, biar
                  ngga bosen ngaji ya kan Hehe, Rasanya menyenangkan,
                  menggembirakan dan penuh canda tawa para caberawit.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                  <i className="ri-calendar-line mr-2"></i>
                  02 Maret 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Caberawitkg;
