import { cn } from "@/lib/utils";
import React from "react";
import { bebas } from "./layout";
import * as data from "@/data/stack.json";

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

          <p className="font-black mt-4 text-xl">
            If you&apos;re looking for a freelance developer to help bring an
            idea to life and you&apos;re on a tight timeline -- let&apos;s jam
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-16">
        <div className="my-container">
          <ul className="flex justify-start items-center gap-4 flex-wrap">
            {data.stack.map((tech, i) => {
              return (
                <li key={i}>
                  <div className="h-60 w-60 bg-secondary-foreground rounded-3xl flex flex-col items-center justify-center">
                    <img
                      className="w-20 h-20"
                      src={tech.icon}
                      alt={tech.label}
                    />
                    <span className="text-primary-foreground mt-4">
                      {tech.label}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
