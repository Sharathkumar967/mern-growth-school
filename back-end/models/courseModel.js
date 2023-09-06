const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  durationInMinutes: {
    type: Number,
    required: false,
  },
  lectureImg: {
    type: String,
    required: false,
  },
  lectureName: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

// Arrays of possible values for each property
const images = [
  "https://images.unsplash.com/photo-1594643781026-abcb610d394f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://plus.unsplash.com/premium_photo-1664298386867-7198bc908772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80",
  "https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80",
  "https://images.unsplash.com/photo-1583486791369-944b727358f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1690050070777-a7f9a04d0337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];
const descriptions = [
  "Learn the fundamentals of machine learning, a branch of artificial intelligence that teaches computers to make predictions and decisions based on data.",
  "Gain insights into the world of online marketing, covering strategies, social media, SEO, and advertising techniques.",
  "Discover how to manage your finances effectively, including budgeting, investing, and planning for the future.",
  "Hone your writing skills through creative exercises and workshops, exploring various genres and styles.",
  "Delve into the study of the mind and behavior, covering topics like cognition, perception, and psychological disorders.",
  "Learn web development from scratch, covering HTML, CSS, JavaScript, and more to create interactive websites and applications.",
  "Develop your public speaking skills, including confidence, articulation, and the ability to engage and persuade an audience.",
  "Explore the world of data science, including data analysis, visualization, and basic machine learning concepts.",
  "Learn the principles of graphic design, including layout, typography, and image manipulation using design software.",
  "Delve into the mysteries of the universe, covering celestial objects, cosmology, and the fundamental laws of physics in space.",
];
const durations = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const lectureImages = [
  "https://www.instagram.com/p/Cwp7apmvEjJ/",
  "https://www.instagram.com/p/Cwp7apmvEjJ/",
  "https://www.instagram.com/p/Cwp7apmvEjJ/",
  "https://www.instagram.com/p/Cwp7apmvEjJ/",
  "https://www.instagram.com/p/Cwp7apmvEjJ/",
  "https://www.instagram.com/p/Cwp7apmvEjJ/",
  "https://www.instagram.com/p/Cwp7apmvEjJ/",
  "https://www.instagram.com/p/Cwp7apmvEjJ/",
  "https://www.instagram.com/p/Cwp7apmvEjJ/",
  "https://www.instagram.com/p/Cwp7apmvEjJ/",
];
const lectureNames = [
  "Andrew Ng",
  "Neil Patel",
  "Warren Buffett",
  "Stephen King",
  "Sigmund Freud",
  "Brad Traversy",
  "Toastmasters International",
  "Jake VanderPlas",
  "Paul Rand",
  "Stephen Hawking",
];
const titles = [
  "Introduction to Machine Learning",
  "Digital Marketing Fundamentals",
  "Financial Planning and Investment Strategies",
  "Creative Writing Workshop",
  "Introduction to Psychology",
  "Web Development Bootcamp",
  "Public Speaking Mastery",
  "Data Science for Beginners",
  "Graphic Design Fundamentals",
  "Introduction to Astrophysics",
];
const prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

// Define a function to generate a random integer within a given range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define a function to save a unique course to the database
async function saveUniqueCourse(course) {
  try {
    // Check if a course with the same attributes exists in the database
    const existingCourse = await Course.findOne({
      image: course.image,
      description: course.description,
      durationInMinutes: course.durationInMinutes,
      lectureImg: course.lectureImg,
      lectureName: course.lectureName,
      title: course.title,
      price: course.price,
    });

    if (!existingCourse) {
      // If the course doesn't exist, save it to the database
      const savedCourse = await course.save();
      console.log("Course saved:", savedCourse);
    } else {
      console.log("Course already exists, skipping:", course);
    }
  } catch (error) {
    console.error("Error saving course:", error);
  }
}

// Generate consistent random values using the seeded random function
const generatedCourses = [];
const usedCombinationSet = new Set(); // Keep track of used combinations of values

while (generatedCourses.length < 10) {
  const randomIndex = getRandomInt(0, images.length - 1);

  const course = new Course({
    _id: new mongoose.Types.ObjectId(),
    image: images[randomIndex],
    description: descriptions[randomIndex],
    durationInMinutes: durations[randomIndex],
    lectureImg: lectureImages[randomIndex],
    lectureName: lectureNames[randomIndex],
    title: titles[randomIndex],
    price: prices[randomIndex],
  });

  const combinationKey = `${course.image}-${course.description}-${course.durationInMinutes}-${course.lectureImg}-${course.lectureName}-${course.title}-${course.price}`;

  if (!usedCombinationSet.has(combinationKey)) {
    usedCombinationSet.add(combinationKey);
    generatedCourses.push(course);
  }
}

// Save the unique courses to the database
Promise.all(generatedCourses.map((course) => saveUniqueCourse(course)))
  .then(() => {
    console.log("All unique courses saved successfully.");
  })
  .catch((error) => {
    console.error("Error saving unique courses:", error);
  });

module.exports = Course;
