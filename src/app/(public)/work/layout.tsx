import React from "react";

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-primary fixed inset-0 -z-50" />
      {children}
    </>
  );
}
