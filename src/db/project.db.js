import { DiCss3, DiReact } from 'react-icons/di';
import {
  SiExpress,
  SiHtml5,
  SiMongodb,
  SiNodedotjs,
  SiSocketdotio,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaAngular } from 'react-icons/fa';
import { strangerTalk } from '../assets';
import {
  organicStoreImages,
  portfolioImages,
  saveKaroImages,
} from '../assets/projects';
import { projectType } from '../constants';

const projects = [
  {
    id: '1',
    title: 'Organic Store',
    type: projectType.WEB,
    status: 'Working',
    tech_usages: [
      { label: 'HTML', Icon: SiHtml5 },
      { label: 'CSS', Icon: DiCss3 },
      { label: 'JAVASCRIPT', Icon: TbBrandJavascript },
      { label: 'Typescript', Icon: SiTypescript },
      { label: 'Angular', Icon: FaAngular },
      { label: 'NODE JS', Icon: SiNodedotjs },
      { label: 'EXPRESS JS', Icon: SiExpress },
      { Icon: SiMongodb, label: 'MONGODB' },
    ],
    description:
      'Designed and developed a fully dynamic web application to dynamically update each section. Includes all the e-commerce features like Wishlist, cart, payment history, order, etc.',
    liveLink: '',
    githubLink: 'https://github.com/Abhishekpatel123/organic-store-server',
    images: organicStoreImages,
  },
  {
    id: '2',
    title: 'Live Comment Web App',
    status: 'Completed',
    type: projectType.WEB,
    tech_usages: [
      { label: 'HTML', Icon: SiHtml5 },
      { label: 'CSS', Icon: DiCss3 },
      { label: 'JAVASCRIPT', Icon: TbBrandJavascript },
      { label: 'NODE JS', Icon: SiNodedotjs },
      { label: 'EXPRESS JS', Icon: SiExpress },
      { Icon: SiMongodb, label: 'MONGODB' },
      { label: 'SOCKET.IO', Icon: SiSocketdotio },
    ],
    description:
      'Developed a fully functional real-time chat application using Node.js, socket.io, and Mustache. mplemented the concept of room-based segregation of users with a unique display name and room name. It has an option for sending location through chat messages, location is made by concatenating coordinates in the URL of google maps. Also, Profanity is not allowed, those words are blocked and are not sent.',
    liveLink: 'https://comment-web-app.herokuapp.com',
    githubLink: 'https://comment-web-app.herokuapp.com',
    images: [{ url: strangerTalk, name: 'Frontend Home Page' }],
  },
  {
    id: '3',
    title: 'PathPradarshak',
    status: 'Working',
    type: projectType.WEB,
    tech_usages: [
      { label: 'HTML', Icon: SiHtml5 },
      { label: 'CSS', Icon: DiCss3 },
      { label: 'JAVASCRIPT', Icon: TbBrandJavascript },
      { label: 'React JS', Icon: DiReact },
      { label: 'NODE JS', Icon: SiNodedotjs },
      { label: 'EXPRESS JS', Icon: SiExpress },
      { Icon: SiMongodb, label: 'MONGODB' },
    ],
    description: 'Ab pade kam paise mai or gher mai rehete hue',
    liveLink: 'https://comment-web-app.herokuapp.com',
    githubLink: 'https://comment-web-app.herokuapp.com',
    images: [],
  },
  {
    id: '4',
    title: 'Portfolio',
    status: 'Completed',
    type: projectType.WEB,
    tech_usages: [
      { label: 'HTML', Icon: SiHtml5 },
      { label: 'CSS', Icon: DiCss3 },
      { label: 'JAVASCRIPT', Icon: TbBrandJavascript },
      { label: 'React JS', Icon: DiReact },
    ],
    description: 'My personal old portfolio.',
    liveLink: 'https://abhishekpatel8719.netlify.app/',
    githubLink: 'https://github.com/Abhishekpatel123/My-Portfolio',
    images: portfolioImages,
  },
  {
    id: '5',
    title: 'SaveKaro',
    status: 'Working',
    type: projectType.APP,
    tech_usages: [
      { label: 'JAVASCRIPT', Icon: TbBrandJavascript },
      { label: 'TYPESCRIPT', Icon: SiTypescript },
      { label: 'React Native', Icon: DiReact },
      { label: 'NODE JS', Icon: SiNodedotjs },
      { label: 'EXPRESS JS', Icon: SiExpress },
      { Icon: SiMongodb, label: 'MONGODB' },
    ],
    description:
      'It is a local ecommerce application which include two application (seller and customer).',
    liveLink: '',
    githubLink: 'https://github.com/Abhishekpatel123/savekaro-30-01-2023',
    images: saveKaroImages,
  },
];

export default projects;
