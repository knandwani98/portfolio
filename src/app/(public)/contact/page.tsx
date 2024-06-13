import { Card } from "@/components/Card";
import { cn } from "@/lib/utils";
import { bebas } from "@/utils/fonts";
import React from "react";
import * as socials from "@/data/socials.json";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="my-container">
        <h1
          className={cn(
            bebas.className,
            "text-primary text-[58px] sm:text-[180px] tracking-normal leading-none mt-16 mb-12"
          )}
        >
          My Socials
        </h1>

        <section className="mb-20">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:md:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4 my-8">
            {socials?.data?.map((link: any, i: number) => {
              return (
                link.url && (
                  <Link target="_blank" key={i} href={link.url}>
                    <Card
                      title={link.label}
                      titleClass={
                        "text-primary-foreground capitalize text-sm mt-4"
                      }
                      icon={link.icon}
                      iconClass={"w-10 h-10 sm:w-16 sm:h-16"}
                      className="bg-secondary-foreground w-28 h-28 sm:h-44 sm:w-44 rounded-3xl sm:rounded-th flex flex-col items-center justify-center"
                    />
                  </Link>
                )
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
