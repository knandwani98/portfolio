import React from "react";

import * as data from "@/data/header.json";
import Link from "next/link";
import { VAL } from "@/lib/constants";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { bebas } from "@/app/layout";

export const Header = () => {
  return (
    <header className="my-container">
      <div className="flex justify-between items-center px-4 mt-4 rounded-full bg-white shadow-sm">
        <Link href={"/"} className={cn(bebas.className, "text-3xl")}>
          <div className="flex justify-center items-center gap-2">
            <Button
              variant={"outline"}
              className="w-8 h-8 rounded-full border border-primary hover:bg-primary"
            />
            <Image
              className=""
              src={"/logo-black.svg"}
              alt={VAL.NAME}
              width={350}
              height={350}
            />
          </div>
        </Link>

        <nav>
          <ul className="flex justify-between items-center gap-8">
            {data.header.map((nav, i) => {
              return (
                <li key={i}>
                  <Link
                    className={cn(
                      !nav.cta &&
                        "capitalize opacity-60 hover:opacity-100 py-6 block"
                    )}
                    href={nav.link}
                  >
                    {nav.cta ? (
                      <Button
                        className={cn(
                          bebas.className,
                          "text-2xl py-6 px-12 rounded-full"
                        )}
                      >
                        {nav.label}
                      </Button>
                    ) : (
                      nav.label
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
