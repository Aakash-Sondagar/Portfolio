import { Icons } from "./icon";

export const role = {
  backend: "Backend Engineer",
  frontend: "Frontend Engineer",
  sde: "Software Engineer",
};

export const description = {
  sde: `Hi 👋, I’m a **Software Engineer** with 1+ years of experience, currently working at **[Wohlig](https://www.wohlig.com/)**. 
    I’m passionate about building impactful solutions and staying up-to-date with the latest technologies in software development. 
    I’m currently diving into DevOps while also contributing to the open-source community.`,

  backend: `I’m a **Backend Software Engineer** with 1+ years of experience, currently working at **[Wohlig](https://www.wohlig.com/)**. 
    I specialize in building efficient, scalable solutions using Node.js, Express, MongoDB, and Postgres. 
    I’m passionate about backend architecture, database optimization, and cloud technologies, 
    and I’m also exploring DevOps to optimize deployment processes and enhance system security.`,
  frontend: `Hi 👋, I’m a **Frontend Software Engineer** with 1+ years of experience, currently working at **[Wohlig](https://www.wohlig.com/)**. 
    I focus on crafting dynamic, responsive user interfaces using React, Next.js, and TailwindCSS. 
    I’m passionate about creating intuitive, engaging user experiences and keeping up with the latest trends in frontend development to deliver clean, maintainable code`,
};

export const profileHeader = {
  Name: "Aakash Sondagar",
  ProfilePic: "profilepic.jpg",
  ProfilePicAlt: "AS",
  ResumeLink: "/Aakash_Sondagar_Resume.pdf",
  social: [
    {
      name: "Email",
      link: "mailto:aakashsondar@gmail.com",
      icon: Icons.email,
    },
    {
      name: "GitHub",
      link: "https://github.com/Aakash-Sondagar",
      icon: Icons.github,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/aakash-sondagar/",
      icon: Icons.linkedin,
    },
  ],
};

export const workExp = [
  {
    company: "Wohlig Transformations",
    title: "Software Development Engineer",
    href: "https://www.wohlig.com",
    badges: ["Node", "React", "MongoDB", "Postgres", "GCP", "Terraform"],
    start: "July 2023",
    end: null,
    logoUrl:
      "https://cdn.prod.website-files.com/6481a63fb32c167045e442cf/64e32576ae89c46bfb5ed1c3_wohlighighres.webp",
    description: `Developing web solutions and contributing to software projects.`,
  },
  {
    company: "Wohlig Transformations",
    title: "Software Development Engineer Intern",
    href: "https://www.wohlig.com",
    badges: ["Node", "Vue", "MongoDB"],
    start: "Jan 2022",
    end: "June 2022",
    logoUrl:
      "https://cdn.prod.website-files.com/6481a63fb32c167045e442cf/64e32576ae89c46bfb5ed1c3_wohlighighres.webp",
    description: `Developing web solutions and contributing to software projects.`,
  },
];

export const Skills = {
  sde: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "React.js",
    "Tailwind CSS",
    "SQL",
    "NoSQL",
    "Git & Github",
    "GCP",
    "Terraform",
    "CI/CD",
  ],
};

export const educationDetails = [
  {
    school: "Sardar Patel Institute of Technology ",
    href: "https://www.spit.ac.in/",
    degree: "B.Tech Information Technology",
    logoUrl:
      "https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png",
    start: "2019",
    end: "2023",
  },
];
