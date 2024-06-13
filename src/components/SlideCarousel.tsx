"use client";

import Marquee from "react-fast-marquee";
import { Card } from "./Card";

export const SlideCarousel = (props: {
  data: {
    label: string;
    icon: string;
  }[];
}) => {
  const { data } = props;

  return (
    <Marquee autoFill pauseOnClick>
      {data?.map((tech: any, i: number) => {
        return (
          <Card
            key={i}
            title={tech.label}
            titleClass={"text-primary-foreground text-sm mt-2"}
            icon={tech.icon}
            iconClass={"w-10 h-10 sm:w-16 sm:h-16"}
            className="bg-secondary-foreground mx-2 w-28 h-28 sm:h-44 sm:w-44 rounded-3xl sm:rounded-th flex flex-col items-center justify-center cursor-grab"
          />
        );
      })}
    </Marquee>
  );
};
