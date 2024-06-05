"use client";

import React from "react";

import * as header from "@/data/header.json";
import Link from "next/link";
import { VAL } from "@/lib/constants";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { bebas } from "@/utils/fonts";

export const Header = () => {
  const path = usePathname();

  return (
    <header className="my-container relative z-10">
      <div className="flex justify-between items-center px-4 mt-8 rounded-full bg-white shadow">
        <div className="flex justify-center items-center gap-2">
          <Button className="w-8 h-8 rounded-full border border-primary hover:bg-primary" />
          <Link href={"/"} className="ml-2">
            <Image
              src={"/logo-black.svg"}
              alt={VAL.NAME}
              width={350}
              height={350}
            />
          </Link>
        </div>

        <nav>
          <ul className="flex justify-between items-center gap-8">
            {header.data.map((nav, i) => {
              return (
                <li key={i}>
                  <Link
                    className={cn(
                      !nav.cta &&
                        "capitalize opacity-60 hover:opacity-100 py-6 block",
                      path === nav.link && "opacity-100 font-semibold"
                    )}
                    href={nav.link}
                  >
                    {nav.cta ? (
                      <Button
                        className={cn(
                          bebas.className,
                          "hidden sm:grid sm:place-content-center text-2xl py-6 px-12 rounded-full"
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
