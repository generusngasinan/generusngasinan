import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Bukber from "/images/h1.jpg";
import { useNavigate } from "react-router-dom";

const Berita5 = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="Berita2 pt-24 pb-10 bg-gradient-to-r from-sky-300 to-indigo-100 to-90%">
        <div className="container mx-auto px-4 ">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex flex-col  md:mx-60 rounded-xl shadow-2xl shadow-rose-400"
          >
            <h3 className=" font-semibold text-center text-2xl pb-4 pt-8 shadow-lg shadow-slate-400">
              Buka Bersama Kelompok Ngasinan
            </h3>
            <img
              src={Bukber}
              alt="dita"
              className="size-11/12 md:size-10/12 h-[400px] rounded-md md:h-[500px] mx-auto pt-1"
            />
            <p className=" text-justify p-2 pt-4 md:p-6 text-base ">
              Hari ini adalah hari ke-23 di bulan Ramadan. kami mengadakan buka
              bersama di Masjid Baabul Jannah yang terletak di kelompok
              ngasinan. Sebagian Jamaah tiba di masjid sekitar pukul 17.00 WIB
              dan sebagian yang lain menyusul hingga waktu buka tiba. pukul
              17.45 WIB Masjid sudah dipenuhi oleh para jamaah yang ingin
              menghadiri buka bersama.
              <br />
              <br />
              Saat azan Maghrib berkumandang, kami langsung memulai berbuka
              dengan memakan kurma dan minum air putih. Setelah itu, kami
              menikmati makanan yang telah disiapkan oleh para ibu-ibu yang
              kejatah menyediakan buka bersama hari ini. Makanan yang disajikan
              sangat lezat dan beragam. Kami menikmati makanan sambil berbincang
              dengan jamaah lainnya. Suasana di masjid sangat harmonis dan penuh
              kebersamaan. Setelah selesai makan, kami melanjutkan dengan shalat
              Maghrib berjamaah. Suara adzan dan bacaan Al-Qur'an sangat merdu
              dan mengharukan. Buka bersama di masjid ini menjadi momen yang
              sangat berkesan bagi kami.
              <br />
              <br /> Kami merasa sangat bersyukur dapat berkumpul dan berbagi
              kebahagiaan bersama jamaah kelompok ngasinan. Semoga alloh paring
              kesehatan, kekompakan, kerukunan, rezeki yang lancar, umur panjang
              yang barokah. AAmiin.
            </p>
            <button
              className="bg-cyan-400 mx-auto w-20 mb-2 rounded text-center"
              onClick={() => navigate("/")}
            >
              Kembali
            </button>
          </div>
          {/* <div className="bg-slate-600 p-3 rounded-3xl ">
            </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Berita5;
