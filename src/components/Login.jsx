import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSignin = () => {
    setIsSignUp(!isSignUp);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message,email.current.value,password.current.value)
    setErrMsg(message);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://res.cloudinary.com/dtgn3hnzh/image/upload/v1777804288/netflix_bg1_xxb73j.jpg"
          alt="bg"
          className="select-none pointer-events-none  h-screen object-cover object-center w-screen"
        />
      </div>
      <form
        action="submit"
        onSubmit={(e) => e.preventDefault()}
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[30%] md:w-1/2 w-[80%] bg-black/60 backdrop-blur-[3px] text-white p-12"
      >
        <h2 className="font-bold text-3xl pb-4">
          {" "}
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        {isSignUp && (
          <input
            ref={name}
            autoComplete="fullname"
            type="text"
            placeholder="Full Name"
            className="inputField"
          />
        )}
        <input
          ref={email}
          autoComplete="email"
          type="text"
          placeholder="Email Address"
          className="inputField"
        />
        <input
          ref={password}
          autoComplete="current-password"
          type="password"
          placeholder="Password"
          className="inputField"
        />
        <div className="relative h-4 bottom-2">
          <p className="text-red-500 absolute font-medium">{errMsg}</p>
        </div>

        <button
          className="p-4 mt-4 bg-red-600  cursor-pointer w-full rounded-md "
          onClick={handleButtonClick}
        >
          {isSignUp ? "Sign Up" : "Sign in"}
        </button>
        <p className="py-4 ">
          {isSignUp ? "Already Registered" : "New to Netflix?"}{" "}
          <span
            className="hover:underline cursor-pointer"
            onClick={handleSignin}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
