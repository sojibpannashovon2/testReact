import { FaUserShield } from "react-icons/fa";
import Login from "../../Component/Login";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ------- Top Logo ------- */}
      <div className="py-10 text-center">
        <div className="text-5xl font-bold flex justify-center items-center gap-3">
          <FaUserShield className="text-[#7BC743]" />
          <span>
            ZK<span className="text-[#7BC743]">Bio</span> Time
          </span>
        </div>
      </div>

      {/* ------- Green Login Section ------- */}
      <div className="bg-[#7BC743] py-12 w-full">
        {/* Login Box */}
        <div className="max-w-xl mx-auto bg-transparent px-6">
          {/* Admin / Self-Service Switch */}
          {/* <div className="flex justify-center gap-4 text-white mb-6">
            <span className="font-semibold border-b-2 border-white pb-1 cursor-pointer">
              Admin Login
            </span>
            <span className="opacity-80 cursor-pointer">Self-Service</span>
          </div> */}

          {/* Login Form Component */}
          <Login />
        </div>
      </div>

      {/* ------- Footer ------- */}
      <div className="text-center mt-10 mb-2">
        <div className="text-4xl font-bold">
          ZK<span className="text-[#7BC743]">T</span>
          <span className="text-3xl text-[#7BC743]">ECO</span>
        </div>

        <div className="text-gray-700 text-sm mt-2">
          Copyright © 2025 ZKTECO CO., LTD. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Home;
