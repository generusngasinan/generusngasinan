import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { photo } from "../data";

function Imagepages() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="mainpage pt-32 bg-gradient-to-r from-rose-100 to-sky-300 to-90% ">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className=" container mx-auto px-4 py-2 items-center justify-items-center"
        >
          <div className="  w-full md:h-24 h-16   shadow-white rounded-lg ">
            <h1 className="items-center md:pt-9 pb-4 pt-3 font-semibold text-center md:text-3xl text-xl  shadow-lg shadow-red-200  ">
              FOTO - FOTO GENERUS
            </h1>
          </div>

          <div className="images grid grid-cols-1 gap-4 md:gap-4 sm:grid-cols-2 md:grid-cols-4 pt-10 ">
            {photo.map((photo) => (
              <div key={photo.id}>
                <div className="bg-white w-full h-[300px]">
                  <img
                    className="object-cover object-center w-full h-[300px] max-w-full rounded-lg py-2 px-2 "
                    src={photo.image}
                    alt="gallery-photo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Imagepages;
