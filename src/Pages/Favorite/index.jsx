import React, { useEffect, useMemo, useState } from "react";
import Card from "./cardFavorite";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getFavorite } from "../../utils/https/favorite";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

function DataNotFound() {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center text-4xl md:text-6xl font-bold text-center">
      DATA NOT FOUND
    </div>
  );
}

function Favorite() {
  const controller = useMemo(() => new AbortController(), []);
  const stateStore = useSelector((state) => state.user);
  // const stateCart = useSelector((state) => state.cart);
  const [favorite, setFavorite] = useState([]);
  // const [countFavorite, setCountFavorite] = useState(0);
  const [isLoading, setLoading] = useState(true);

  // const fetching = async () => {
  //   setLoading(true);
  //   try {
  //     const getFav = await getFavorite(stateStore.token, controller);
  //     // console.log(getFav.data.data);
  //     setFavorite(getFav.data.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetching = async () => {
    setLoading(true);
    try {
      const getFav = await getFavorite(stateStore.token, controller);
      const result = getFav.data.data;
      setFavorite(result);
      // setCountFavorite(result.length);
      // console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "RAZYR - Favorite";
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateStore.token, controller]);

  return (
    <>
      <Header />
      <section className=" flex flex-col pb-[10rem]">
        <section className="relative">
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Favorite</h1>
            <p className=" text-[1rem] text-blackSec">
              Pay and get your ordered items
            </p>
          </div>
        </section>
        <section className=" mt-20 flex flex-col mx-[5%] md-[4%] lg:mx-[10%]">
          <section className=" flex flex-col w-full mt-[6.3rem] gap-10">
            <section className="flex h-[4.4rem] w-full border-y border-greyBord">
              <div className=" w-[45%] flex text-xs md:text-lg  items-center font-medium">
                <p>Products</p>
              </div>
              <div className=" w-[20%] flex text-xs md:text-lg items-center justify-center lg:justify-normal font-medium">
                <p>Stock Status</p>
              </div>
              <div className=" w-[35%] flex text-xs md:text-lg justify-center md:justify-normal md:pl-4 lg:pl-0 items-center  font-medium">
                <p>Price</p>
              </div>
            </section>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <section className=" flex flex-col gap-10">
                  {favorite.length < 1 ? (
                    <DataNotFound />
                  ) : (
                    <>
                      {favorite.map((data) => (
                        <Card
                          fetching={fetching}
                          key={data.id}
                          id={data.id}
                          prod_id={data.prod_id}
                          prod_name={data.prod_name}
                          image={data.image}
                          price={data.price}
                          stock={data.stock}
                        />
                      ))}
                    </>
                  )}
                </section>
              </>
            )}
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Favorite;
