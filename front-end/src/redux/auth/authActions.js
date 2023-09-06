import { createAsyncThunk } from "@reduxjs/toolkit";

import Api from "../../services/Api";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",

  async ({ userName, password }, { rejectWithValue }) => {
    const data = {
      userName: userName,
      password: password,
    };
    try {
      const response = await Api.post("/auth/login", data);

      console.log("response login", response);

      if (response.data.success === true) {
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      }
      return response.data;
    } catch (err) {
      if (err.response && err.response.data.message) {
        toast.error(err.response.data.message);
        return rejectWithValue(err.response.data.message);
      } else {
        toast.error(err.message);
        return rejectWithValue(err.message);
      }
    }
  }
);



// register
export const userRegister = createAsyncThunk(
  "auth/register",
  async ({ userName, email, password }, { rejectWithValue }) => {
    try {
      const response = await Api.post("/auth/register", {
        userName,
        email,
        password,
      });
      if (response?.data?.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.replace("/login");
        }, 1000);
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert(err.response.data.message);
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const response = await Api.get("/auth/current-user");
      if (response?.data) {
        return response?.data;
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

////////////////////////////////////////////////////////////

// import { createAsyncThunk } from "@reduxjs/toolkit";

// import Api from "../../services/Api";
// import { toast } from "react-toastify";

// export const userLogin = createAsyncThunk(
//   "auth/login",

//   async ({ userName, password }, { rejectWithValue }) => {
//     const data = {
//       userName: userName,
//       password: password,
//     };
//     try {
//       const response = await Api.post("/auth/login", data);

//       console.log("response login", response);

//       if (response.data.success === true) {
//         localStorage.setItem("token", response.data.token);
//         toast.success(response.data.message);
//         setTimeout(() => {
//           window.location.replace("/");
//         }, 2000);
//       }
//       return response.data;
//     } catch (err) {
//       if (err.response && err.response.data.message) {
//         toast.error(err.response.data.message);
//         return rejectWithValue(err.response.data.message);
//       } else {
//         toast.error(err.message);
//         return rejectWithValue(err.message);
//       }
//     }
//   }
// );

// // register
// export const userRegister = createAsyncThunk(
//   "auth/register",
//   async ({ userName, email, password }, { rejectWithValue }) => {
//     try {
//       const response = await Api.post("/auth/register", {
//         userName,
//         email,
//         password,
//       });
//       if (response?.data?.success) {
//         toast.success(response.data.message);
//         setTimeout(() => {
//           window.location.replace("/login");
//         }, 1000);
//       } else {
//         alert(response.data.message);
//       }
//     } catch (err) {
//       alert(err.response.data.message);
//       if (err.response && err.response.data.message) {
//         return rejectWithValue(err.response.data.message);
//       } else {
//         return rejectWithValue(err.message);
//       }
//     }
//   }
// );

// export const getCurrentUser = createAsyncThunk(
//   "auth/getCurrentUser",
//   async ({ rejectWithValue }) => {
//     try {
//       const response = await Api.get("/auth/current-user");
//       if (response?.data) {
//         return response?.data;
//       }
//     } catch (err) {
//       if (err.response && err.response.data.message) {
//         return rejectWithValue(err.response.data.message);
//       } else {
//         return rejectWithValue(err.message);
//       }
//     }
//   }
// );
