/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import ImgProduct2 from "../../../assets/product2.png";
import CheckStock from "../../../assets/check-circle-08.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMySelling, deleteMySelling } from "../../../utils/https/products";
import Loader from "../../Loader";
import Product from "../../../Pages/Product";
import axios from "axios";

function MyProduct() {
  const controller = useMemo(() => new AbortController(), []);
  const userState = useSelector((state) => state.user.data);
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [productDel, setProductDel] = useState();
  const [isDelete, setIsDelete] = useState();

  const navigate = useNavigate();

  const imgUrl =
    "https://res.cloudinary.com/dhikerrnk/image/upload/v1680940221/";

  const fetching = async () => {
    setIsLoading(true);
    try {
      const result = await getMySelling(userState.id, controller);
      setDatas(result.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    console.log(id);
    try {
      const deleteProduct = await deleteMySelling(id, controller);
      setIsDelete(deleteProduct);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(datas);
  // console.log();
  // console.log(isDelete);

  useEffect(() => {
    document.title = "RAZYR - My Products";
    fetching();
  }, [isDelete]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
          <section className=" flex flex-col gap-10">
            {datas.map((product) => (
              // <productContent
              //   key={product.prod_name}
              //   image={product.image}
              //   prod_name={product.prod_name}
              //   price={product.price}
              //   // stock={product.stock}
              // />
              <section className=" flex w-full" key={product.id}>
                <div className=" flex  w-[45%] flex-col ">
                  <div className=" flex gap-[0.5rem] md:gap-10">
                    <div className=" h-20 w-20 md:w-[8.8rem] md:h-[8.8rem]  lg:h-[10.8rem] lg:w-[10.7rem]">
                      <img
                        className=" w-full h-full"
                        src={imgUrl + product.image}
                        alt=""
                      />
                    </div>
                    <div className=" text-xs md:text-sm flex justify-center items-center">
                      <p>{product.prod_name}</p>
                    </div>
                  </div>
                </div>
                <div className=" w-[20%] flex justify-center lg:justify-normal">
                  <div className="flex gap-[0.39rem]">
                    <div className="  flex items-center ">
                      <img
                        className=" w-[0.94rem] h-[0.94rem] flex items-center"
                        src={CheckStock}
                        alt=""
                      />
                    </div>
                    <div className="  flex items-center justify-center  font-medium text-[#262626]">
                      10
                    </div>
                  </div>
                </div>
                <div className=" w-[35%] flex justify-center lg:justify-normal md:pl-4 lg:pl-0 items-center">
                  <div className=" flex flex-col md:flex-row items-center  justify-between w-full">
                    <div className=" font-bold text-xs md:text-lg flex items-center">
                      <p>{product.price}</p>
                    </div>
                    <div className=" flex flex-col gap-7">
                      <button className="btn bg-blackSec flex w-full lg:w-[7rem] xl:w-[12.5rem] h-[3.75rem] gap-3 border-none justify-center items-center">
                        <p className="text-white font-bold">Edit</p>
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="btn bg-redBtn flex w-full lg:w-[7rem] xl:w-[12.5rem] h-[3.75rem] gap-3 border-none justify-center items-center hover:bg-red-500"
                      >
                        <p className="text-white font-bold">Delete</p>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </section>
        </section>
      )}
    </>
  );
}

export default MyProduct;
