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
    avanta,
  } from "../assets";
  import businexp from "../assets/businexp.png";
  import mysureshot from "../assets/mysureshot.png";
  import gaspaz from "../assets/gaspaz.png";
  import hcloud from "../assets/hcloud.png";
  import neomedix from "../assets/neomedix.png";
  import ganpati from "../assets/ganpati.png";
  import affinity from "../assets/affinity.png";
  import cura from "../assets/cura.png";
  import vsinterior from "../assets/vsinterior.png";

  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work Experience",
    },
    {
      id: "projects",
      title: "Projects",
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
      name: "EzyWallet",
      description:
        "An online wallet app to manage all your transactions and expenses effortlessly. Simplify peer-to-peer transfers and track finances with ease.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/raghavsingh05/EzyWallet",
      live_link:"https://ezywallet.rajraghav.com/",
    },
    {
      name: "Eventers",
      description:
        "Eventers, a web and mobile platform for seamless event hosting, guest management, QR code check-ins, and attendee tracking for event organizers.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/raghavsingh05/Eventers",
      live_link:"https://eventers.rajraghav.com/",
    },
    {
      name: "Trip Advisor",
      description:
        "A comprehensive travel advisor web application that helps finding nearby hotels and maps using Google Map APIs and travelling APIs .",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "REST APIs",
          color: "green-text-gradient",
        },
        {
          name: "Twailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/raghavsingh05/Trip-advisor",
      live_link:"https://github.com/raghavsingh05/Trip-advisor",
    },
  ];
  const proprojects = [
    {
      name: "BusinExperts",
      description:
        "An online wallet app to manage all your transactions and expenses effortlessly. Simplify peer-to-peer transfers and track finances with ease.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: businexp,
      source_code_link: "https://github.com/raghavsingh05/EzyWallet",
      live_link:"https://businexperts.com/",
    },
    {
      name: "Avanta Healthcare",
      description:
        "Eventers, a web and mobile platform for seamless event hosting, guest management, QR code check-ins, and attendee tracking for event organizers.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: avanta,
      source_code_link: "https://github.com/raghavsingh05/Eventers",
      live_link:"https://www.avantahealthcare.com/",
    },
    {
      name: "MySureShot",
      description:
        "A comprehensive travel advisor web application that helps finding nearby hotels and maps using Google Map APIs and travelling APIs .",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "REST APIs",
          color: "green-text-gradient",
        },
        {
          name: "Twailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: mysureshot,
      source_code_link: "https://github.com/raghavsingh05/Trip-advisor",
      live_link:"https://mysureshot.in/",
    },
    {
      name: "GaspazFizz",
      description:
        "A comprehensive travel advisor web application that helps finding nearby hotels and maps using Google Map APIs and travelling APIs .",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "REST APIs",
          color: "green-text-gradient",
        },
        {
          name: "Twailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: gaspaz,
      source_code_link: "https://github.com/raghavsingh05/Trip-advisor",
      live_link:"https://gaspazfizz.com/",
    },
    // {
    //   name: "HCloud Healthcare",
    //   description:
    //     "A comprehensive travel advisor web application that helps finding nearby hotels and maps using Google Map APIs and travelling APIs .",
    //   tags: [
    //     {
    //       name: "React.js",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "REST APIs",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Twailwind CSS",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: hcloud,
    //   source_code_link: "https://github.com/raghavsingh05/Trip-advisor",
    //   live_link:"https://hcloud.co.in/",
    // },
    {
      name: "Neomedix",
      description:
        "A comprehensive travel advisor web application that helps finding nearby hotels and maps using Google Map APIs and travelling APIs .",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "REST APIs",
          color: "green-text-gradient",
        },
        {
          name: "Twailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: neomedix,
      source_code_link: "https://github.com/raghavsingh05/Trip-advisor",
      live_link:"https://neomedixhealthcare.com/",
    },
    {
      name: "Ganpati Healthcare",
      description:
        "A comprehensive travel advisor web application that helps finding nearby hotels and maps using Google Map APIs and travelling APIs .",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "REST APIs",
          color: "green-text-gradient",
        },
        {
          name: "Twailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: ganpati,
      source_code_link: "https://github.com/raghavsingh05/Trip-advisor",
      live_link:"https://ganpatihealthcare.com/",
    },
    {
      name: "Affinity Healthcare",
      description:
        "A comprehensive travel advisor web application that helps finding nearby hotels and maps using Google Map APIs and travelling APIs .",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "REST APIs",
          color: "green-text-gradient",
        },
        {
          name: "Twailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: affinity,
      source_code_link: "https://github.com/raghavsingh05/Trip-advisor",
      live_link:"https://affinityhealthcare.in/",
    },
    {
      name: "Cura Institutions",
      description:
        "A comprehensive travel advisor web application that helps finding nearby hotels and maps using Google Map APIs and travelling APIs .",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "REST APIs",
          color: "green-text-gradient",
        },
        {
          name: "Twailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: cura,
      source_code_link: "https://github.com/raghavsingh05/Trip-advisor",
      live_link:"https://curainstitutions.com/",
    },
    {
      name: "VS Interior",
      description:
        "A comprehensive travel advisor web application that helps finding nearby hotels and maps using Google Map APIs and travelling APIs .",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "REST APIs",
          color: "green-text-gradient",
        },
        {
          name: "Twailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: vsinterior,
      source_code_link: "https://github.com/raghavsingh05/Trip-advisor",
      live_link:"https://vsinterior.studio/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, proprojects };