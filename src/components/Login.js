import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background Image"
        />
        <div className="absolute h-[70%] bg-black w-4/12 top-[15%] left-[33%] rounded bg-opacity-70">
          <div className="flex flex-col justify-center items-start mt-8 m-12">
            <h1 className="text-[#fff] text-3xl mb-7">Sign In</h1>
            <form className="flex flex-col flex-wrap grow shrink gap-8  w-full">
              <input
                type="text"
                placeholder="Email or phone number"
                className="h-10 bg-neutral-400 placeholder-gray-600 p-4 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="h-10 bg-neutral-400 placeholder-gray-600 p-4 rounded"
              />
              <button
                className="bg-red-600 text-[#fff] h-10 rounded"
                type="submit"
                aria-autocomplete="false"
              >
                Sign In
              </button>
              <div className="flex">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  value="remember"
                  className="w-5"
                />
                <label
                  for="remember"
                  className="text-slate-300 ml-2 font-light"
                >
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-slate-300 font-light ml-auto hover:underline"
                >
                  Need Help?
                </a>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
