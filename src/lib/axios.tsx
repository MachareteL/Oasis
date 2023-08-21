import axios from "axios";

const axiosGlobal = axios.create({
  baseURL: "http://127.0.0.1:5000/",
  timeout: 1000 * 1200,
});

export default axiosGlobal;
