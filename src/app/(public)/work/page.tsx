import { cn } from "@/lib/utils";
import React from "react";
import * as projects from "@/data/projects.json";
import { ProjectCard } from "@/components/ProjectCard";
import { bebas } from "@/utils/fonts";

const Work = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="my-container">
        <h1
          className={cn(
            bebas.className,
            "text-secondary text-[58px] sm:text-[180px] tracking-normal leading-none mt-16"
          )}
        >
          My Work
        </h1>

        <div className="sm:mb-20">
          {projects.data.map((project, i) => (
            <ProjectCard key={i} data={project} right={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
