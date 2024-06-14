import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    common: {
      Authorization: "bearer application",
    },
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ab`;
  return config;
});

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (router: any, { dispatch }) => {
    console.log("router", router);
    const token = localStorage.getItem("auth_token");       
    console.log("token", token);
    try {
      // const response = await axiosInstance.get("/users");
      // console.log("response", response);
      // router?.push("/about");
      // return response.data;
    } catch (error) {
      throw error;
    }
  }
);
