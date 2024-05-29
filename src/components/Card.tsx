import Image from "next/image";
import React from "react";

export const Card = (props: {
  title: string;
  icon: string;
  className: string;
  titleClass?: string;
  iconClass?: string;
}) => {
  const { title, icon, className, titleClass, iconClass } = props;
  return (
    <div className={className}>
      <img className={iconClass} src={icon} alt={title} />
      <span className={titleClass}>{title}</span>
    </div>
  );
};
