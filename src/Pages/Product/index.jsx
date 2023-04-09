import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import withSearchParams from "../../utils/wrapper/withSearchParams";
import Card from "./card";
import { getDataProducts, getMetaCategories } from "../../utils/https/products";
import Loader from "../../components/Loader";
import arrow from "../../assets/icon-arrow-right.svg";
import { useSelector } from "react-redux";
// import { searchAction } from "../../redux/slices/search";

function DataNotFound() {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center text-4xl md:text-6xl font-bold text-center">
      DATA NOT FOUND
    </div>
  );
}
function CategoriesContent(props) {
  const handleClick = () => {
    const paramsName = props.name.toLowerCase();
    props.onClick(paramsName);
  };
  return (
    <div
      onClick={handleClick}
      className="w-full flex justify-between cursor-pointer"
    >
      <p className={props.dataPar === props.name.toLowerCase() && "font-bold"}>
        {props.name}
      </p>
      <p>{props.count}</p>
    </div>
  );
}

function Product(props) {
  const controller = useMemo(() => new AbortController(), []);
  const searchState = useSelector((state) => state.search);

  const [isLoading, setLoading] = useState(true);

  const [dataParams, setDataParams] = useState({
    brand: "",
    color: "",
    price: "",
    order: "",
    categories: "",
    keyword: searchState.search,
    page: "",
    limit: "",
  });
  const [metaData, setMetaData] = useState({
    total: 0,
  });
  const [dataProducts, setDataProducts] = useState([]);
  const [countCategory, setCountCategory] = useState([]);
  const [rangePrice, setRangePrice] = useState(0);

  const handleCategoryParams = (info) => {
    setDataParams({
      ...dataParams,
      categories: dataParams.categories === info ? "" : info,
    });
  };
  const handleRangeParams = (event) => {
    // console.log(event.target.value);
    setRangePrice(event.target.value);
    // setDataParams({ ...dataParams, price: event.target.value });
  };
  const handleSubmitRange = () => {
    const checking = parseInt(dataParams.price) / 1000000;
    const newPriceParams = parseInt(rangePrice) * 1000000;
    console.log(rangePrice, checking);
    setDataParams({
      ...dataParams,
      price: parseInt(rangePrice) === checking ? "" : `0-${newPriceParams}`,
    });
    if (parseInt(rangePrice) === checking) {
      setRangePrice(0);
    }
  };
  const handleColor = (info) => {
    setDataParams({
      ...dataParams,
      color: dataParams.color === info ? "" : info,
    });
  };

  const fetchingData = async () => {
    setLoading(true);
    const newPar = new URLSearchParams(dataParams);
    try {
      const result = await getDataProducts(newPar, controller);
      // console.log(result.data);
      setMetaData({ ...metaData, total: result.data.totalData });
      setDataProducts(result.data.data);
      setLoading(false);
      // dispatch(searchAction.resetSearch());
    } catch (error) {
      console.log(error);
    }
  };

  const fetchingMetaCategories = async () => {
    setLoading(true);
    try {
      const result = await getMetaCategories(controller);
      // console.log(result.data);
      setCountCategory(result.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      document.title = "RAZYR - Products";
      window.scrollTo(0, 0);
      const queryParams = new URLSearchParams(dataParams);
      props.setSearchParams(Object.fromEntries(queryParams));
      fetchingData();
      fetchingMetaCategories();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dataParams, searchState.search]
  );

  // console.log(countCategory);
  console.log(dataParams);
  console.log(searchState.search);
  return (
    <>
      <Header />
      <main className="">
        <section className="relative">
          <div className="absolute flex gap-4 px-20 pt-10">
            <p>Shop</p>
            <img src={arrow} alt="icon-arrow" />
            <p>Shop Right Sidebar</p>
          </div>
          <div className=" hero-login w-full h-[15.6rem] opacity-20 flex justify-center items-center "></div>
          <div className=" absolute flex justify-center items-center text-center flex-col top-16 w-full ">
            <h1 className=" text-[3.5rem] text-blackSec">Let’s Shopping</h1>
            <p className=" text-[1rem] text-blackSec">
              Find and buy the one you like
            </p>
          </div>
        </section>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <section className="w-full h-full flex flex-col md:flex-row justify-center gap-12 lg:px-20 lg:py-16 ">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 ">
                  <h1 className="font-bold text-2xl mb-4">Categories</h1>
                  {countCategory.map((cat) => (
                    <CategoriesContent
                      key={cat.category_name}
                      dataPar={dataParams.categories}
                      onClick={handleCategoryParams}
                      name={cat.category_name}
                      count={cat.totaldata}
                    />
                  ))}
                  <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-2xl">Price</h1>
                    <div>
                      <div>
                        price Rp. 0 - Rp.{" "}
                        {(rangePrice * 1000000).toLocaleString("id-ID")}
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={rangePrice}
                      onChange={handleRangeParams}
                      className="range range-xs"
                    />
                    <button onClick={handleSubmitRange} className="btn w-fit">
                      {parseInt(rangePrice) ===
                      parseInt(dataParams.price) / 1000000
                        ? "RESET"
                        : "FILTER"}
                    </button>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-2xl">Brands</h1>
                  </div>

                  <div>
                    <h1 className="font-bold text-2xl">Color</h1>
                    <div>
                      <div class="flex gap-5 items-center mr-4">
                        <span
                          onClick={() => handleColor("brown")}
                          className="bg-amber-800 w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "brown" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                        <span
                          onClick={() => handleColor("blue")}
                          className="bg-blue-800 w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "blue" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                        <span
                          onClick={() => handleColor("grey")}
                          className="bg-slate-800 w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "grey" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                        <span
                          onClick={() => handleColor("green")}
                          className="bg-green-800 w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "green" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                        <span
                          onClick={() => handleColor("orange")}
                          className="bg-orange-600 w-5 h-5 rounded-full cursor-pointer flex justify-center items-center"
                        >
                          {dataParams.color === "orange" && (
                            <i className="bi bi-check text-white text-lg"></i>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h1>Size</h1>
                    <div></div>
                  </div>

                  <div>image</div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-10">
                  <p>
                    Showing 1-{metaData.total} of {metaData.total} Results
                  </p>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost m-1">
                      Short By
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-blackSec text-white rounded-box w-52"
                    >
                      <button className="btn">Latest Product</button>
                      <button className="btn">More Expensive</button>
                      <button className="btn">More Cheap</button>
                    </ul>
                  </div>
                </div>
                {dataProducts.length < 1 ? (
                  <DataNotFound />
                ) : (
                  <>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-between">
                      {dataProducts.map((product) => (
                        <Card
                          key={product.id}
                          id={product.id}
                          prodName={product.prod_name}
                          img={product.image[0]}
                          price={product.price}
                          category={product.category_name}
                        />
                      ))}
                    </div>
                    {/* <div className="mt-8">
                      <div className="btn-group">
                        <button className="btn btn-sm">1</button>
                        <button className="btn btn-sm btn-active">2</button>
                        <button className="btn btn-sm">3</button>
                        <button className="btn btn-sm">4</button>
                      </div>
                    </div> */}
                    <section className=" flex gap-3 mt-[6.5rem] mb-24">
                      <div className=" w-12 h-12 bg-blackSec text-white flex justify-center items-center text-center border border-[#D1D1D1]">
                        01
                      </div>
                      <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
                        02
                      </div>
                      <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
                        03
                      </div>
                      <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
                        04
                      </div>
                      <div className=" w-12 h-12  text-blackSec flex justify-center items-center text-center border border-[#D1D1D1]">
                        05
                      </div>
                    </section>
                  </>
                )}
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default withSearchParams(Product);
