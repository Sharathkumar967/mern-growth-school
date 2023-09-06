import React, { useState, useEffect } from "react";
import "./CoursePage.scss";
import Api from "../../../services/Api";
import Card from "./Card"; // Import the Card component
import Navbar from "../../../components/navbar/Navbar";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const response = await Api.get("/courses/courses");
      console.log("getCourse", response);
      setCourses(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <div className="header">
        <Navbar />
      </div>

      <div className="course-page">
        <div className="cards">
          {courses.map((course, index) => (
            <Card key={index} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursePage;
