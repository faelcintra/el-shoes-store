import axios from "axios";

export const key = axios.create({
  baseURL: "http://localhost:5000",
});
