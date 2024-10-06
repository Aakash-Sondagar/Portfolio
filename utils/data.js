import { Icons } from "./icon";

export const role = {
  backend: "SDE 1 (Backend)",
  frontend: "SDE 1 (Frontend)",
  sde: "Software Engineer (SDE 1)",
};

export const description = {
  sde: `Hi 👋, I’m a **Software Engineer (SDE 1)**  with 1.5 years of experience, currently working at ***[Wohlig](https://www.wohlig.com/)***. 
    I’m passionate about building impactful softwares that solve real-world problems. 
    I’m currently learning **Full Stack Development** and **DevOps**, and I’m excited to apply my skills in the open-source community.`,

  backend: `Hi 👋, I’m an **SDE 1 (Backend)** with 1.5+ years of experience, currently working at ***[Wohlig](https://www.wohlig.com/)***. 
    I’m passionate about designing and implementing robust backend systems, Additionally, I have experience in cloud technologies. 
    I’m currently learning **Java** and **DevOps**, and I’m excited to apply my skills in the open-source community.`,

  frontend: `Hi 👋, I’m an **Frontend Software Engineer** with 1.5+ years of experience, currently working at ***[Wohlig](https://www.wohlig.com/)***. 
  I'm passionate about creating intuitive, engaging user experiences and keeping up with the latest trends in frontend development to deliver clean, maintainable code.
  I’m currently learning **Next.js**, and I’m excited to apply my skills in the open-source community.`,
};

export const profileHeader = {
  Name: "Aakash Sondagar",
  ProfilePic: "profilepic.jpg",
  ProfilePicAlt: "AS",
  ResumeLink: {
    sde: "/Aakash_Sondagar_SDE.pdf",
    backend: "/Aakash_Sondagar_Backend.pdf",
    frontend: "/Aakash_Sondagar_Frontend.pdf",
  },
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

export const Skills = {
  sde: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "SQL (MySQL, Postgres)",
    "NoSQL (MongoDB)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "GCP",
    "Terraform",
    "CI/CD",
  ],
  backend: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "SQL (MySQL, Postgres)",
    "NoSQL (MongoDB)",
    "GCP",
    "Terraform",
    "CI/CD",
  ],
  frontend: ["React.js", "Redux", "Next.js", "Tailwind CSS", "CI/CD"],
};

export const workExp = [
  {
    company: "Wohlig Transformations",
    role: "SDE 1",
    badges: ["Node", "React", "MongoDB", "Postgres", "GCP", "Terraform"],
    start: "July 2023",
    end: null,
    logoUrl:
      "https://cdn.prod.website-files.com/6481a63fb32c167045e442cf/64e32576ae89c46bfb5ed1c3_wohlighighres.webp",
    description: `Developing web solutions and contributing to software projects.`,
  },
  {
    company: "Wohlig Transformations",
    role: "SDE Intern",
    badges: ["Node", "Vue", "MongoDB"],
    start: "Jan 2022",
    end: "June 2022",
    logoUrl:
      "https://cdn.prod.website-files.com/6481a63fb32c167045e442cf/64e32576ae89c46bfb5ed1c3_wohlighighres.webp",
    description: `Developing web solutions and contributing to software projects.`,
  },
];

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
