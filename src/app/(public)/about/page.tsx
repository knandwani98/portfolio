import { cn } from "@/lib/utils";
import { bebas } from "@/utils/fonts";
import * as stack from "@/data/stack.json";
import React from "react";
import { Card } from "@/components/Card";

const About = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="my-container">
        <h1
          className={cn(
            bebas.className,
            "text-primary text-[58px] sm:text-[180px] tracking-normal leading-none mt-16 mb-4"
          )}
        >
          About Me
        </h1>

        <p>
          I&apos;m motivated full stack web developer with a strong foundation
          in front-end and back-end development. <br />
          Passionate about creating user-friendly applications and committed to
          delivering high-quality code.
          <br /> In other times, I love to design, listen music and play games.
        </p>

        <section className="py-8 sm:py-16">
          {/* <h2
            className={cn(
              bebas.className,
              "text-primary text-4xl sm:text-8xl tracking-normal leading-none mt-16"
            )}
          >
            My Skills
          </h2> */}

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2 sm:gap-4 my-8">
            {stack?.data?.map((tech: any, i: number) => {
              return (
                <Card
                  key={i}
                  title={tech.label}
                  titleClass={"text-primary-foreground text-sm mt-2"}
                  icon={tech.icon}
                  iconClass={"w-10 h-10 sm:w-16 sm:h-16"}
                  className="bg-secondary-foreground w-28 h-28 sm:h-44 sm:w-44 rounded-3xl sm:rounded-th flex flex-col items-center justify-center"
                />
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
