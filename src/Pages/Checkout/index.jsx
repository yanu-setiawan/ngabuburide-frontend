import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import arrow from "../../assets/icon-arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../utils/https/transactions";
import Loader from "../../components/Loader";
import { cartAction } from "../../redux/slices/cart";
import ModalMsg from "../../components/ModalMsg";
import { Link } from "react-router-dom";

function NothingCart() {
  return (
    <>
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-cart w-full px-[30%]"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <h1 className="text-center my-5 text-6xl px-10 md:px-[20%]">
          Nothing Products on Your Cart
        </h1>
      </div>
    </>
  );
}

function Checkout() {
  const controller = useMemo(() => new AbortController(), []);
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState();

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
    if (cartState.shoppingCart.length === 0) {
    }
    const dataShoppingCart = cartState.shoppingCart.map((item) => {
      const { img, prodName, subtotal, price, ...newItem } = item;
      return newItem;
    });
    const dataCheckout = {
      user_id: useState.id,
      promo_id: 1,
      notes: "-",
      status_id: 1,
      payment_id: parseInt(form.payment_id),
      product: [...dataShoppingCart],
    };
    console.log(dataCheckout);
    setLoading(true);
    try {
      const result = await createTransaction(dataCheckout, controller);
      console.log(result);
      setLoading(false);
      dispatch(cartAction.resetCart());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "RAZYR - Checkout";
  }, []);
  console.log(cartState.shoppingCart.length);
  return (
    <>
      <Header />
      <ModalMsg isOpen={showModal} />
      <main>
        <section className="relative">
          <div className="absolute flex gap-4 px-20 pt-10 z-10">
            <Link to={"/cart"} className="cursor-pointer">
              Cart
            </Link>
            <img src={arrow} alt="icon-arrow" />
            <p>Checkout</p>
          </div>
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Check Out</h1>
            <p className=" text-[1rem] text-blackSec">
              Pay and get your ordered items
            </p>
          </div>
        </section>
        {cartState.shoppingCart.length === 0 ? (
          <NothingCart />
        ) : (
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
        )}
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
