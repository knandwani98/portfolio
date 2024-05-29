import { cn } from "@/lib/utils";
import React from "react";
import { bebas } from "./layout";
import * as stack from "@/data/stack.json";
import * as projects from "@/data/projects.json";
import { SlideCarousel } from "@/components/SlideCarousel";
import { ProjectCard } from "@/components/ProjectCard";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="flex items-center justify-center">
        <div className="my-container">
          <h1
            className={cn(
              bebas.className,
              "text-[58px] sm:text-[180px] tracking-normal leading-none mt-16"
            )}
          >
            A full stack
            <span className="block">web app developer</span>
          </h1>

          <p className="mt-4 text-xl">
            If you&apos;re looking for a freelance developer to help bring an
            idea to life and you&apos;re on a tight timeline -- let&apos;s jam
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-16">
        <SlideCarousel data={stack.data} />
      </section>

      {/* Latest Projects */}
      {projects.data.length > 0 && (
        <section className="mt-16 bg-primary">
          <div className="my-container py-16">
            <h1
              className={cn(
                bebas.className,
                "text-9xl text-primary-foreground mb-16"
              )}
            >
              Latest Projects
            </h1>
            {projects.data.slice(0, 3).map((project, i) => (
              <ProjectCard key={i} data={project} right={i % 2 === 0} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
