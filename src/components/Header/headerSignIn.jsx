import React from "react";
import { Link } from "react-router-dom";

function HeaderSignIn() {
  return (
    <>
      <div className="hidden lg:flex flex-col justify-center gap-10 absolute w-[18.75rem] h-[18.313rem] bg-[#1A1A1A] z-20 translate-y-[13.2rem] text-[#919191] px-10">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/notification">
          <div className="flex justify-between items-center active:text-white">
            Notification
            <div className="w-4 h-4 rounded-full bg-[#D94141]"></div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HeaderSignIn;
