import classNames from "classnames";
import React, { ReactElement } from "react";

export default function Card({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "p-5 mx-auto flex justify-center items-center w-full bg-white drop-shadow-sm rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
}
