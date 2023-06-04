import React, { ReactElement } from "react";

export default function card({ children }: { children: ReactElement }) {
  return (
    <div className="p-5 mx-auto flex justify-center items-center w-full bg-white drop-shadow-sm rounded-md">
      {children}
    </div>
  );
}
