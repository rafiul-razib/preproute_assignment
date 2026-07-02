import { useQuery } from "@tanstack/react-query";
import logo from "../../assets/preproute lofo.png";
import testTubeMan from "../../assets/TEST TUBE MAN.png";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";

type LoginInputs = {
  userId: string;
  password: string;
};

const Login = () => {
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit = async (data: LoginInputs) => {
    console.log(data);
    // const result = await axiosSecure.post("/auth/login", data);
    // console.log(result);
  };

  return (
    <div className="hero min-h-screen bg-base-200 px-4 py-6 sm:px-6">
      <div className="hero-content w-full max-w-7xl flex-col gap-8 p-0 md:flex-row md:items-stretch md:gap-10 lg:gap-20">
        <div className="w-full max-w-md md:w-1/2 md:max-w-none">
          <img
            src={testTubeMan}
            alt="Login illustration"
            className="mx-auto h-auto w-full max-w-sm object-contain sm:max-w-md md:max-w-none"
          />
        </div>

        <div className="w-full max-w-md rounded-xl border border-[#5988EF] bg-base-100 px-5 py-8 shadow-sm sm:px-8 sm:py-10 md:flex md:w-1/2 md:max-w-none md:flex-col md:justify-center md:px-12 md:py-14 md:shadow-none lg:px-14 lg:py-16 xl:py-20">
          <div className="space-y-3 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
            <img
              src={logo}
              alt="PrepRoute logo"
              className="h-auto w-32 sm:w-36"
            />

            <h1 className="text-lg font-semibold sm:text-xl">Login</h1>

            <p className="text-xs text-gray-600 sm:text-sm">
              Use your company provided Login credentials
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
              <label className="label font-bold text-black">User ID</label>
              <input
                type="text"
                className="input h-11 w-full"
                placeholder="Enter User ID"
                {...register("userId", {
                  required: "User ID is required",
                })}
              />
              {errors.userId && (
                <p className="text-sm text-red-500">{errors.userId.message}</p>
              )}

              <label className="label font-bold text-black">Password</label>
              <input
                type="password"
                className="input h-11 w-full"
                placeholder="Enter Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

              <div>
                <a className="link link-hover text-xs sm:text-sm">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn mt-4 w-full border-none bg-[#5988EF] text-white hover:bg-[#4f79db]"
              >
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
