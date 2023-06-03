"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import LeftHamburger from "../svg/left-hamburger";
import Shield from "../svg/shield";
import Boxes from "../svg/boxes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import image from "public/latina.png";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="h-[161px] w-full bg-gradient-to-r from-navGradient-start to-navGradient-end px-3 flex flex-col items-center justify-evenly">
      <div className="flex items-center justify-between w-full">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <LeftHamburger />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-5 py-4 px-2">
            <DropdownMenuLabel className="">
              Triana Sofía González
            </DropdownMenuLabel>
            <div className="space-y-2">
              <DropdownMenuSeparator />
              <DropdownMenuItem>Identification</DropdownMenuItem>
              <DropdownMenuItem>Residence</DropdownMenuItem>
              <DropdownMenuItem>Passport</DropdownMenuItem>
              <DropdownMenuItem>Banking</DropdownMenuItem>
              <DropdownMenuItem>Education</DropdownMenuItem>
              <DropdownMenuItem>Career</DropdownMenuItem>
              <DropdownMenuItem>Transactions</DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <p className="font-medium tracking-widest text-md text-white">Home</p>

        <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            src={image}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <div className="relative">
          <div className="text-white mt-1">
            <Shield />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <Boxes />
          </div>
        </div>
        <p className="font-medium tracking-widest text-2xl text-white">
          KasperPass
        </p>
      </div>
    </div>
  );
}
