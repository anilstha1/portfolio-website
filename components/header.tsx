"use client";

import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {links} from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import {useActiveSectionContext} from "@/context/active-section-context";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export default function Header() {
  const {activeSection, setActiveSection, setTimeOfLastClick} =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{y: -100, x: "-50%", opacity: 0}}
        animate={{y: 0, x: "-50%", opacity: 1}}
      ></motion.div>

      <button
        className="sm:hidden fixed top-4 right-4 z-[1000] p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <AiOutlineClose className="w-6 h-6 text-gray-900 dark:text-gray-100" />
        ) : (
          <AiOutlineMenu className="w-6 h-6 text-gray-900 dark:text-gray-100" />
        )}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{x: "100%"}}
            animate={{x: 0}}
            exit={{x: "100%"}}
            transition={{type: "spring", damping: 20}}
            className="fixed top-0 right-0 h-screen w-full bg-white dark:bg-gray-950 shadow-lg z-[998] sm:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full">
              <ul className="flex flex-col items-center gap-5 text-[0.9rem] font-medium text-gray-500">
                {links.map((link) => (
                  <motion.li
                    className="relative"
                    key={link.hash}
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                  >
                    <Link
                      className={`flex w-full items-center justify-center px-3 py-3 text-lg hover:text-gray-950 transition dark:hover:text-gray-300 ${
                        activeSection === link.name
                          ? "text-gray-950 dark:text-gray-200"
                          : "dark:text-gray-500"
                      }`}
                      href={link.hash}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}
            >
              <Link
                className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300 ${
                  activeSection === link.name
                    ? "text-gray-950 dark:text-gray-200"
                    : "dark:text-gray-500"
                }`}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
