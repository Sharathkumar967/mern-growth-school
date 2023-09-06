import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <Link to="/" className="logo">
            {" "}
            Growth school
          </Link>
        </div>
        <div className="right">
          <Link to="/course">Course</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>

      <section>
        {location.pathname === "/course" ? (
          <div className="course-text text">Courses</div>
        ) : null}

        {location.pathname === "/blog" ? (
          <div className="course-text text">Blog</div>
        ) : null}
      </section>
    </div>
  );
};

export default Navbar;
