"use client";

import Marquee from "react-fast-marquee";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const SlideCarousel = (props: {
  data: {
    label: string;
    icon: string;
  }[];
}) => {
  const { data } = props;

  return (
    <Marquee autoFill>
      {data?.map((tech: any, i: number) => {
        return (
          <Card
            key={i}
            title={tech.label}
            titleClass={"text-primary-foreground text-sm mt-4"}
            icon={tech.icon}
            iconClass={"w-16 h-16"}
            className="bg-secondary-foreground mx-2 h-44 min-w-44 rounded-3xl sm:rounded-th flex flex-col items-center justify-center"
          />
        );
      })}
    </Marquee>
  );
};
