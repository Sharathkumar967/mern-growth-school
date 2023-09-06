import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import CoursePage from "./pages/contentPages/coursepage/CoursePage";
import BlogPage from "./pages/contentPages/blogPage/BlogPage";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route
          path="/course"
          element={
            <ProtectedRoute>
              <CoursePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <BlogPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
