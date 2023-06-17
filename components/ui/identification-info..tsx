import React from "react";
import Container from "./container";
import { Skeleton } from "./skeleton";

export default function IdentificationInfo({ information }: any) {
  return (
    <Container>
      <div className="flex flex-col items-start justify-start space-y-3 text-gray-600">
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Name</p>
          {information.name ? (
            <p>{information.name}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Surname</p>
          {information.surname ? (
            <p>{information.surname}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>ID</p>
          {information.ID ? (
            <p>{information.ID}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Support</p>
          {information.support ? (
            <p>{information.support}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Address</p>
          {information.address ? (
            <p>{information.address}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Birth Date</p>
          {information.birthCertificate ? (
            <p>{information.birthCertificate}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Issuer</p>
          {information.issuer ? (
            <p>{information.issuer}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Issue Date</p>
          {information.issueDate ? (
            <p>{information.issueDate}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Expiration</p>
          {information.expirationDate ? (
            <p>{information.expirationDate}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Nationality</p>
          {information.nationality ? (
            <p>{information.nationality}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Mother</p>
          {information.mother ? (
            <p>{information.mother}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
        <div className="flex items-center justify-between border border-1-gray rounded-full px-4 py-3 w-full whitespace-nowrap">
          <p>Father</p>
          {information.father ? (
            <p>{information.father}</p>
          ) : (
            <Skeleton className="w-3/5 h-[20px] bg-gray-100 rounded-full" />
          )}
        </div>
      </div>
    </Container>
  );
}
