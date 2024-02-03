import axios from "axios";
const API = axios.create({
  baseURL: "https://randomuser.me/api",
});
export default API;
