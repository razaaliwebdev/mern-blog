import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="p-3 flex mx-auto w-[90%]  flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="md:w-1/2 ">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2.5 hover:bg-gradient-to-l transition-all duration-1000 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
              Raza's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* Right */}
        <div className="md:w-1/2 w-full ">
          <form className="flex w-[88%] flex-col gap-5">
            <div className="">
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="username"
              />
            </div>
            <div className="">
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="username" />
            </div>
            <Button type="submit" gradientDuoTone="purpleToPink">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
