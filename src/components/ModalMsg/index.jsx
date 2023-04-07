import React from "react";

function ModalMsg({ isOpen, onclose, msg }) {
  const handleClick = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      {isOpen && (
        <div
          onClick={onclose}
          className="fixed top-0 left-0 w-screen h-screen bg-black/80 flex justify-center items-center z-50"
        >
          <div
            onClick={handleClick}
            className="w-4/5 md:w-1/3 py-10 px-6 flex flex-col bg-white"
          >
            <p className="text-3xl text-center font-bold mb-10">{msg}</p>
            <button onClick={onclose} className="btn">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalMsg;
