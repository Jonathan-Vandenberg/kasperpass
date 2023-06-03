"use client";

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
import Identification from "../svg/identification";
import Residence from "../svg/residence";
import Passport from "../svg/passport";
import Bank from "../svg/bank";
import Education from "../svg/education";
import Career from "../svg/career";
import Transactions from "../svg/transactions";

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
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Identification />
                  <p>Identification</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Residence />
                  <p>Residence</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Passport />
                  <p>Passport</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Bank />
                  <p>Banking</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Education />
                  <p>Education</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Career />
                  <p>Career</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Transactions />
                  <p>Transactions</p>
                </div>
              </DropdownMenuItem>
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
