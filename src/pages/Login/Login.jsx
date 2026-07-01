import React from "react";
import logo from "../../assets/preproute lofo.png";
import testTubeMan from "../../assets/TEST TUBE MAN.png";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row lg:gap-44">
        <div className="w-[50%]">
          <img src={testTubeMan} alt="" />
        </div>
        <div className="w-[50%] border border-[#5988EF] rounded-xl px-14 py-36">
          <div className="py-12 space-y-4">
            <div>
              <img src={logo} alt="" />
            </div>
            <h1 className="text-xl">Login</h1>
            <p className="text-sm">
              Use your company provided Login credentials
            </p>
          </div>
          <div className="">
            <fieldset className="fieldset">
              <label className="label font-bold text-black">User ID</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label font-bold text-black">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn bg-[#5988EF] text-white mt-4">
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
