import React from "react";

export const Card = (props: {
  title: string;
  icon?: string;
  iconComponent?: React.ReactNode;
  className: string;
  titleClass?: string;
  iconClass?: string;
}) => {
  const { title, icon, iconComponent, className, titleClass, iconClass } =
    props;
  return (
    <div className={className}>
      {iconComponent ? (
        <>{iconComponent}</>
      ) : (
        <img className={iconClass} src={icon} alt={title} />
      )}
      <span className={titleClass}>{title}</span>
    </div>
  );
};
