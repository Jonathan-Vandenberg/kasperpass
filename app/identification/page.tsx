"use client";

import QrScanner from "@/components/ui/QrScanner";
import Container from "@/components/ui/container";
import MediaDevices from "@/components/ui/MediaDevices";
import Result from "@zxing/library/esm/core/Result";

import { useState } from "react";
import GenerateQRCode from "../utilities/generateQRCode";
import CameraComponent from "@/components/ui/profile-selfie";
import { captureAndSendImage } from "api/profile-image";

export default function Page() {
  const [data, setData] = useState<Result>();
  const [decode, setDecode] = useState({
    name: "",
    surname: "",
    ID: "",
    support: "",
    address: "",
    birthCertificate: "",
    issuer: "",
    issueDate: "",
    expirationDate: "",
    nationality: "",
    mother: "",
    father: "",
  });

  const handleCapture = (imageData: any) => {
    captureAndSendImage();
    console.log(imageData);
  };

  return (
    <div className="h-full w-full">
      <QrScanner
        onResult={(result) => {
          setData(result);
        }}
        onDecode={(decode) => {
          const userInfo = JSON.parse(decode);
          setDecode(userInfo);
        }}
        onError={(error) => {
          console.log("onError" + error?.message);
        }}
      />
      <Container className="max-w-screen">
        {/* <CameraComponent onCapture={handleCapture} /> */}
        <>
          <MediaDevices />
          <p>Name: {decode.name}</p>
          <p>Surname: {decode.surname}</p>
          <p>ID: {decode.ID}</p>
          <p>Support: {decode.support}</p>
          <p>Address: {decode.address}</p>
          <p>Birth Certificate: {decode.birthCertificate}</p>
          <p>Issuer: {decode.issuer}</p>
          <p>issueDate: {decode.issueDate}</p>
          <p>Expiration Date: {decode.expirationDate}</p>
          <p>Nationality: {decode.nationality}</p>
          <p>Mother: {decode.mother}</p>
          <p>Father: {decode.father}</p>
        </>
      </Container>
      {/* <GenerateQRCode /> */}
    </div>
  );
}
