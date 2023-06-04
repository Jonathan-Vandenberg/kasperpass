import React from "react";
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

export default function CategoriesIcons() {
  return (
    <Card>
      <div className="grid grid-cols-4 gap-5 w-full text-slate-700 bg-white">
        <div className="flex flex-col items-center space-y-1">
          <Link href="/identification">
            <div className="flex justify-center text-sky-500 bg-cyan-100 rounded-full aspect-square items-center p-3">
              <Identification width={28} height={28} stroke={1.3} />
            </div>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Identification
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Link href="/banking">
            <div className="flex justify-center text-sky-500 bg-cyan-100 rounded-full aspect-square items-center p-3">
              <Banking width={28} height={28} stroke={1.3} />
            </div>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Banking
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Link href="/residence">
            <div className="flex justify-center text-sky-500 bg-cyan-100 rounded-full aspect-square items-center p-3">
              <Residence width={28} height={28} stroke={1.3} />
            </div>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Residence
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Link href="/passport">
            <div className="flex justify-center text-sky-500 bg-cyan-100 rounded-full aspect-square items-center p-3">
              <Passport width={28} height={28} stroke={1.3} />
            </div>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Passport
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Link href="/education">
            <div className="flex justify-center text-sky-500 bg-cyan-100 rounded-full aspect-square items-center p-3">
              <Education width={28} height={28} stroke={1.3} />
            </div>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Education
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Link href="/career">
            <div className="flex justify-center text-sky-500 bg-cyan-100 rounded-full aspect-square items-center p-3">
              <Career width={28} height={28} stroke={1.3} />
            </div>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Career
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Link href="/transactions">
            <div className="flex justify-center text-sky-500 bg-cyan-100 rounded-full aspect-square items-center p-3">
              <Transactions width={28} height={28} stroke={1.3} />
            </div>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Transactions
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Link href="/settings">
            <div className="flex justify-center text-sky-500 bg-cyan-100 rounded-full aspect-square items-center p-3">
              <Settings width={28} height={28} stroke={1.3} />
            </div>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Settings
          </p>
        </div>
      </div>
    </Card>
  );
}
