import axios from "axios";



const userToken = localStorage.getItem("userToken");
export const api = axios.create({
  baseURL: `https://kenziehub.herokuapp.com`,
  headers: { Authorization: `Bearer ${userToken}` },
});
