import { FaBoreHole } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { Form } from "react-router";

function Login() {
  return (
    <Form className="bg-[#7bc743] min-h-screen pt-24 pb-10 px-4">
      {/* Top Switch */}
      <div className="flex justify-between max-w-xl mx-auto mb-6 text-white">
        {/* Admin / Self Service */}
        <div className="flex gap-3 text-base sm:text-lg font-medium">
          <span className="border-b border-white pb-1 cursor-pointer">
            Admin Login
          </span>
          <span className="opacity-80 cursor-pointer">Self Service</span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-xl">
          <FaBoreHole className="text-white" />
          <IoEarthOutline className="text-white" />
        </div>
      </div>

      {/* Login Form */}
      <div className="max-w-xl mx-auto flex flex-col gap-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-white border border-gray-300"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-md bg-white border border-gray-300"
        />

        {/* Checkbox */}
        <label className="flex items-start gap-2 text-sm text-white">
          <input type="checkbox" className="mt-1" />
          <span>
            I agree to the{" "}
            <span className="underline">
              Personal Information Protection and Privacy Policy
            </span>
          </span>
        </label>

        {/* Submit Button */}
        <input
          type="submit"
          value="Login"
          className="w-full bg-black text-white p-3 rounded-md cursor-pointer font-semibold hover:bg-gray-900 transition"
        />
      </div>
    </Form>
  );
}

export default Login;
