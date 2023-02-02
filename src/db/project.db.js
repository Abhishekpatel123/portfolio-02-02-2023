import { DiCss3 } from "react-icons/di";
import {
  SiExpress,
  SiHtml5,
  SiMongodb,
  SiNodedotjs,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { strangerTalk } from "../assets";

const projects = [
  {
    id: "1",
    title: "Live Comment Web App",
    tech_usages: [
      { label: "HTML", Icon: SiHtml5 },
      { label: "CSS", Icon: DiCss3 },
      { label: "JAVASCRIPT", Icon: TbBrandJavascript },
      { label: "NODE JS", Icon: SiNodedotjs },
      { label: "EXPRESS JS", Icon: SiExpress },
      { Icon: SiMongodb, label: "MONGODB" },
      { label: "SOCKET.IO", Icon: SiSocketdotio },
    ],
    description:
      "Real Time updating comment web app using HTML , CSS , Javascript , Node js , Socket.io , MONGODB , etc ",
    liveLink: "https://comment-web-app.herokuapp.com",
    githubLink: "https://comment-web-app.herokuapp.com",
    images: [{ url: strangerTalk, name : "Frontend Home Page" }],
  },
  {
    id: "1",
    title: "PathPradarshak",
    tech_usages: [
      { label: "HTML", Icon: SiHtml5 },
      { label: "CSS", Icon: DiCss3 },
      { label: "JAVASCRIPT", Icon: TbBrandJavascript },
      { label: "NODE JS", Icon: SiNodedotjs },
      { label: "EXPRESS JS", Icon: SiExpress },
      { Icon: SiMongodb, label: "MONGODB" },
      { label: "SOCKET.IO", Icon: SiSocketdotio },
    ],
    description: "Ab pade kam paise mai or gher mai rehete hue",
    liveLink: "https://comment-web-app.herokuapp.com",
    githubLink: "https://comment-web-app.herokuapp.com",
    images: [{ url: "https://comment-web-app.herokuapp.com", name : "Frontend" }],
  },
];

export default projects;
