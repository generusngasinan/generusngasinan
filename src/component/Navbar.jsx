import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/images/logo.jpg";

function Navbar() {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "right-0" : "-right-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-1 bg-white shadow " : "py-4";
  return (
    <>
      <div className={`navbar fixed w-full translate-all ${scrollActive}`}>
        <div className="container mx-auto px-4 ">
          <div className="navbar-box flex items-center justify-between">
            <div className="logo flex grid-cols-2 gap-2 items-center">
              <img src={Logo} className="w-auto h-8 rounded-full" />
              <h1 className="text-sm items-center md:text-xl font-bold">
                GENERUS NGASINAN
              </h1>
            </div>
            <ul
              className={`flex lg:gap-10 lg:static lg:flex-row lg:shadow-none lg:py-5 lg:bg-transparent
            lg:w-auto lg:h-full lg:translate-y-0 lg:text-black gap-6  mt-20 rounded-lg lg:p-0 lg:m-0 lg:transition-none fixed ${menuActive} top-56 
            -translate-y-3/4 md:-translate-y-[300px] flex-col  rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold
             text-white transition-all }`}
            >
              <i
                className="ri-close-line font-bold text-2xl text-right hover:text-pink-600 items-end pr-3 pt-7 lg:hidden block"
                onClick={handleClick}
              ></i>
              <li className="flex items-center gap-2  px-5">
                <i className="ri-home-2-line hover:text-pink-500 text-3xl lg:hidden block"></i>
                <a
                  href="#"
                  onClick={() => navigate("/")}
                  className="text-sm opacity-75 hover:text-pink-500"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center gap-2 px-5">
                <i className="ri-walk-line text-3xl lg:hidden block"></i>
                <a
                  href="#"
                  onClick={() => navigate("/mainpages")}
                  className="text-sm opacity-75 hover:text-pink-500"
                >
                  Remaja
                </a>
              </li>

              <li className="flex items-center gap-2 px-5">
                <i className="ri-body-scan-line text-3xl lg:hidden block"></i>

                <a
                  href="#"
                  onClick={() => navigate("/caberawitkg")}
                  className="text-sm opacity-75 hover:text-pink-500"
                >
                  Caberawit
                </a>
              </li>

              <li className="flex items-center gap-2 px-5">
                <i className="ri-image-line text-3xl lg:hidden block"></i>
                <a
                  href="#"
                  onClick={() => navigate("/imagepages")}
                  className="text-sm opacity-75 hover:text-pink-500"
                >
                  Album Generus
                </a>
              </li>
              <li className="flex items-center gap-2 px-5">
                <i className="ri-movie-line text-3xl lg:hidden block"></i>
                <a
                  href="#"
                  onClick={() => navigate("/videopages")}
                  className="text-sm opacity-75 hover:text-pink-500"
                >
                  Video Generus
                </a>
              </li>
              <li className="flex items-center gap-2 px-4 lg:pb-0 pb-3">
                <i className="ri-team-line text-3xl lg:hidden block"></i>
                <a
                  href="#"
                  onClick={() => navigate("/caberawitpages")}
                  className="text-sm opacity-75 hover:text-pink-500"
                >
                  Daftar Generus
                </a>
              </li>
            </ul>
            <div className="social flex  items-center gap-2 lg:hidden">
              <a
                href="https://www.instagram.com/generusngasinan_/profilecard/?igsh=c2lkYjQ2MmcwNWx3"
                className=" bg-sky-400 text-center w-[80px] py-1 rounded-lg text-white text-[10px] hover:bg-pink-400 translate-all"
              >
                Social Media
              </a>
              <i
                className="ri-menu-line text-3xl hover:text-pink-500 lg:hidden block"
                onClick={handleClick}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
