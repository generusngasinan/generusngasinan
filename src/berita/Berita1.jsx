import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Talita from "/images/talita.jpg";
import { useNavigate } from "react-router-dom";

const Berita1 = () => {
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
              Talita & Izza Juara Lomba Mewarnai
            </h3>
            <img
              src={Talita}
              alt="dita"
              className="size-11/12 md:size-10/12 h-[400px] rounded-md md:h-[500px] mx-auto pt-1"
            />
            <p className=" text-justify p-2 pt-4 md:p-6 text-base ">
              Mba Talita dan Mba Izza juga mendapatkan juara Mewarnai pada
              kategori paud dan sd kelas 5, mereka semangat dan antusias untuk
              mengikuti ajang lomba tahunan ini. Mba Talita dan mba Izza
              mendapatkan juara 1 & 2 Mewarnai, sungguh luar biasa, tidak
              sia-sia selama sebulan ngajinya hanya fokus mewarnai.
              <br />
              <br />
              Semoga diajang berikutnya bisa mendapat hasil yang lebih memuaskan
              lagi..aaamiiiin
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
export default Berita1;
