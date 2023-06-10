"use client";

import React, { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="">
      <h2>Identification Profile Page</h2>
      <Button>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}
