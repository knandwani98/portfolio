import { cn } from "@/lib/utils";
import React from "react";

export const Backdrop = (props: { theme?: "white" | "black" }) => {
  const { theme = "white" } = props;

  return (
    <div
      className={cn(
        "fixed inset-0 -z-50",
        theme === "white" ? "noise-white" : "noise-black"
      )}
    ></div>
  );
};
