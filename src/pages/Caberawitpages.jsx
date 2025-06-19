import Navbar from "../component/Navbar";
// import Guru from "/images/guru.jpg";
import Guru from "/images/guru.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import Footer from "../component/Footer";
const foto = [
  {
    id: 1,
    image: "/images/HH.jpg",
    name: "Andita Nola Hafidzah",
    kelas: "Caberawit",
  },
  {
    id: 2,
    image: "/images/A.jpg",
    name: "Talita Azmi",
    kelas: "Caberawit",
  },
  {
    id: 3,
    image: "/images/YUAN.jpg",
    name: "Achnaf Yuan",
    kelas: "Caberawit",
  },
  {
    id: 4,
    image: "/images/KIKA.jpg",
    name: "Aqiqa",
    kelas: "Caberawit",
  },
  {
    id: 5,
    image: "/images/asnan.jpg",
    name: "Asnan",
    kelas: "Caberawit",
  },
  {
    id: 6,
    image: "/images/vava.jpg",
    name: "Vava",
    kelas: "Caberawit",
  },
  {
    id: 7,
    image: "/images/izza.jpg",
    name: "Izza",
    kelas: "Caberawit",
  },
  {
    id: 8,
    image: "/images/bila.jpg",
    name: "Bila",
    kelas: "Caberawit",
  },
  {
    id: 9,
    image: "/images/aisyah.jpg",
    name: "Aisyah",
    kelas: "Caberawit",
  },
  {
    id: 10,
    image: "/images/atira.jpg",
    name: "Atira",
    kelas: "Caberawit",
  },
  {
    id: 11,
    image: "/images/kinanti.jpg",
    name: "Kinanti",
    kelas: "Caberawit",
  },
  {
    id: 12,
    image: "/images/arsyaka.jpg",
    name: "Arsyaka",
    kelas: "Caberawit",
  },

  {
    id: 14,
    image: "/images/300.jpg",
    name: "Ilham",
    kelas: "Pra-remaja",
  },
  {
    id: 15,
    image: "/images/arfa.jpg",
    name: "Arfa Devano Novi",
    kelas: "Bayi",
  },
  {
    id: 16,
    image: "/images/19.jpg",
    name: "Ananda Zuhal",
    kelas: "Pra-remaja",
  },
  {
    id: 17,
    image: "/images/syifa.jpg",
    name: "Asyifa Surono",
    kelas: "Pra-remaja",
  },
  {
    id: 13,
    image: "",
    name: "Zahira",
    kelas: "Paud",
  },
  {
    id: 13,
    image: "",
    name: "Gavin",
    kelas: "Tk",
  },
];

const Caberawitpages = () => {
  return (
    <>
      <Navbar />
      <div className="caberawitpages pt-36 bg-gradient-to-r from-rose-100 to-sky-300 to-90%">
        <div className="container mx-auto px-4 md:py-2 py-1 items-center justify-items-center">
          <div className=" md:w-[1450px] w-[350px] md:h-24 h-16   shadow-white rounded-lg ">
            <h1 className=" items-center md:pt-9 pt-5 pb-4 font-semibold text-center md:text-3xl text-xl  shadow-lg shadow-red-200  ">
              GENERUS NGASINAN 2024 - 2025
            </h1>
          </div>
          <div className="mt-6">
            <Card className="w-[350px] md:w-[550px]">
              <CardHeader
                floated={false}
                className="p-2  h-[350px]  md:h-[550px]"
              >
                <img src={Guru} alt="profile-picture" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Dila - Hilal - Reva
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  Dewan Guru
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className=" md:pt-8 pt-4 grid grid-cols-1 md:grid-cols-4  gap-4 md:gap2  ">
            {foto.map((foto) => (
              <div key={foto.id}>
                <div className="">
                  <Card className="w-[350px]">
                    <CardHeader floated={false} className="p-2 h-[350px]">
                      <img src={foto.image} alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-2"
                      >
                        {foto.name}
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="font-medium"
                        textGradient
                      >
                        {foto.kelas}
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Caberawitpages;
