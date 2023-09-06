const express = require("express");
const { getCourses, createCourse } = require("../controllers/courseController");

const router = express.Router();

router.get("/courses", getCourses);

module.exports = router;
