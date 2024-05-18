"use client";

import React from "react";
import Link from "next/link";
import { useRef } from "react";
import About from "@/components/layouts/about";
import Works from "@/components/layouts/works";
import Skills from "@/components/layouts/skills";
import Contact from "@/components/layouts/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const scrollaboutRef = useRef<HTMLDivElement>(null);
  const scrollworksRef = useRef<HTMLDivElement>(null);
  const scrollskillsRef = useRef<HTMLDivElement>(null);
  const scrollcontactRef = useRef<HTMLDivElement>(null);
  const scrollAbout = () => {
    scrollaboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const scrollWorks = () => {
    scrollworksRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const scrollSkills = () => {
    scrollskillsRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const scrollContact = () => {
    scrollcontactRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <main className="mx-auto">
        <nav className="divide-y border-gray-200 dark:border-gray-800 border-b fixed w-full top-0 bg-white dark:bg-gray-800 z-10 card">
          <div className="px-4 py-3 md:py-6 lg:px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
                <Link href="/" className="text-2xl font-bold tracking-tighter mr-4">
                  Tayu
                </Link>
                <nav className="flex items-center space-x-6 text-sm">
                  <button 
                    onClick={() => scrollAbout()}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    About
                  </button>
                  <Separator orientation='vertical'/>
                  <button
                    className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    onClick={() => scrollWorks()}
                    >
                    Works
                  </button>
                  <Separator orientation='vertical'/>
                  <button
                    className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    onClick={() => scrollSkills()}
                    >
                    Skills
                  </button>
                  <Separator orientation='vertical'/>
                  <button
                    className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    onClick={() => scrollContact()}
                    >
                    Contact
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div ref={scrollaboutRef}>
            <About />
          </div>
          <div ref={scrollworksRef}>
            <Works />
          </div>
          <div ref={scrollskillsRef}>
            <Skills />
          </div>
          <div ref={scrollcontactRef}>
            <Contact />
          </div>
        </div>
        <div className='font-small text-gray-500 transition-colors flex flex-col items-center justify-between border-gray-200 dark:border-gray-800 border-t w-full bg-whitedark:bg-gray-800 p-2'>
            &copy;2024 Tayu 
        </div>
      </main>
    </div>
  );
}
