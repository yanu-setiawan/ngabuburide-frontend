import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CommingSoon() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2023-04-12T00:00:00Z"); // Set your target date and time here
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="px-4 py-20 md:px-10 md:py-24 lg:px-24 lg:py-36 bg-blackSec text-white">
          <div>
            <h1 className="font-bold text-5xl lg:text-7xl">
              We’re Building <br /> Something New
            </h1>

            <div className="flex gap-10 mt-16">
              <div className="flex flex-col items-center gap-4">
                <p className="text-5xl">{days.toString().padStart(2, "0")}</p>
                <p>Days</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-5xl">{hours.toString().padStart(2, "0")}</p>
                <p>Hours</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-5xl">
                  {minutes.toString().padStart(2, "0")}
                </p>
                <p>Mins</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-5xl">
                  {seconds.toString().padStart(2, "0")}
                </p>
                <p>Secs</p>
              </div>
            </div>

            <div className=" border-b-2 md:w-[34rem] relative mt-10">
              <input
                type="email"
                className="bg-blackSec text-white outline-none w-full"
                placeholder="Your Email"
              />
              <label htmlFor="" className="absolute right-0">
                Subscribe
              </label>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CommingSoon;
