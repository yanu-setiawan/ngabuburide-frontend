import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import arrow from "../../assets/arrowleft.svg";
import imgProd from "../../assets/Products/big-image.png";
import imgRelate from "../../assets/Products/imgRelate.png";
// import sideImg from "../../assets/Products/Mask.png";
import rating from "../../assets/Rating.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
// import love from "../../assets/love.svg";
import delivery from "../../assets/delivery-fast.svg";
import size from "../../assets/measurement.svg";
import location from "../../assets/pin-check.svg";
import fb from "../../assets/Medsos/facebookB.svg";
import tweet from "../../assets/Medsos/twitterB.svg";
import yt from "../../assets/Medsos/youtubeB.svg";
import review1 from "../../assets/profile-review.png";
import Loader from "../../components/Loader";
import { getDetailProduct } from "../../utils/https/products";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/slices/cart";
import {
  addFavorite,
  deleteFavorite,
  getFavorite,
} from "../../utils/https/favorite";
import ModalMsg from "../../components/ModalMsg";
import { Link } from "react-router-dom";

// import { userAction } from "../../redux/slices/auth";
// import { favoriteAction } from "../../redux/slices/favorite";

function ModaltoCart({ showAdd, closeShow }) {
  useEffect(() => {
    setTimeout(() => {
      closeShow();
    }, 4000);
  });
  return (
    <div
      className={`fixed ${
        showAdd ? "top-[20%]" : "top-[-10px]"
      } transition-all left-[25%] md:left-[35%] z-[5] w-1/2 md:w-[30%] mt-auto flex bg-green-500/60 p-5 md:text-2xl justify-between text-primary shadow-lg shadow-green-500/60`}
    >
      PRODUCT ADD TO CART
      <i className="bi bi-info-circle"></i>
    </div>
  );
}

