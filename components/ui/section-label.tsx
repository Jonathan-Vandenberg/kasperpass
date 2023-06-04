import React from "react";

export default function SectionLabel({ title }: { title: string }) {
  return (
    <div className="w-full px-3 py-5 text-slate-600 tracking-wide">{title}</div>
  );
}
