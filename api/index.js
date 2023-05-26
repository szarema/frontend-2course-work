import axios from "axios";

export const api = axios.create({
  baseURL: "http://84.201.173.65:8080/api/",
});
