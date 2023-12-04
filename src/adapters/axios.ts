import axios from "axios";

export const Iaxios = axios.create();
export const Oaxios = axios.create({baseURL: "http://192.168.88.28:5000/"});

//10.234.86.236:5000
//http://192.168.88.30:5000
