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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "restaurant system",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: divya,
    source_code_link: "https://github.com/rockeyrai/Divya",
  },
  {
    name: "School Management",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shakhya,
    source_code_link: "https://github.com/kaylinkhanal/sikshyalaya/tree/develop",
  },
];

export { services, technologies, experiences, testimonials, projects };
