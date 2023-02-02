// main color #70BFFF
// Enter all your detials in this file
// Logo images
// import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
import logogradient from "./assets/logo192.png";
// Profile Image
import profile from "./assets/abhishek.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

import doof from "./assets/doof-home.png";
import {
  SiTypescript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMaterialui,
  SiRedux,
  SiStrapi,
  SiSocketdotio,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { DiReact, DiCss3, DiPython, DiNpm } from "react-icons/di";
import { AiFillCopyrightCircle, AiFillGithub } from "react-icons/ai";
import { TbBrandReactNative, TbBrandJavascript } from "react-icons/tb";

// skills icon
// , ,,

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Abhishek Patel",
  // tagline: "I build things for web and app",
  tagline: "I turn idea into reality.",
  img: profile,
  about: `I love to make idea into reality. I am a Web and App developer based in Gwalior. I really enjoy learning languages and frameworks like React js, React Native, Express js etc also I am good in problem solving skill`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/abhishekpatel87/",
  github: "https://github.com/Abhishekpatel123",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/abhishekpatel7339/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "React and React Native Developer (INTERN)",
    Company: `Codeaxes Solutions`,
    Location: "Bengaluru (Remote)",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
    points: [
      "Recognized as the Best Intern Award.",
      "Developed a chrome extension for video and screen recording.",
      "Developed a system for taking feedback and survey test.",
      "Used MERN STACK, AWS S3, Multipart, Heroku, etc.",
    ],
    images: [doof, doof],
    website: "https://doof.co.in/",
  },
  {
    Position: "MERN STACK Developer (INTERN)",
    Company: `Doof Research Private Limited`,
    Location: "Chhattisgarh (Remote)",
    Type: "Internship",
    Duration: "Jan 2021 - Mar 2022",
    points: [
      "Recognized as the Best Intern Award.",
      "Developed a chrome extension for video and screen recording.",
      "Developed a system for taking feedback and survey test.",
      "Used MERN STACK, AWS S3, Multipart, Heroku, etc.",
    ],
  },
  {
    Position: "Backend developer (Freelance)",
    Company: `Mendisure Incinerators`,
    Location: "Remote",
    Type: "Freelance",
    Duration: "Mar 2021 - Apr 2021",
    points: [
      "Recognized as the Best Intern Award.",
      "Developed a chrome extension for video and screen recording.",
      "Developed a system for taking feedback and survey test.",
      "Used MERN STACK, AWS S3, Multipart, Heroku, etc.",
    ],
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "MERN Stack and React Native",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Apr 2020 - Present",
  },
  {
    Position: "Bachelor of Technology in Computer Science",
    Company: `ITM Gwalior`,
    Location: "Gwalior",
    Type: "Full Time",
    Duration: "Aug 2019 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

export {default as projects } from './db/project.db'
// Enter your Project Details here
export const projectDetails = [
  {
    title: "Project title 1",
    image: projectImage1,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 2",
    image: projectImage2,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "abhipatel8719@gmail.com",
  phone: "+91 8719098751",
};

export const skills = [
  {
    name: "frontend",
    values: [
      { label: "HTML", Icon: SiHtml5 },
      { label: "CSS", Icon: DiCss3 },
      { label: "JAVASCRIPT", Icon: TbBrandJavascript },
      { label: "REACT JS", Icon: DiReact },
      { label: "MATERIAL UI", Icon: SiMaterialui },
      { label: "REDUX", Icon: SiRedux },
      { label: "REACT NATIVE", Icon: TbBrandReactNative },
    ],
  },
  {
    name: "backend",
    values: [
      { label: "NODE JS", Icon: SiNodedotjs },
      { label: "EXPRESS JS", Icon: SiExpress },
      { Icon: SiMongodb, label: "MONGODB" },
      { label: "MONGOOSE", Icon: SiMongodb },
      { label: "STARPI", Icon: SiStrapi },
      { label: "SOCKET.IO", Icon: SiSocketdotio },
    ],
  },
  {
    name: "languages",
    values: [
      { label: "JAVASCRIPT", Icon: TbBrandJavascript },

      { label: "PYTHON", Icon: DiPython },
      { label: "C", Icon: AiFillCopyrightCircle },
      { label: "C++", Icon: AiFillCopyrightCircle },
      { label: "TYPESCRIPT", Icon: SiTypescript },
    ],
  },
  {
    name: "tools",
    values: [
      { label: "VS CODE", Icon: SiVisualstudiocode },
      { label: "GIT", Icon: FaGitSquare },
      { label: "GITHUB", Icon: AiFillGithub },
      { label: "POSTMAN", Icon: SiPostman },
      { label: "NPM", Icon: DiNpm },
    ],
  },
  // {
  //   name: "learning",
  //   values: ["AWS", "NEXT JS", "FIREBASE", "DATA STRUCTURE"],
  // },
];
