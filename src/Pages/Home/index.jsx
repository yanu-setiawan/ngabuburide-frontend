import React from "react";
import imgProdSatu from "../../assets/p1.png";
import imgProdDua from "../../assets/p2.png";
import imgProdTiga from "../../assets/p3.png";
import imgProdEmpat from "../../assets/p4.png";
import imgProdLima from "../../assets/p5.png";
import imgProdEnam from "../../assets/p6.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
              <button className="btn btn-ghost">shop now</button>
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
              <button className="btn btn-ghost">shop now</button>
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
      <section></section>
      <Footer />
    </>
  );
}

export default Home;
