import React, { useEffect, useMemo, useState } from "react";
import arrow from "../../assets/icon-arrow-right.svg";
import { useSelector } from "react-redux";
import { createTransaction } from "../../utils/https/transactions";
import Loader from "../../components/Loader";

function CartPayment(props) {
  const controller = useMemo(() => new AbortController(), []);
  const userState = useSelector((state) => state.user.data);

  const [isLoading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: userState.display_name || "",
    address: userState.address || "",
    phone: userState.phone.slice(1, userState.phone.length) || "",
    payment_id: 0,
  });

  const onChangeForm = (event) => {
    setForm((form) => {
      return {
        ...form,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleCheckout = async (event) => {
    event.preventDefault();
    // const dataCheckout = { ...form, ...props.data };
    const dataCheckout = {
      ...props.data,
      payment_id: parseInt(form.payment_id),
    };
    console.log(dataCheckout);
    setLoading(true);
    try {
      const result = await createTransaction(dataCheckout, controller);
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "RAZYR - Checkout";
  });
  // console.log(userState);
  return (
    <main>
      <section className="relative">
        <div className="absolute flex gap-4 px-20 pt-10 z-10">
          <p onClick={props.onClose} className="cursor-pointer">
            Checkout
          </p>
          <img src={arrow} alt="icon-arrow" />
        </div>
        <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
        <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
          <h1 className=" text-[3.5rem] text-blackSec">Check Out</h1>
          <p className=" text-[1rem] text-blackSec">
            Pay and get your ordered items
          </p>
        </div>
      </section>
      <section className="grid place-items-center">
        <div className="isForm flex flex-col pb-[10rem] ">
          <h1 className=" text-[2rem] flex justify-center lg:justify-start">
            Self Information
          </h1>
          {isLoading ? (
            <Loader />
          ) : (
            <form className=" w-full justify-center flex flex-col gap-3">
              <label htmlFor="name" className="flex justify-center mt-11">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChangeForm}
                  className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                  placeholder="Your Name *"
                />
              </label>
              <label htmlFor="address" className="flex justify-center">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={onChangeForm}
                  className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 p-5"
                  placeholder="Address*"
                />
              </label>
              <div className="relative">
                <label htmlFor="phone" className="flex justify-center">
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={onChangeForm}
                    className=" w-[75%] lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] pl-32 p-5"
                    placeholder="Phone Number*"
                  />
                </label>
                <div className="absolute  top-1 left-8 lg:left-0 border-r-2 lg:pr-4">
                  <select
                    id="region"
                    name="region"
                    class="h-16 w-fit border-0 bg-transparent pl-4 pr-7 lg:pl-0 lg:pr-2 outline-none "
                  >
                    <option>+62</option>
                    <option>+63</option>
                    <option>+64</option>
                    <option>+65</option>
                  </select>
                </div>
              </div>

              <select
                className="select mt-5 self-center w-3/4 lg:w-[30rem] xl:w-[35rem] lg:h-[4.39rem] text-blackSec placeholder:text-greySec h-[4.4rem] border border-[#CECECE] placeholder:p-5 px-5"
                name="payment_id"
                onChange={onChangeForm}
              >
                <option disabled selected>
                  Change Payment Method
                </option>
                <option value="1">BCA</option>
                <option value="2">BNI</option>
                <option value="3">BRI</option>
              </select>

              <div className="flex w-[75%] lg:w-[30rem] xl:w-[35rem] mx-auto flex-col mt-3">
                <button
                  type="submit"
                  onClick={handleCheckout}
                  disabled={
                    form.name === "" ||
                    form.address === "" ||
                    form.phone === "" ||
                    form.payment_id === 0
                  }
                  className="btn bg-blackSec w-32 h-14 text-white"
                >
                  Check Out
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default CartPayment;
