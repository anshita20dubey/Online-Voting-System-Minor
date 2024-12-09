import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:7777/api", // Update with your backend URL
});

export default API;
