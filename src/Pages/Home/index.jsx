import React, { useEffect } from "react";
import imgProdSatu from "../../assets/p1.png";
import imgProdDua from "../../assets/p2.png";
import imgProdTiga from "../../assets/p3.png";
import imgProdEmpat from "../../assets/p4.png";
import imgProdLima from "../../assets/p5.png";
import imgProdEnam from "../../assets/p6.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Bitmap from "../../assets/Medsos/Bitmap.svg";
import Bitmap2 from "../../assets/Medsos/Bitmap (1).svg";
import Bitmap3 from "../../assets/Medsos/Bitmap (2).svg";
import Bitmap4 from "../../assets/Medsos/Bitmap (3).svg";
import { Link } from "react-router-dom";

function DisplayProducts(props) {
  return (
    <>
      {props.id % 2 === 1 ? (
        <div className="w-full md:h-[640px] mb-[16%] md:mb-0 flex flex-col md:flex-row">
          <span className="flex-1 md:w-[640px] md:pr-24">
            <img
              src={props.img}
              alt="imageProducts"
              className="w-full h-full object-cover"
            />
          </span>
          <div className="flex-1 flex flex-col gap-5 justify-center px-4 md:pl-3 md:pr-36">
            <h2 className="text-4xl md:text-6xl">{props.prodName}</h2>
            <p>{props.desc}</p>
            <div className="w-1/2 flex items-center">
              <span className="w-full h-[2px] border border-black"></span>
              <button className="btn btn-ghost">
                <Link to={"/product"}>shop now</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full md:h-[640px] mb-[16%] md:mb-0 flex flex-col-reverse md:flex-row">
          <div className="flex-1 flex flex-col gap-5 justify-center px-4 md:pr-3 md:pl-36">
            <h2 className="text-4xl md:text-6xl">{props.prodName}</h2>
            <p>{props.desc}</p>
            <div className="w-1/2 flex items-center">
              <span className="w-full h-[2px] border border-black"></span>
              <button className="btn btn-ghost">
                <Link to={"/product"}>shop now</Link>
              </button>
            </div>
          </div>
          <span className="flex-1 md:w-[640px] md:pl-24">
            <img
              src={props.img}
              alt="imageProducts"
              className="w-full h-full object-cover"
            />
          </span>
        </div>
      )}
    </>
  );
}

function Home() {
  const data = [
    {
      id: 1,
      img: imgProdSatu,
      prodName: "Mid-Century 1929 Sofa with Pilow",
      desc: "Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam",
    },
    {
      id: 2,
      img: imgProdDua,
      prodName: "Mini Modern Lamp",
      desc: "Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam",
    },
    {
      id: 3,
      img: imgProdTiga,
      prodName: "Blue Living Vintage Chair",
      desc: "Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam",
    },
    {
      id: 4,
      img: imgProdEmpat,
      prodName: "Japanese style blue ceramic",
      desc: "Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam",
    },
    {
      id: 5,
      img: imgProdLima,
      prodName: "Japanese plate floral",
      desc: "Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam",
    },
    {
      id: 6,
      img: imgProdEnam,
      prodName: "Modern Floor Lamp",
      desc: "Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam",
    },
  ];
  useEffect(() => {
    document.title = "RAZYR - Home";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="hero-home w-full flex flex-col justify-center items-center h-screen md:h-[796px] gap-4">
        <h1 className="text-[4.75rem] text-center font-bold text-blackSec">
          Minimal Furniture Store
        </h1>
        <p className="text-center text-base max-w-3xl text-greySec">
          Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque
          a nunc vel diam auctor commodo. Curabitur blandit ultrices ex.
          Curabitur ut magna dignissim, dignissim
        </p>
      </section>

      {data.map((product) => (
        <DisplayProducts
          key={product.id}
          id={product.id}
          img={product.img}
          prodName={product.prodName}
          desc={product.desc}
        />
      ))}
      <section className=" w-full  bg-[#161616] flex flex-col px-20 py-16 lg:px-[8.7rem] lg:py-[5.8rem]">
        <div className="w-full flex justify-center items-center flex-col gap-9">
          <p className=" text-lg font-PlayFairDisplay w-[89%] text-center text-white lg:text-3xl lg:leading-[55px]">
            Gave 5 stars for excellent customer service. I had a couple of
            questions which they replied quickly to answer. If I could give
            multiple reasons for my rating it would also be for the design
            quality and customization to go along with the great service. The
            theme is excellent, keep up the great work.
          </p>
          <div className=" w-[4.5rem] h-[2px] bg-greyFont"></div>
          <p className=" font-bold font-OpenSans text-white text-lg text-center">
            Trevor Rivera - CEO IKEA
          </p>
        </div>
        <div className="w-full gap-[10.4rem] flex-wrap flex flex-col md:flex-row sm:grid sm:grid-cols-2 md:flex justify-center justify-items-center items-center mt-32 mb-3">
          <div className="our-partner-img h-[8.9rem] ">
            <img src={Bitmap} alt="" className="w-full" />
          </div>
          <div className="our-partner-img h-[8.9rem]">
            <img src={Bitmap2} alt="" className="w-full" />
          </div>
          <div className="our-partner-img h-[8.9rem]">
            <img src={Bitmap3} alt="" className="w-full" />
          </div>
          <div className="our-partner-img h-[8.9rem]">
            <img src={Bitmap4} alt="" className="w-full" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
