"use client";

import React, { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Camera() {
  const [source, setSource] = useState("");

  const hiddenFileInput = React.useRef(null);

  const handleCapture = (target: EventTarget & HTMLInputElement) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
        console.log("url: " + newUrl);
        console.log("sourceUrl: " + source);
      }
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pt-12">
      {source && (
        <div className="flex justify-center bg-gray-400 w-[80vw] rounded-full">
          {source != "" ? (
            <Image src={source} alt={"snap"} width={720} height={720} />
          ) : (
            <div className="w-72 h-72 bg-green flex items-center justify-center">
              HI
            </div>
          )}
        </div>
      )}
      <div className="hidden">
        <input
          accept="image/*"
          size={60}
          className=""
          id="file-upload"
          type="file"
          capture="environment"
          ref={hiddenFileInput}
          onChange={(e) => handleCapture(e.target)}
        />
      </div>
      <label
        className="mt-36 custom-file-upload px-7 py-4 text-thin rounded-full border-2 border-gray-200 bg-cyan-800 text-white"
        htmlFor="file-upload"
      >
        Upload picture
      </label>
    </div>
  );
}
