import { cn } from "@/lib/utils";
import { bebas } from "@/utils/fonts";
import React from "react";

const Blog = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="my-container">
        <h1
          className={cn(
            bebas.className,
            "text-primary text-[58px] sm:text-[180px] tracking-normal leading-none mt-16"
          )}
        >
          Contact
        </h1>
      </div>
    </section>
  );
};

export default Blog;
