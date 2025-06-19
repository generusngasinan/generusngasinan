import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Umbul from "/images/umbull.jpg";
import { useNavigate } from "react-router-dom";

function Berita4() {
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
            className="flex flex-col shadow-2xl shadow-rose-400 md:mx-60 rounded-xl "
          >
            <h3 className=" font-semibold text-center text-2xl pb-4 pt-8 shadow-lg shadow-slate-400">
              Liburan Ke Umbul Pelem
            </h3>
            <img
              src={Umbul}
              alt="Umbul Pelem"
              className="size-11/12 md:size-10/12 h-[400px] rounded-md md:h-[500px] mx-auto pt-1"
            />
            <p className=" text-justify p-2 pt-4 md:p-6 text-base ">
              `Matahari terbenam, tapi kenangan tak akan pernah pudar`` Itulah
              yang terjadi pada kita sekarang, walaupun matahari terbenam
              digantikan oleh rembulan, tapi kenangan-kenangan dihidup ini tidak
              akan pudar.
              <br></br>
              Pada tanggal 1 Februari 2025,caberawit bersama walinya(orang tua
              masing-masing) diajak untuk refreshing ke UMBUL PELEM, banyaak
              sekali hal hal seru yang dilakukan, beberapa ada yang terapi ikan,
              ada yang berenang di kolam busa,daan baanyakk lagii.Lalu saat
              hendak berkemas, kita mengadakan pembagian doorprize, ada banyak
              hadiah 🎁🎁setelah pembagian selesai, sudah ada yg membukanya dan
              akhirnya ada yg menangis ingin bertukar hadiah😭😭 tapii
              alhamdulillah nya semua bisa diatasi💗
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
}
export default Berita4;
