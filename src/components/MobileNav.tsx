"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import * as header from "@/data/header.json";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { bebas } from "@/utils/fonts";

export const MobileNav = (props: {
  path: string;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: any;
}) => {
  useEffect(() => {
    if (props.isMobileNavOpen) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [props.isMobileNavOpen]);

  return (
    props.isMobileNavOpen && (
      <section className="w-full h-dvh fixed inset-0 z-10 bg-black/30 backdrop-blur-sm">
        <div className="w-4/5 min-h-screen bg-white rounded-r-xl">
          <Button
            onClick={() => props.setIsMobileNavOpen(false)}
            className="bg-transparent lg:hidden rounded-full p-0 z-50 fixed top-4 right-4"
          >
            <X className="w-8 h-8 font-black" />
          </Button>

          <nav>
            <ul className="flex flex-col justify-center items-center gap-8 py-20">
              {/* Home */}
              <li>
                <Link
                  href={"/"}
                  onClick={() => props.setIsMobileNavOpen(false)}
                >
                  <img
                    className="h-8 sm:h-12"
                    alt="next js"
                    src="/signature-black.svg"
                  />
                </Link>
              </li>

              {header.data.map((nav, i) => {
                return (
                  <li key={i}>
                    <Link
                      className={cn(
                        !nav.cta && "capitalize block",
                        props.path === nav.link && "opacity-100 font-semibold"
                      )}
                      href={nav.link}
                      onClick={() => props.setIsMobileNavOpen(false)}
                    >
                      {nav.cta ? (
                        <Button
                          className={cn(
                            bebas.className,
                            "grid place-content-center text-2xl py-6 px-12 rounded-full"
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
      </section>
    )
  );
};
