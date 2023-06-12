"use client";

import React, { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Camera from "@/components/ui/camera";
import Container from "@/components/ui/container";

export default function Page() {
  return (
    <Container>
      <Camera />
    </Container>
  );
}
