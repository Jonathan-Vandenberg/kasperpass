import React from "react";
import Identification from "../svg/identification";
import Transactions from "../svg/transactions";
import Career from "../svg/career";
import Education from "../svg/education";
import Passport from "../svg/passport";
import Residence from "../svg/residence";
import Banking from "../svg/bank";
import Settings from "../svg/settings";

export default function Home() {
  return (
    <div className="p-3 m-5 mx-auto flex justify-center items-center w-full bg-white drop-shadow-sm rounded-md">
      <div className="grid grid-cols-4 gap-5 w-full text-slate-700 bg-white">
        <div className="flex flex-col items-center space-y-1">
          <div className="flex justify-center text-blue-900 bg-cyan-100 rounded-full aspect-square items-center p-3">
            <Identification width={28} height={28} />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Identification
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="flex justify-center text-blue-900 bg-cyan-100 rounded-full aspect-square items-center p-3">
            <Residence width={28} height={28} />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Residence
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="flex justify-center text-blue-900 bg-cyan-100 rounded-full aspect-square items-center p-3">
            <Passport width={28} height={28} />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Passport
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="flex justify-center text-blue-900 bg-cyan-100 rounded-full aspect-square items-center p-3">
            <Banking width={28} height={28} />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Banking
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="flex justify-center text-blue-900 bg-cyan-100 rounded-full aspect-square items-center p-3">
            <Education width={28} height={28} />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Education
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="flex justify-center text-blue-900 bg-cyan-100 rounded-full aspect-square items-center p-3">
            <Career width={28} height={28} />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Career
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="flex justify-center text-blue-900 bg-cyan-100 rounded-full aspect-square items-center p-3">
            <Transactions width={28} height={28} />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Transactions
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="flex justify-center text-blue-900 bg-cyan-100 rounded-full aspect-square items-center p-3">
            <Settings width={28} height={28} />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed tracking-widest">
            Settings
          </p>
        </div>
      </div>
    </div>
  );
}
