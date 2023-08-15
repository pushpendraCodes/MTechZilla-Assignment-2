import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Loader = () => {
  return (
    <div>
      <div className="w-40 h-9 p-3 flex  space-x-10 items-center rounded-sm bg-white ">
        <ClipLoader size={25} color="#36d7b7" />
        <p className="text-sm">loading...</p>
      </div>
    </div>
  );
};

export default Loader;
