import axios from "axios";

export const Iaxios = axios.create();
export const Oaxios = axios.create({baseURL: "http://127.0.0.1:5000"});


//10.234.93.193 