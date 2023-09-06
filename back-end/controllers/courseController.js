const Course = require("../models/courseModel");

const getCourses = async (req, res) => {
  try {
    // Fetch courses from the database using the Course model
    const courses = await Course.find();

    // Send the courses as a JSON response
    res.status(200).json(courses);
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getCourses };

