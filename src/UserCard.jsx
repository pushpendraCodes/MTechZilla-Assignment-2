import React, { useState } from "react";
import repo from "../src/assets/repository.png";
import gist from "../src/assets/documentation.png";
import github from "../src/assets/resource.png";
import profile from "../src/assets/profile.png";
import axios from "axios";
import Loader from "./Loader";

const UserCard = () => {
  const [userName, setuserName] = useState();
  const [user, setuser] = useState();
  const [loading, setloading] = useState(false);

  // submit handel
  const handelSubmit = async (e) => {
    e.preventDefault()
    if (userName) {
      setloading(true);
      const res = await axios.get(`https://api.github.com/users/${userName}`);
      setuser(res.data);
      console.log(res);
      setloading(false);
    } else {
      alert("username is required");
    }
  };

  // date formate

  const dateFormate = (originalDateString) => {
    const originalDate = new Date(originalDateString).toLocaleDateString(
      "fr-CA"
    );
    // console.log(originalDate);
    return originalDate;
  };

  return (
    <div>
      <div className=" flex justify-center gap-16 flex-col items-center p-20 ">
      <form onSubmit={(e)=>handelSubmit(e)} >
        <div className="flex justify-between">

          <input
            placeholder="username"
            className="px-5 py-2 rounded-md focus:outline-none border-2  border-solid border-violet-900 "
            type="text"
            name="username"
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />

          <button

            type="submit"
            className="bg-[#3c306c] hover:bg-[#2f284d] mx-5 text-white font-medium px-5 py-2 rounded-lg"
          >
            Submit
          </button>

        </div></form>
        {/* loader */}
        {loading && <Loader />}

        {/* card */}

        {user && (
          <div className="card-container  ">
            <div className="card  flex flex-col  w-80 h-96 bg-[#2f284d] rounded-xl">
              <img
                class="mx-auto w-24 h-24 object-cover rounded-full"
                src={user?.avatar_url}
                alt="user"
              />
              <h3 className="text-xl font-semibold mt-3">{user?.name}</h3>
              <h6 className="text-sm text-gray-400">{user?.login}</h6>

              <div className="flex justify-between items-center gap-3 mt-5 p-5">
                <div className="flex flex-col items-center">
                  <img className="w-10 h-9 rounded-full" src={repo} alt="" />
                  <div className="mt-4">
                    <h2 className="text-sm font-bold">{user?.public_repos}</h2>
                    <p className="text-xs">public repos</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img className="w-10 h-9 rounded-full" src={gist} alt="" />
                  <div className="mt-4">
                    <h2 className="text-sm font-bold">{user?.public_gists}</h2>
                    <p className="text-xs">public gists</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img className="w-10 h-9 rounded-full" src={profile} alt="" />
                  <div className="mt-4">
                    <h2 className="text-xs font-bold">
                      {dateFormate(user?.created_at)}
                    </h2>
                    <p className="text-xs ">Profile created at</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
