import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'James Whitney | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'James Whitney',
  subtitle: `I'm a JavaScript Developer`,
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'With over 4 years of experience as a software developer and analyst, my current focus is on creating front-end JavaScript applications using React.',
  paragraphTwo:
    'I started my tech career as an analyst and developer working with new medical technologies. While working in the medical field, I led small teams of developers and designers to rapidly create, implement and deploy bug fixes which affected patient safety and clients operating revenue.',
  paragraphThree:
    'After leaving the medical field I have begun to pursue new opportunities as a front-end developer with back-end experience. My current goals are to continue to grow as a developer and contribute value for tech start ups and established businesses.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'quote-bot.png',
    title: 'Quote Bot',
    info:
      'This application generates random quotes from a public API and allows users to tweet the current quote or select a new quote to tweet. Quote Bot is responsive on desktop and mobile devices.',
    info2: '',
    url: 'https://jameswhitney.github.io/random-qoutes',
    repo: 'https://github.com/jameswhitney/random-qoutes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'star-wars.png',
    title: 'StarWars Friends',
    info:
      'Star Wars Friends generates random robot images on cards based on famous Star Wars characters. A search field component filters cards based on user search input. The application was created using React.js and several NPM libraries.',
    info2: '',
    url: 'https://jameswhitney.github.io/swapi-app',
    repo: 'https://github.com/jameswhitney/swapi-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'face-detector.png',
    title: 'Face Detector',
    info:
      'Face Detector highlights all faces found within an image for registered users. Since Face Detector is used for demonstration purposes, I would advise users to enter fake names, emails, and passwords. Face Detector was built with React.js, Node.js, Express, and PostgreSQL.',
    info2: '',
    url: 'https://img-detection.herokuapp.com/',
    repo: 'https://github.com/jameswhitney/img-detection', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Would you like to know more?`,
  btn: `Let's talk`,
  email: 'james@flashcat.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jameswhitney2',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jameswhitney',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
