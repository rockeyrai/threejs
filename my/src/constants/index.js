import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  restaurent,
  divya,
  shakhya,
  jsmastery,
  freecode,
  brodway,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "JavaScript",
    company_name: "freeCodeCamp",
    icon: freecode,
    iconBg: "#E6DEDD",
    date: "jun 2024",
    points: [
"Mastering the fundamentals of JavaScript, including variables, data types, and functions.",
"Gaining a solid understanding of asynchronous programming with Promises and async/await.",
"Building interactive projects using DOM manipulation and event handling.",
"Enhancing problem-solving skills through algorithm challenges and coding exercises.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Brodway",
    icon: brodway,
    iconBg: "#383E56",
    date: "Aug 2024",
    points: [
"Acquiring hands-on experience in building RESTful APIs using Node.js and Express.",
"Creating responsive front-end designs using React and Bootstrap.",
"Gaining proficiency in database management with MongoDB and SQL.",
"Developing a full-stack web application with user authentication and real-time features.",
    ],
  },
  {
    title: "Three.js",
    company_name: "JS-Mastery",
    icon: jsmastery,
    iconBg: "#E6DEDD",
    date: " Present",
    points: [
"Learning the basics of setting up a 3D scene, including camera, lights, and meshes.",
"Creating and animating 3D models using Three.js libraries.",
"Exploring advanced topics such as shaders, textures, and environment maps.",
"Building an interactive 3D portfolio project to showcase creative and immersive web experiences.",
    ],
  },
];

const projects = [
  {
    name: "Restaurant System",
    description:
      "Web-based platform that allows users to order food, reserve tabale and view order state , providing a convenient and efficient solution for restaurant  management needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: restaurent,
    source_code_link: "https://github.com/rockeyrai/RestaurantV3",
  },
  {
    name: "Service Site",
    description:
      "Web application that enables users to search for infomation,  use print serivce, and fill any online form for easy service",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "multer",
        color: "pink-text-gradient",
      },
    ],
    image: divya,
    source_code_link: "https://github.com/rockeyrai/Divya",
  },
  {
    name: "School Management",
    description:
      "A comprehensive Management System that allow Admin, teacher and student to experience best and easy way of management of the Education.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: shakhya,
    source_code_link: "https://github.com/kaylinkhanal/sikshyalaya/tree/develop",
  },
];

export { services, technologies, experiences, projects };
