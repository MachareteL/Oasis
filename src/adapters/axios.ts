import axios from "axios";

export const Iaxios = axios.create();
export const Oaxios = axios.create({baseURL: "http://10.234.90.49:5000/"});


//10.234.93.193 