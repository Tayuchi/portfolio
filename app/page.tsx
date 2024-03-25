import React from "react";
import Header from "@/components/body/header";
import About from "@/components/body/about";
import Works from "@/components/body/works";
import Skills from "@/components/body/skills";
import { ContactForm } from "@/components/body/contact";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <About />
        <Works />
        <Skills />
        <ContactForm />
      </main>
    </div>
  );
}
