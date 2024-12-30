import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [

    {
      title: "Full-Stack Web Developer",
      company_name: "BusinExprets",
      icon: tesla,
      iconBg: "#383E56",
      date: "December 2023 - May 2024",
      points: [
        "Customized official home page and increased SEO by 12%.",
        "worked under Senior developers and created several websites for clients.",
        "Tech used - React.js | Node.js | Express.js | Prisma | MySQL | JavaScript | TailwindCSS | Typescript",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Code Clause ",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2023 - September 2023",
      points: [
        "Developing web applications using HTML, JavaScript, CSS and other related technologies.",
        "Worked under under the gudience of the Mentors of the company.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback of the task.",
      ],
    },
    
    {
      title: "Freelancing",
      company_name: "UpWork",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2022 - Jan 2023",
      points: [
        "Developed several web applications for customers as per their demands",
        "Delivered high-quality websites with the best UX/UI design.",
        "Developed responsive design and ensuring cross-browser compatibility.",
        "Completed and delivered every work within the time constraints .",
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
      name: "Flipkart UI Clone",
      description:
        "This project enhances the user-experience and user-interface, it's a clone of Flipkart website, this project is based on Web designing.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/raghavsingh05/Flip_clone",
    },
    {
      name: "Space Fight Game",
      description:
        "A space fight game using Vanilla JavaScript, HTML, and CSS. It is a web-based game with a live high score and many more game features",
      tags: [
        {
          name: "Vanilla JS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/raghavsingh05/space-fight-game",
    },
    {
      name: "Trip Advisor",
      description:
        "A comprehensive travel advisor web application that helps finding nearby hotels and maps using Google Map APIs and travelling APIs .",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "APIs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/raghavsingh05/Trip-advisor",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };