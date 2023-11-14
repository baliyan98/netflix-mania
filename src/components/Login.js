import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const toggleSignInAndSignUp = () => setSignUp(!signUp);
  return (
    <div className="h-full bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg)] bg-no-repeat bg-cover bg-center bg-fixed">
      <Header />
      <div className="h-full flex justify-center items-center">
        {/* <img
          className="h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background Image"
        /> */}
        <div className="h-[35rem] bg-black w-[35rem] rounded bg-opacity-80">
          <div className="m-12 flex flex-col gap-8">
            <div className="flex flex-col justify-center items-start mt-4">
              <h1 className="text-white text-3xl mb-7">
                {signUp ? "Sign Up" : "Sign In"}{" "}
              </h1>
              <form className="flex flex-col flex-wrap grow shrink gap-8  w-full">
                {signUp && (
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-10 bg-neutral-400 placeholder-gray-600 p-4 rounded"
                  />
                )}
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
                  className="bg-red-600 text-white h-10 rounded"
                  type="submit"
                  aria-autocomplete="false"
                >
                  {signUp ? "Sign Up" : "Sign In"}
                </button>
                <div className="flex text-sm">
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
            <div className="flex flex-col gap-6">
              <div className="text-zinc-500 text-base font-normal">
                {signUp ? "Already a user?" : "New to Netflix?"}
                <a
                  className="ml-2 text-white hover:underline"
                  href="#"
                  onClick={toggleSignInAndSignUp}
                >
                  {signUp ? "Sign In now." : "Sign up now."}
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.<br></br>
                  <button className="mt-4 text-blue-500 hover:underline">
                    Learn more.
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
