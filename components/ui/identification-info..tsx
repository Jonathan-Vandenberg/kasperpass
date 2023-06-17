import React from "react";
import Container from "./container";
import { Skeleton } from "./skeleton";

export default function IdentificationInfo({ information }: any) {
  return (
    <Container>
      <div className="flex flex-col items-start justify-start space-y-3 text-gray-600">
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Name</p>
          {information.name ? (
            <p>{information.name}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Surname</p>
          {information.surname ? (
            <p>{information.surname}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>ID</p>
          {information.id ? (
            <p>{information.id}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Support</p>
          {information.support ? (
            <p>{information.support}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Address</p>
          {information.address ? (
            <p>{information.address}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Birth Date</p>
          {information.birthCertificate ? (
            <p>{information.birthCertificate}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Issuer</p>
          {information.issuer ? (
            <p>{information.issuer}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Issue Date</p>
          {information.issueDate ? (
            <p>{information.issueDate}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Expiration</p>
          {information.expirationDate ? (
            <p>{information.expirationDate}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Nationality</p>
          {information.nationality ? (
            <p>{information.nationality}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Mother</p>
          {information.mother ? (
            <p>{information.mother}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
        <div className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate ">
          <p>Father</p>
          {information.father ? (
            <p>{information.father}</p>
          ) : (
            <Skeleton className="flex items-center justify-between py-2 px-4 text-sm whitespace-nowrap space-x-2 w-full border rounded-full border-2-slate " />
          )}
        </div>
      </div>
    </Container>
  );
}
