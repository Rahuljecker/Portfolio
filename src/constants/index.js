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
    Ebooks,
    jobit,
    tripguide,
    threejs,
    Express,
    Bitcoin,
    
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
    {
      id: "project",
      title: "project",
    },
   
  ];
  
  const services = [
    {
      title: "Front-end Web Developer",
      icon: web,
    },
    {
      title: "C++ Programmer",
      icon: mobile,
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
      name: "Express",
      icon: Express,
    },
  ];
  
  const experiences = [
    {
      title: "Front End developer",
      company_name: "Acciojob",
      icon: starbucks,
      iconBg: "#383E56",
      date: "june 2022 - July 2022",
      points: [
        "Maintaining some landing page for Acciojob and help in Grow.",
        "Like share some links in social media platforms",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Good student with a great mindset and have a hunger of knowledge.",
      name: "Ramij Sekh",
      designation: "Profeesor",
      company: "CP",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Rahul has a fabulous knowlegde in web development.He helped me lot to bulid my project.",
      name: "Rohit karmakar",
      designation: "student",
      company: "MAKAUT",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Findings bugs and fixed it like rahul is not easy.He has a good knowledge of it.",
      name: "H.R mondal",
      designation: "Professor",
      company: "MAKAUT",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ebooks",
      description:
        "It is a Full fledged MERN App.here you can login,signup and payment section available by Razorpay.After the payment verification only after this you can access the course and lectures available in different categories.you can also claim refund within 7days of purchase the bundle.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Chakra UI",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
      ],
      image: Ebooks,
      source_code_link: "https://github.com/Rahuljecker/Ebooks-Frontend",
      // source_code_link_backend: "https://github.com/Rahuljecker/Ebooks-backend",
      // Deployment_link: "https://learningebooks.netlify.app"
    },
    { 
      name: "Food Corner",
      description:
        "it is a online food ordering .it has the facility for GOOGLE LOGIn and logout system.You can pay through COD and as well as Online by razorpay.You can track your order and has a dedicatetd admin section for the admin. ",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "css-3",
          color: "pink-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "Passport.js",
          color: "red-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Rahuljecker",
      // Deployment_link:"Not yet Deployed"
    },
    {
      name: "BitCoin",
      description:
        "A comprehensive bitcoin page where ypu can see the real time price and as well as currency in INR,EUR and USD and check indivisual 24h high ,low and current price",
      tags: [
        {
          name: "RESTAPI",
          color: "blue-text-gradient",
        },
        {
          name: "React js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "Chakra UI",
          color: "pink-text-gradient",
        },
      ],
      image: Bitcoin,
      source_code_link: "https://github.com/Rahuljecker",
      // Deployment_link:"https://bitcoin-sage.vercel.app"
    },
  ];
  const FooterIcons=[
    {
      name: "LinkedIn",
      icon: html,
    },
    {
      name: "Whatsapp",
      icon: css,
    },
    {
      name: "Facebook",
      icon: javascript,
    }
  ]
  export { services, technologies, experiences, testimonials, projects,FooterIcons };
  