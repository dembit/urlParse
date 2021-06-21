import axios from "axios";
import { ParametersType } from "../Types/Tipes";

let instance = axios.create({
  // baseURL: '',
  // headers: {
  //     "Content-Type": 'application/json',
  //     "accept": "application/json",
  //     "Authorization": `Bearer ${accessToken}`
  // }
});

export const Api = {
  setMeta(meta: ParametersType) {
    // return  instance.put("http://localhost:3000", JSON.stringify(meta));
    return new Promise<{data: string}>((resolve, reject) => {
        setTimeout(() => {
           return  resolve({data: "success"})
        }, 1000)
    })
  },
};
