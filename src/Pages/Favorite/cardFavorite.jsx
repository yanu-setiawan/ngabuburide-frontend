import CheckStock from "../../assets/check-circle-08.svg";
import { deleteFavorite } from "../../utils/https/favorite";
import ModalMsg from "../../components/ModalMsg";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

function Card(props) {
  const controller = useMemo(() => new AbortController(), []);
  const stateStore = useSelector((state) => state.user);
  const [isErrModal, setErrModal] = useState(false);
  const [msgModal, setMsgModal] = useState();
  const imgUrl =
    "https://res.cloudinary.com/dhikerrnk/image/upload/v1680940221/";

  const handleDelete = async (prodId) => {
    try {
      const result = await deleteFavorite(stateStore.token, prodId, controller);
      console.log(result.data.msg);
      setMsgModal(result.data.msg);
      setErrModal(true);
      props.fetching();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className=" flex w-full">
        <div className=" flex  w-[45%] flex-col ">
          <div className=" flex gap-[0.5rem] md:gap-10">
            <div className="flex justify-center items-center gap-4 h-20 w-20 md:w-[8.8rem] md:h-[8.8rem]  lg:h-[10.8rem] lg:w-[10.7rem]">
              <div
                className="cursor-pointer"
                onClick={() => handleDelete(props.prod_id)}
              >
                <p>x</p>
              </div>
              <img
                className=" w-full h-full"
                src={imgUrl + props.image}
                alt=""
              />
            </div>
            <div className=" text-xs md:text-sm flex justify-center items-center">
              <p>{props.prod_name}</p>
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
            <div className=" text-xs flex items-center  font-medium text-[#262626]">
              {props.stock}
            </div>
          </div>
        </div>
        <div className=" w-[35%] flex justify-center lg:justify-normal md:pl-4 lg:pl-0 items-center">
          <div className=" flex flex-col md:flex-row items-center  justify-between w-full">
            <div className=" font-bold text-xs md:text-lg flex items-center">
              <p>Rp. {props.price.toLocaleString("id-ID")}</p>
            </div>
            <div>
              <button className="btn bg-blackSec flex w-full lg:w-[7rem] xl:w-[12.5rem] h-[3.75rem] gap-3 border-none justify-center items-center hover:bg-red-500">
                <p className="text-white font-bold">Add To Cart</p>
              </button>
            </div>
          </div>
        </div>
        {isErrModal && (
          <ModalMsg
            msg={msgModal}
            isOpen={isErrModal}
            onclose={() => setErrModal(false)}
          />
        )}
      </section>
    </>
  );
}

export default Card;
