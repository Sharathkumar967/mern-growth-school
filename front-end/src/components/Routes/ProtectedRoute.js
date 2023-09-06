import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Api from "../../services/Api";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "./../../redux/auth/authActions";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  // get user current
  const getUser = async () => {
    try {
      const response = await Api.get("/auth/current-user");

      console.log("getUsergetUser", response);
      if (response?.data?.success) {
        dispatch(getCurrentUser(response.data));
      }
    } catch (err) {
      localStorage.clear();
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  });

  if (localStorage.getItem("token")) {
    return children; // User is authenticated, render the protected content
  } else {
    return <Navigate to="/login" />; // User is not authenticated, redirect to login
  }
};

export default ProtectedRoute;
