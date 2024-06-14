"use client";

import React, { useState } from "react";

import * as header from "@/data/header.json";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { bebas } from "@/utils/fonts";
import { Menu, X } from "lucide-react";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  const path = usePathname();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="my-container fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 mt-4 rounded-full bg-white/60 backdrop-blur-lg border-2 border-white/40 shadow-lg">
        <div className="flex justify-center items-center gap-2 py-3 sm:py-4">
          <Button className="max-lg:hidden w-8 h-8 rounded-full border border-primary hover:bg-primary" />
          <Button
            onClick={() => setIsMobileNavOpen(true)}
            className="lg:hidden w-10 h-10 rounded-full p-0"
          >
            {isMobileNavOpen ? <X /> : <Menu />}
          </Button>
          <Link href={"/"} className="ml-2 ">
            <img
              className="h-8 sm:h-12 "
              alt="next js"
              src="/signature-black.svg"
            />
          </Link>
        </div>

        {/* Web Nav */}
        <nav className="max-lg:hidden">
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

      {/* Mobile Nav */}
      <MobileNav
        path={path}
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
    </header>
  );
};
