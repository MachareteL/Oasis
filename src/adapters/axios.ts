import axios from "axios";

export const Iaxios = axios.create();
export const Oaxios = axios.create({baseURL: "http://192.168.88.28:5000"});


//10.234.93.193 