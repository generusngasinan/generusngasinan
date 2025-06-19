import Hilal from "/images/hilall.jpg";
import Aldo from "/images/aldo.jpg";

const Pesanpages = () => {
  return (
    <>
      <div className="contactpage pb-10 bg-gradient-to-r from-rose-200 to-sky-200 to-90%">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-3xl font-semibold justify-items-center items-center text-center pb-3 shadow-2xl shadow-sky-300  ">
              Pesan Para Guru
            </h1>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-4 lg:gap-2">
            {/* <div className="flex mt-2">
              <img
                src={Hilal}
                className="w-44  h-40 md:w-72 md:h-24 rounded-full"
              />
              <p className="pl-3 pt-1 text-center justify-center text-xs my-auto ">
                " Semoga Generus Ngasinan Menjadi Generus Yang Unggul
                Berkarakter 29 karakter Luhur Jamaah. Amiinn " <br />
                <br />
                Afrigh Fadillah | MT 2015 - 2019
              </p>
            </div> */}

            <div data-aos="fade-up-right" className="flex mt-2">
              <img
                src={Aldo}
                className="w-44 h-32 lg:w-80 lg:h-24 rounded-full shadow-2xl "
              />
              <p className="pl-3 text-center justify-center text-xs my-auto shadow-2xl shadow-slate-300">
                `Semoga Allah paring buat Generus ngasinan menjadi seorang
                mubaligh mubalighot yang sarjana yang alim faqih barokah dan
                sukses dunia dan akhirat` <br />
                <br />
                Aldo Gilang | MT 2019 - 2021
              </p>
            </div>

            {/* <div className="flex mt-2">
              <img
                src={Hilal}
                className="w-44 h-40 md:w-72 md:h-24 rounded-full"
              />

              <p className="pl-3 text-center justify-center text-xs my-auto">
                ``Semoga Generus Ngasinan Menjadi Generus Yang Unggul
                Berkarakter 29 karakter Luhur Jamaah. Amiinn`` <br />
                <br />
                Maulana Dani | MT 2022 - 2023
              </p>
            </div> */}
            <div data-aos="fade-up-right" className="flex mt-2">
              <img
                src={Hilal}
                className="w-44 h-32 lg:w-80 lg:h-24 rounded-full shadow-2xl shadow-slate-300"
              />
              <p className="pl-3 text-center justify-center text-xs my-auto shadow-2xl shadow-slate-300">
                ``Semoga Generus Ngasinan Menjadi Generus Yang Unggul
                Berkarakter 29 karakter Luhur Jamaah. Amiinn`` <br />
                <br />
                Hilal Hamdi | MT 2024 - 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pesanpages;
