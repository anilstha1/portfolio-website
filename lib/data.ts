import React from "react";
import {LuGraduationCap} from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer, Krezona Tech",
    location: "Kathmandu, Nepal",
    description:
      "I worked as a full stack developer at Krezona Tech for 3 months. I worked on edtraa (a learning management system) and Krezona Tech's website and many other projects.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2024 - Sep 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Netflix Clone",
    description:
      "Designed and developed a Netflix clone that allows users to browse and view movie details.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: "/netflix-clone.png",
    githubLink: "https://github.com/anilstha1/Netflix-clone",
  },
  {
    title: "E-Shop",
    description:
      "Built an e-commerce platform with features like a shopping cart, order management system, and product listings. ",
    tags: ["React", "Javascript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/e-shop.png",
    githubLink: "https://github.com/anilstha1/ecommerce-website",
  },
  {
    title: "Pdf-helper",
    description:
      "Developed a web application enabling users to interact with PDF documents intelligently.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "React Query"],
    imageUrl: "/pdf-helper.png",
    githubLink: "https://github.com/anilstha1/pdf-helper",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C",
  "C++",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Express",
  "MongoDB",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "React Query",
  "Redux",
  "Git",
  "VsCode",
] as const;
