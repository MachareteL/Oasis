import axios from "axios";

const axiosGlobal = axios.create({
  baseURL: "http://10.234.90.31:5000/",
  timeout: 1000 * 1200,
});

export default axiosGlobal;
