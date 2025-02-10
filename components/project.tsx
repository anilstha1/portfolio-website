"use client";

import {useRef} from "react";
import {projectsData} from "@/lib/data";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {FaGithub} from "react-icons/fa";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group max-w-lg border border-black/5 rounded-lg overflow-hidden"
    >
      <section className="bg-gray-100 relative flex flex-col hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <Image
          src={imageUrl || ""}
          alt="Project I worked on"
          width={1920}
          height={945}
          className="w-full aspect-video rounded-t-lg shadow-2xl transition delay-100 ease-in-out group-hover:scale-110"
        />

        <div className="pt-4 pb-7 px-5 sm:px-8 sm:pt-10 flex flex-col">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center px-8">
          <Link
            href={githubLink}
            target="_blank"
            className="flex items-center text-white py-3 px-7 mb-6 rounded-full bg-gray-900 hover:bg-gray-950"
          >
            Github
            <FaGithub size={24} className="ml-4" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
