import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Project } from "@/lib/types";
import Link from "next/link";
import { bebas } from "@/utils/fonts";

export const ProjectCard = (props: {
  data: Partial<Project>;
  right: boolean;
}) => {
  const { data, right } = props;

  return (
    <div className="flex gap-1 my-4 max-h-120">
      {/* PROJECT IMAGE CARD */}
      <Link
        target="_blank"
        href={data.links?.live || ""}
        className={cn(
          "w-[50%] lg:w-[65%] rounded-3xl sm:rounded-th overflow-hidden",
          right && "order-1"
        )}
      >
        <Image
          src={data.img || ""}
          className="w-full h-full object-cover lg:object-fill"
          alt={data.title!}
          width={1000}
          height={1000}
        />
      </Link>

      {/* PROJECT DETAILS CARD */}
      <div className="bg-primary-foreground w-[50%] lg:w-[35%] aspect-square rounded-3xl sm:rounded-th p-4  md:p-10 sm:p-16 relative">
        <>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold line-clamp-1 sm:line-clamp-2">
            {data.title}
          </h2>

          <p className="lg:mt-2 lg:mb-4 text-xs md:text-xl line-clamp-2">
            {data.description}
          </p>

          {/* <p className="text-orange-500 text-xs whitespace-nowrap max-xl:hidden">
            {data.date?.month} {data.date?.year}
          </p> */}
        </>

        <Link
          target="_blank"
          className={cn(!data.links?.github && "cursor-not-allowed")}
          href={data.links?.github || ""}
        >
          <Button
            className={cn(
              bebas.className,
              "absolute left-2 right-2 bottom-2 py-4 md:py-10 lg:py-16 rounded-3xl sm:rounded-th text-xl md:text-4xl sm:text-5xl",
              !data.links?.github && "cursor-not-allowed"
            )}
          >
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
};
