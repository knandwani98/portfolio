import { cn } from "@/lib/utils";
import { bebas } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center py-20 relative text-secondary overflow-hidden">
        {/* Backdrop */}
        <div className="bg-primary absolute inset-0 -z-50" />
        {/* Graphics */}
        {/* <div className="absolute top-0 left-0 right-0 -z-50">
          <img
            className="mx-auto blur-sm w-full object-bottom"
            src="/strokes.png"
            alt="lights"
          />
        </div> */}

        {/* Content */}
        <section className="my-container">
          <p className={cn(bebas.className, "uppercase text-2xl max-sm:mb-2")}>
            thats all, folks!
          </p>
          <div className="flex justify-center items-center sm:my-2">
            <Link href={"/"}>
              <img
                className="h-12 sm:h-16"
                alt="next js"
                src="/signature.svg"
              />
            </Link>
          </div>
          <section className="mt-4 sm:mt-6">
            <p className={cn(bebas.className, "uppercase text-2xl")}>
              Made with
            </p>
            <div className="flex items-center justify-center gap-4 pb-4">
              {/* Next JS */}
              <Link target="_blank" href={"https://nextjs.org/"}>
                <img className="h-12" alt="next js" src="/stack/next.svg" />
              </Link>

              {/* Tailwind CSS */}
              <Link target="_blank" href={"https://tailwindcss.com/"}>
                <img
                  className="h-12"
                  alt="tailwindcss"
                  src="/stack/tailwind.svg"
                />
              </Link>

              {/* Shadcn */}
              <Link target="_blank" href={"https://ui.shadcn.com/"}>
                <img className="h-12" alt="shadcn" src="/stack/shadcn.svg" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-300">
              All logos, trademarks, and brandnames are the property of their
              respective owners. <br />
              Illustrations by
              <Link
                target="_blank"
                className="mx-1 text-secondary font-semibold"
                href={"https://www.svgrepo.com/"}
              >
                SVG Repo
              </Link>
              | Icons from
              <Link
                target="_blank"
                className="mx-1 text-secondary font-semibold"
                href={"https://lucide.dev/icons/"}
              >
                Lucide
              </Link>
            </p>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
