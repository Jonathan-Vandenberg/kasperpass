"use client";

import Link from "next/link";
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
import Settings from "../svg/settings";
import Wallet from "../svg/wallet";
import Help from "../svg/help";

// SVGs from Lucide

export default function Nav() {
  return (
    <div className="h-[80px] w-full flex items-center justify-between px-5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <LeftHamburger />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-5 py-4 px-2 mt-3 w-64">
          <DropdownMenuLabel>Triana Sofía González</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-200" />
          <div className="space-y-5 text-slate-500 flex flex-col">
            <Link href="/identification">
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Identification />
                  <p>ID</p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href="/residence">
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Residence />
                  <p>Passport</p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href="/passport">
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Passport />
                  <p>Passport</p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href="/banking">
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Bank />
                  <p>Driving License</p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href="education">
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Education />
                  <p>Visa</p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href="/career">
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Career />
                  <p>CC</p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href="/transactions">
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Transactions />
                  <p>Birth Cert.</p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href="/wallet">
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Wallet />
                  <p>Council Reg.</p>
                </div>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator className="bg-gray-200" />
            <Link href="/settings">
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Settings />
                  <p>Settings</p>
                </div>
              </DropdownMenuItem>
            </Link>
            <Link href="/help">
              <DropdownMenuItem>
                <div className="space-x-2 flex">
                  <Help />
                  <p>Help</p>
                </div>
              </DropdownMenuItem>
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <p className="tracking-widest text-3xl text-transparent bg-clip-text bg-gradient-to-r from-navGradient-start to-navGradient-end">
        <strong>KasperPass</strong>
      </p>

      {/* <div className="flex items-center space-x-1">
        <div className="relative">
          <div className="text-black">
            <Shield />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black pb-1">
            <Boxes />
          </div>
        </div>
      </div> */}

      <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
        <Image
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
