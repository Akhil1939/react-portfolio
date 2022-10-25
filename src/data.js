import React from 'react';
//  icons
import {
  // FiYoutube,
  FiInstagram,
  FiGithub,
  FiDownload,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.png';
import Project2 from './assets/img/projects/p2.png';
import Project3 from './assets/img/projects/p3.png';
// import Project4 from './assets/img/projects/p4.webp';
// import Project5 from './assets/img/projects/p5.webp';
// import Project6 from './assets/img/projects/p6.webp';

// skills images
import html from './assets/img/skills/html.png'
import css from './assets/img/skills/css.png'
import github from './assets/img/skills/github.png'
import javascript from './assets/img/skills/javascript.png'
import reactImage from './assets/img/skills/react.png'
import nodejs from './assets/img/skills/node.png'
// import expressjs from './assets/img/skills/express.png'
import tailwind from './assets/img/skills/tailwind.png'
import mongodb from './assets/img/skills/mongodb.png'
import cpp from './assets/img/skills/cpp.png'
import bootstrap from './assets/img/skills/bootstrap.svg'

 
// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiDownload />,
    href: 'https://drive.google.com/file/d/18Wtx2hGCLiGAwU0QhdGSQPLUOrO6ZRSh/view?usp=sharing',
    download : true,
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/akhil_kukadiya/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Akhil1939',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/akhil-kukadiya',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Visitor Management System',
    link: '',
  },
  {
    id: '2',
    image: Project2,
    name: "Writer's Deck",
    link: '',
  },
  {
    id: '3',
    image: Project3,
    name: 'MediaMave: the new nutral',
    link:"",
  },
  
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];


export const skills = [
      {
          id: 1,
          src: html,
          title: 'HTML5',
          style: 'shadow-orange-500',
      },
      {
          id: 2,
          src: css,
          title: 'CSS3',
          style: 'shadow-blue-500',
      },
      {
          id: 3,
          src: javascript,
          title: 'JavaScript',
          style: 'shadow-yellow-500',
      },
      {
          id: 4,
          src: reactImage,
          title: 'React.Js',
          style: 'shadow-blue-600',
      },
      {
          id: 5,
          src: tailwind,
          title: 'Tailwind',
          style: 'shadow-sky-400',
      },
      {
          id: 6,
          src: nodejs,
          title: 'Node.Js',
          style: 'shadow-[#68A063]',
      },
      {
          id: 8,
          src: mongodb,
          title: 'Mongo DB',
          style: 'shadow-[#3FA037]',
      },
      {
          id: 9,
          src: cpp,
          title: 'C++ 14',
          style: 'shadow-blue-500',
      },
      {
          id: 10,
          src: github,
          title: 'Github',
          style: 'shadow-gray-400',
      },
      {
          id: 11,
          src: bootstrap,
          title: 'Github',
          style: 'shadow-purple-400',
      }
  ];


// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Web design is the planning and creation of websites',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'web development, is the creation of dynamic web applications',
  },
  {
    icon: <FiPenTool />,
    name: 'Decision making',
    description:
      'Decision making is the process of making choices by identifying a decision, gathering information, and assessing alternative resolutions..',
  },
  // {
  //   icon: <FiTag />,
  //   name: 'SEO',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at akhilkukadiya1939@gmail.com',
    href:"mailto:akhilkukadiya1939@gmail.com"
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'surat, Gujarat',
    description: 'Serving clients worldwide',
  },
];
