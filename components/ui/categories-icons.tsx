import React, { ReactElement, ReactNode } from "react";
import Settings from "../svg/settings";
import Career from "../svg/career";
import Education from "../svg/education";
import Identification from "../svg/identification";
import Passport from "../svg/passport";
import Residence from "../svg/residence";
import Transactions from "../svg/transactions";
import Banking from "../svg/bank";
import Card from "./card";
import Link from "next/link";
import Wallet from "../svg/wallet";

export function Icon({
  title,
  children,
  href,
}: {
  title: string;
  children: ReactNode;
  href?: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <Link href="/identification">
        <div className="flex justify-center text-sky-500 bg-cyan-100 rounded-full aspect-square items-center p-3">
          {children}
        </div>
      </Link>
      <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default function CategoriesIcons() {
  return (
    <Card>
      <div className="grid grid-cols-4 gap-5 w-full text-slate-700 bg-white">
        <Icon title="Identification" href="/identification">
          <Identification width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Banking" href="/banking">
          <Banking width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Residence" href="/residence">
          <Residence width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Passport" href="/passport">
          <Passport width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Education" href="/education">
          <Education width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Career" href="/career">
          <Career width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Transactions" href="/transactions">
          <Transactions width={28} height={28} stroke={1.3} />
        </Icon>
        <Icon title="Wallet" href="/wallet">
          <Wallet width={28} height={28} stroke={1.3} />
        </Icon>
      </div>
    </Card>
  );
}
