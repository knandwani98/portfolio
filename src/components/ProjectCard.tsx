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
    <div className="flex gap-1 my-4 relative z-20 max-h-120">
      {/* PROJECT IMAGE CARD */}
      <Link
        target="_blank"
        href={data.links?.live || ""}
        className={cn(
          "w-full sm:w-[65%] rounded-3xl sm:rounded-th overflow-hidden",
          right && "order-1"
        )}
      >
        <Image
          src={data.img || ""}
          className="w-full h-full object-fill"
          alt={data.title!}
          width={1000}
          height={1000}
        />
      </Link>

      {/* PROJECT DETAILS CARD */}
      <div className="bg-primary-foreground sm:w-[35%] w-full rounded-3xl sm:rounded-th p-8 sm:p-16 relative">
        <div>
          <h2 className="text-5xl font-semibold">{data.title}</h2>
          <p className="mt-6 line-clamp-2">{data.description}</p>
        </div>
        <Link
          target="_blank"
          className={cn(!data.links?.github && "cursor-not-allowed")}
          href={data.links?.github || ""}
        >
          <Button
            className={cn(
              bebas.className,
              "absolute left-2 right-2 bottom-2 sm:py-16 rounded-3xl sm:rounded-th  sm:text-5xl",
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
