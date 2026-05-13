import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useAuth } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";

const Login = () => {
  // const navigate = useNavigate();
  const { signup, signin, err, loading, user, clearError } = useAuth();
  const dispatch = useDispatch();

  const [isSignUp, setIsSignUp] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSignin = () => {
    setIsSignUp(!isSignUp);
    setErrMsg(null);
    clearError();
  };

  const name = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const clearField = () => {
    if (isSignUp) {
      name.current.value = "";
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const handleButtonClick = async () => {
    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value,
    );
    // console.log(message,email.current.value,password.current.value)
    setErrMsg(message);
    console.log(isSignUp);

    if (message) return;

    if (isSignUp) {
      const payload = {
        name: name.current.value,
        mail: emailRef.current.value,
        pass: passwordRef.current.value,
      };

      console.log(payload, "submitSignup");
      //signup
      const signedUpUser = await signup(
        name.current.value,
        emailRef.current.value,
        passwordRef.current.value,
      );
      console.log(signedUpUser, "testResSignupUser");

      // we getting data's from auth bcz it will have updated details
      const { uid, displayName, photoURL, email, password } = auth.currentUser;

      dispatch(
        addUser({
          uid: uid,
          name: displayName,
          email: email,
          password: password,
          photoUrl: photoURL,
        }),
      );

      if (signedUpUser) {
        // navigate("/browse");
        clearField();
      }
    } else {
      const payload = {
        mail: emailRef.current.value,
        pass: passwordRef.current.value,
      };
      console.log(payload, "submitSignin");
      //signin
      const signedInUser = await signin(
        emailRef.current.value,
        passwordRef.current.value,
      );

      console.log(signedInUser, "testResSigninUser");

      if (signedInUser) {
        // navigate("/browse");
        clearField();
      }
    }
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
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[30%] md:w-1/2 w-[80%] bg-black/60 backdrop-blur-[3px] text-white p-12 caret-white"
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
            onFocus={() => {
              setErrMsg(null);
              clearError();
            }}
          />
        )}

        <input
          ref={emailRef}
          autoComplete="email"
          type="text"
          placeholder="Email Address"
          className="inputField"
          onFocus={() => {
            setErrMsg(null);
            clearError();
          }}
        />

        <div className="relative flex flex-col">
          <input
            ref={passwordRef}
            autoComplete="current-password"
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="inputField"
            onFocus={() => {
              setErrMsg(null);
              clearError();
            }}
          />

          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 bottom-2 cursor-pointer text-white  transition-colors"
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? <PiEyeSlash size={22} /> : <PiEye size={22} />}
          </div>

          <div className="relative h-4 bottom-2 select-none">
            {!loading && (err || errMsg) && (
              <p className="text-red-500 absolute font-medium">
                {err || errMsg}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={`p-4 mt-4 ${loading ? "bg-red-500 cursor-not-allowed" : "bg-red-600 cursor-pointer"}    w-full rounded-md `}
          onClick={handleButtonClick}
          disabled={loading}
        >
          {!loading && (isSignUp ? "Sign Up" : "Sign In")}

          {loading && "Loading..."}
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
