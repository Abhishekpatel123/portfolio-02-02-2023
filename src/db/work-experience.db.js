import { doofImages, codeaxesImages } from "../assets/work";

const workExperience = [
  {
    Position: "React and React Native Developer (INTERN)",
    Company: `Codeaxes Solutions`,
    Location: "Bengaluru (Remote)",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
    points: [
      "Developed an app (Brainycom) to manage, and automate (association too) the organization with this community engine.",
      "Developed the rummy dashboard UI and had done APIs integration.",
      "Used JavaScript, React Native, Redux toolkit, React, Material UI",
    ],
    images: codeaxesImages,
    links: [
      "https://play.google.com/store/apps/details?id=com.brainycom&hl=en_IN&gl=US",
    ],
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
    images: doofImages,
    links: ["https://doof.co.in/"],
  },
  {
    Position: "Backend developer (Freelance)",
    Company: `Mendisure Incinerators`,
    Location: "Remote",
    Type: "Freelance",
    Duration: "Mar 2021 - Apr 2021",
    points: [
      "Developed the backend of the plastic waste management website using NodeJS, ExpressJS, Mongo DB, and Nodemailer.",
      "Worked on authentication, authorization, emails, APIs, etc.",
      "Used Node Js, MongoDB, ExpressJs, Nodemailer, etc.",
    ],
    images: [],
    links: ["https://medisureincinerators.in/#/"],
  },
];

export default workExperience;
