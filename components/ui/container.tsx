import classNames from "classnames";
import React, { ReactElement } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) {
  return (
    <div className={classNames("px-3 py-6", { className })}>{children}</div>
  );
}
