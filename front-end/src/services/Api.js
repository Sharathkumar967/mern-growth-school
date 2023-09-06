// // api.js

import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:8080/api/v1" });

Api.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export default Api;