function FavoriteComponent({ prodId, loved, setLoved }) {
  const controller = useMemo(() => new AbortController(), []);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const token = userState.token;
  const [msgModal, setMsgModal] = useState("");
  const [isErrModal, setErrModal] = useState(false);
  const handleClick = async () => {
    try {
      if (loved) {
        const result = await deleteFavorite(token, prodId, controller);
        console.log(result.data.msg);
        setLoved();
        return;
      }
      if (!token) {
        setMsgModal("Please log in first");
        setErrModal(true);
        return;
      }
      const result = await addFavorite(token, prodId, controller);
      console.log(result);
      setLoved();
      // dispatch(userAction.addFavorite(prodId));
    } catch (error) {
      console.log(error);
    }
    // dispatch(favoriteAction.addFavThunk({ token, prodId }, controller))
    //   .then((result) => {
    //     console.log(result);
    //     if (result.data.length > 0) {
    //       setFav(true);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };
  // console.log(isFav);
  const redirect = () => {
    navigate("/login");
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className=" btn bg-blackSec font-bold w-[6rem] h-[3.8rem] text-2xl"
      >
        {loved ? (
          <i className="bi bi-heart-fill"></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </button>
      {isErrModal && (
        <ModalMsg
          msg={msgModal}
          isOpen={isErrModal}
          onclose={() => {
            setErrModal(false);
            redirect();
          }}
        />
      )}
    </div>
  );
}

function ProductDetails() {
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);
  const userState = useSelector((state) => state.user);
  const token = userState.token;
  const { id } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [indexImg, setIndexImg] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModaltoCart, setModaltoCart] = useState(false);
  const [qty, setQty] = useState(1);

  const [dataProduct, setDataProduct] = useState({});
  const [review, setReview] = useState(false);
  const [description, setDescription] = useState(true);

  const fetchingData = async () => {
    setLoading(true);
    // dispatch(favoriteAction.getFavThunk({ token }, controller)).then(
    //   (response) => {
    //     console.log(response);
    //   }
    // );
    try {
      const result = await getDetailProduct(id, controller);
      // console.log(result.data.data[0]);
      setDataProduct(result.data.data[0]);
      setLoading(false);
      const getFav = await getFavorite(token, controller);
      console.log(getFav.data.msg);
      const found = getFav.data.data.some(
        (obj) => obj.prod_id === parseInt(id)
      );
      console.log(found); // true/false

      setIsFavorite(found);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "RAZYR - Details Product";
    window.scrollTo(0, 0);
    fetchingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleAddtoCart = () => {
    const data = {
      qty: qty,
      size_id: 1,
      prod_id: parseInt(dataProduct.id),
      img: dataProduct.image[0],
      price: dataProduct.price,
      prodName: dataProduct.prod_name,
      subtotal: qty * dataProduct.price,
    };
    // console.log(data);
    dispatch(cartAction.addtoCard(data));
    setModaltoCart(true);
  };

  const handleQtyDecrement = () => {
    if (qty === 0) return;
    setQty(qty - 1);
  };

  // console.log(dataProduct);
  const imgUrl =
    "https://res.cloudinary.com/dhikerrnk/image/upload/v1680940221/";

  const handelDescription = () => {
    setDescription(true);
    setReview(false);
  };

  const handleReview = () => {
    setDescription(false);
    setReview(true);
  };

  return (
    <>
      <Header loved={isFavorite} />
      <ModaltoCart
        showAdd={isModaltoCart}
        closeShow={() => setModaltoCart(false)}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <main className=" mb-48">
          <section className=" flex gap-4 font-bold py-10 px-[1rem] md:px-8 lg:px-20">
            <p>Shop</p>
            <img src={arrow} alt="" />
            <Link to={"/product"}>
              <p>Shop Right Sidebar</p>
            </Link>
            <img src={arrow} alt="" />
            <p>Product</p>
          </section>

          <section className=" flex flex-col px-[2rem] lg:px-[5.3rem] xl:px-[8.75rem]">
            <section className=" flex flex-col-reverse lg:flex-row gap-[1.75rem] lg:gap-8 mb-[8.5rem]">
              <section className=" flex  lg:flex-col justify-center lg:justify-normal gap-[1rem] md:gap-11 lg:gap-5 ">
                {/* <div className=" flex w-14 h-14 md:w-24 md:h-24 lg:w-[6.75rem] lg:h-[6.75rem]  xl:w-[8.75rem] xl:h-[8.375rem]">
                  <img src={sideImg} alt="" />
                </div>
                <div className=" flex w-14 h-14 md:w-24 md:h-24 lg:w-[6.75rem] lg:h-[6.75rem]  xl:w-[8.75rem] xl:h-[8.375rem]">
                  <img src={sideImg} alt="" />
                </div>{" "}
                <div className=" flex w-14 h-14 md:w-24 md:h-24 lg:w-[6.75rem] lg:h-[6.75rem]  xl:w-[8.75rem] xl:h-[8.375rem]">
                  <img src={sideImg} alt="" />
                </div>{" "}
                <div className=" flex w-14 h-14 md:w-24 md:h-24 lg:w-[6.75rem] lg:h-[6.75rem]  xl:w-[8.75rem] xl:h-[8.375rem]">
                  <img src={sideImg} alt="" />
                </div>{" "} */}
                {dataProduct.image.map((img, idx) => (
                  <div
                    onClick={() => setIndexImg(idx)}
                    className=" flex w-14 h-14 md:w-24 md:h-24 lg:w-[6.75rem] lg:h-[6.75rem]  xl:w-[8.75rem] xl:h-[8.375rem] cursor-pointer"
                  >
                    <img
                      src={imgUrl + img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </section>
              <section className=" flex  justify-center">
                <div className=" lg:w-[43.875rem] xl:w-[61.875rem] h-[50.313rem]">
                  <img
                    src={imgUrl + dataProduct.image[indexImg]}
                    alt=""
                    className=" w-full h-full object-cover"
                  />
                </div>
              </section>
            </section>
            <section className=" flex flex-col">
              <div className=" flex">
                <h1 className=" text-[2rem]">{dataProduct.prod_name}</h1>
              </div>
              <div className=" flex mt-8 flex-col">
                <div className=" flex items-center gap-2 mb-5">
                  <div className="">
                    <img src={rating} alt="" />
                  </div>
                  <div>
                    <p>(2) reviews</p>
                  </div>
                </div>
                <div className=" flex gap-8 lg:gap-64 items-center mb-10">
                  <div className=" font-bold text-[1.5rem] md:text-4xl">
                    Rp. {dataProduct.price.toLocaleString("id-ID")}
                  </div>
                  <div className=" text-sm">19 Sold / 40 In Stock</div>
                </div>
                <div className=" flex leading-9 mb-10  ">
                  <p>{dataProduct.description}</p>
                </div>
                <div className=" flex flex-col md:flex-row gap-3 mb-10">
                  <div className=" flex gap-3">
                    <div className=" flex justify-center items-center border border-greyBord w-[6.875rem] h-[3.8rem] gap-4">
                      <div
                        onClick={handleQtyDecrement}
                        className=" cursor-pointer"
                      >
                        <img src={minus} alt="" width="12px" height="12px" />
                      </div>
                      <div className="font-bold text-base">{qty}</div>
                      <div
                        onClick={() => setQty(qty + 1)}
                        className=" cursor-pointer"
                      >
                        <img src={plus} alt="" width="12px" height="12px" />
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={handleAddtoCart}
                        className="btn w-[9.375rem] h-[3.8rem] bg-blackSec font-bold "
                      >
                        Add To Cart
                      </button>
                    </div>
                    <FavoriteComponent
                      prodId={id}
                      loved={isFavorite}
                      setLoved={() => setIsFavorite(!isFavorite)}
                    />
                    {/* <div>
                      <button className=" btn bg-blackSec font-bold w-[6rem] h-[3.8rem]">
                        <img src={love} alt="" />
                      </button>
                    </div> */}
                  </div>
                </div>
                <div className=" text-xs leading-7">
                  <p>
                    SKU: N/A <br /> Categories: Furniture, Interior, Chair{" "}
                    <br />
                    Tag: Furniture, Chair, Scandinavian, <br /> Modern Product
                    ID: 274
                  </p>
                </div>
                <div className=" flex mt-11 gap-[2rem]">
                  <div className=" flex gap-3 justify-center items-center">
                    <div className=" w-5 h-5 font-bold flex justify-center items-center">
                      <img src={delivery} alt="" />
                    </div>
                    <div className=" text-xs font-medium">
                      <p>Delivery and Return</p>
                    </div>
                  </div>
                  <div className=" flex gap-3 justify-center items-cente">
                    <div className=" w-5 h-5 font-bold flex justify-center items-center">
                      <img src={size} alt="" />
                    </div>
                    <div className=" text-xs font-medium">
                      <p>Size Guide</p>
                    </div>
                  </div>
                  <div className=" flex gap-3 justify-center items-cente">
                    <div className=" w-5 h-5 font-bold flex justify-center items-center">
                      <img src={location} alt="" />
                    </div>
                    <div className=" text-xs font-medium">
                      <p>Store Location</p>
                    </div>
                  </div>
                </div>
                <div className=" mt-11 flex">
                  <div className="flex gap-[1.5rem]">
                    <div className=" border rounded-full border-greyBord h-[2.813rem] w-[2.813rem] p-1 flex items-center justify-center cursor-pointer ">
                      <img src={fb} alt="fb" />
                    </div>
                    <div className=" border rounded-full border-greyBord h-[2.813rem] w-[2.813rem] p-1 flex items-center justify-center cursor-pointer">
                      <img src={tweet} alt="fb" />
                    </div>
                    <div className=" border rounded-full border-greyBord h-[2.813rem] w-[2.813rem] p-1 flex items-center justify-center  cursor-pointer">
                      <img src={yt} alt="fb" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className=" flex mt-[3rem] lg:mt-32 mb-[4.5rem]">
              <ul className=" flex text-[11px] gap-5 md:text-sm md:gap-11 lg:gap-14 xl:gap-[4.4rem] font-bold lg:text-[1.1rem] xl:text-[1.6rem] py-4 ">
                <li
                  className={
                    description
                      ? "border-b-[5px] border-blackSec pb-4 w-max cursor-pointer select-none"
                      : "pb-4 w-max cursor-pointer select-none"
                  }
                  onClick={handelDescription}
                >
                  Description
                </li>
                <li
                  className={
                    review
                      ? "border-b-[5px] border-blackSec pb-4 w-max cursor-pointer select-none"
                      : "pb-4 w-max cursor-pointer select-none"
                  }
                  onClick={handleReview}
                >
                  Review
                </li>
                <li className=" pb-4 md:w-max cursor-pointer select-none">
                  Additional Information
                </li>
                <li className=" pb-4 md:w-max cursor-pointer select-none">
                  About Brand
                </li>
                <li className=" pb-4 md:w-max cursor-pointer select-none">
                  Shipping & Delivery
                </li>
              </ul>
            </section>
            {description && (
              <section className=" flex w-full flex-col lg:flex-row lg:gap-[3.8rem]">
                <div className=" lg:w-[50%]">
                  <img src={imgProd} alt="" />
                </div>
                <div className=" lg:w-[50%] flex flex-col gap-10 ">
                  <div className=" text-sm text-greySec">
                    <p>
                      Donec accumsan auctor iaculis. Sed suscipit arcu ligula,
                      at egestas magna molestie a. Proin ac ex maximus, ultrices
                      justo eget, sodales orci. Aliquam egestas libero ac turpis
                      pharetra, in vehicula lacus scelerisque. Vestibulum ut sem
                      laoreet, feugiat tellus at, hendrerit arcu..
                    </p>
                  </div>
                  <div className="">
                    <ol className=" text-sm leading-6 flex flex-col gap-5">
                      <li>
                        Maecenas eu ante a elit tempus fermentum. Aliquam
                        commodo tincidunt semper
                      </li>
                      <li>
                        Maecenas eu ante a elit tempus fermentum. Aliquam
                        commodo tincidunt semper
                      </li>
                    </ol>
                  </div>
                  <div className=" leading-6 text-sm text-greySec mt-2">
                    <p>
                      Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi.
                      Maecenas eu ante a elit tempus fermentum. Aliquam
                      commodoMaecenas eu ante a elit tempus fermentum. Aliquam
                      commodo tincidunt semper tincidunt semper. Phasellus accum
                      Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                      tincidunt semper
                    </p>
                  </div>
                </div>
              </section>
            )}
            {review && (
              <section className="w-full lg:pl-52  lg:w-[64rem]">
                <div className="w-full flex flex-col gap-10 border-b-2 pb-10 mb-10">
                  <div className="lg:w-[42rem] flex gap-10 items-center">
                    <div className="lg:w-[15rem] lg:h-[7rem] rounded-full bg-slate-400">
                      <img
                        src={review1}
                        alt="review"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p>
                        “Theme is very flexible and easy to use. Perfect for us.
                        Customer support has been excellent and answered every
                        question we've thrown at them with 12 hours.”
                      </p>
                      <div className="flex mt-8 gap-4 items-center  ">
                        <p className="text-xs text-[#989898]">
                          35 mins ago, 15 November 2019
                        </p>
                        <p>Reply</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:ml-32 lg:ml-40 w-[42-rem] flex  gap-10 items-center">
                    <div className="lg:w-[15rem] lg:h-[7rem] rounded-full bg-slate-400">
                      <img
                        src={review1}
                        alt="review"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p>
                        “Theme is very flexible and easy to use. Perfect for us.
                        Customer support has been excellent and answered every
                        question we've thrown at them with 12 hours.”
                      </p>
                      <div className="flex mt-8 gap-4 items-center  ">
                        <p className="text-xs text-[#989898]">
                          35 mins ago, 15 November 2019
                        </p>
                        <p>Reply</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-10 border-b-2 pb-10 mb-10">
                  <div className="lg:w-[42rem] flex gap-10 items-center">
                    <div className="lg:w-[15rem] lg:h-[7rem] rounded-full bg-slate-400">
                      <img
                        src={review1}
                        alt="review"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p>
                        “Theme is very flexible and easy to use. Perfect for us.
                        Customer support has been excellent and answered every
                        question we've thrown at them with 12 hours.”
                      </p>
                      <div className="flex mt-8 gap-4 items-center  ">
                        <p className="text-xs text-[#989898]">
                          35 mins ago, 15 November 2019
                        </p>
                        <p>Reply</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-10 border-b-2 pb-10 mb-10">
                  <div className="lg:w-[42rem] flex gap-10 items-center">
                    <div className="lg:w-[15rem] lg:h-[7rem] rounded-full bg-slate-400">
                      <img
                        src={review1}
                        alt="review"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p>
                        “Theme is very flexible and easy to use. Perfect for us.
                        Customer support has been excellent and answered every
                        question we've thrown at them with 12 hours.”
                      </p>
                      <div className="flex mt-8 gap-4 items-center  ">
                        <p className="text-xs text-[#989898]">
                          35 mins ago, 15 November 2019
                        </p>
                        <p>Reply</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            <section className=" mt-20">
              <h1 className=" text-[2rem] md:text-5xl text-center flex justify-center items-center">
                Related Products
              </h1>
            </section>
            <section className=" flex overflow-scroll gap-10  overflow-y-hidden mt-20 w-full pb-14">
              <section className=" flex ">
                <div className=" flex flex-col gap-2">
                  <div className=" w-[17.5rem] h-[23.125rem]">
                    <img src={imgRelate} alt="" />
                  </div>
                  <div className=" text-2xl">
                    <p>Coaster 506222-CO Loveseat</p>
                  </div>
                  <div className=" font-extrabold text-lg">
                    <p>Rp.2.000.000</p>
                  </div>
                </div>
              </section>
              <section className=" flex ">
                <div className=" flex flex-col gap-2">
                  <div className=" w-[17.5rem] h-[23.125rem]">
                    <img src={imgRelate} alt="" />
                  </div>
                  <div className=" text-2xl">
                    <p>Coaster 506222-CO Loveseat</p>
                  </div>
                  <div className=" font-extrabold text-lg">
                    <p>Rp.2.000.000</p>
                  </div>
                </div>
              </section>
              <section className=" flex ">
                <div className=" flex flex-col gap-2">
                  <div className=" w-[17.5rem] h-[23.125rem]">
                    <img src={imgRelate} alt="" />
                  </div>
                  <div className=" text-2xl">
                    <p>Coaster 506222-CO Loveseat</p>
                  </div>
                  <div className=" font-extrabold text-lg">
                    <p>Rp.2.000.000</p>
                  </div>
                </div>
              </section>
              <section className=" flex ">
                <div className=" flex flex-col gap-2">
                  <div className=" w-[17.5rem] h-[23.125rem]">
                    <img src={imgRelate} alt="" />
                  </div>
                  <div className=" text-2xl">
                    <p>Coaster 506222-CO Loveseat</p>
                  </div>
                  <div className=" font-extrabold text-lg">
                    <p>Rp.2.000.000</p>
                  </div>
                </div>
              </section>
              <section className=" flex ">
                <div className=" flex flex-col gap-2">
                  <div className=" w-[17.5rem] h-[23.125rem]">
                    <img src={imgRelate} alt="" />
                  </div>
                  <div className=" text-2xl">
                    <p>Coaster 506222-CO Loveseat</p>
                  </div>
                  <div className=" font-extrabold text-lg">
                    <p>Rp.2.000.000</p>
                  </div>
                </div>
              </section>
              <section className=" flex ">
                <div className=" flex flex-col gap-2">
                  <div className=" w-[17.5rem] h-[23.125rem]">
                    <img src={imgRelate} alt="" />
                  </div>
                  <div className=" text-2xl">
                    <p>Coaster 506222-CO Loveseat</p>
                  </div>
                  <div className=" font-extrabold text-lg">
                    <p>Rp.2.000.000</p>
                  </div>
                </div>
              </section>
            </section>
            <section className=" flex gap-3 mt-20 justify-center items-center">
              <div className=" bg-black border-2  w-5 h-5 rounded-full"></div>
              <div className="  border-2 border-greyBord w-5 h-5 rounded-full"></div>
              <div className="  border-2 border-greyBord w-5 h-5 rounded-full"></div>
            </section>
          </section>
        </main>
      )}
      <Footer />
    </>
  );
}

export default ProductDetails;
