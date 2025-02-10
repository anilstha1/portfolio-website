"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I'm Anil Shrestha, a Full Stack Developer with experience in
        building web applications using JavaScript, TypeScript, React.js,
        Next.js, Node.js, and MongoDB. At Krezona Tech, I helped develop
        websites and improve performance. I enjoy creating user-friendly and
        efficient applications and always look forward to learning new things.
      </p>
    </motion.section>
  );
}
