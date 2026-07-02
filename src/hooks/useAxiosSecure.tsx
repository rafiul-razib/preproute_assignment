import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://admin-moderator-backend-staging.up.railway.app/api",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
