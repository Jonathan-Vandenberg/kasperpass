"use client";
import QrScanner from "@/components/ui/QrScanner";
import Container from "@/components/ui/container";
import MediaDevices from "@/components/ui/MediaDevices";
import Result from "@zxing/library/esm/core/Result";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GenerateQRCode from "../utilities/generateQRCode";
import CameraComponent from "@/components/ui/profile-selfie";
import { captureAndSendImage } from "api/profile-image";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  const [data, setData] = useState<Result>();
  const [decode, setDecode] = useState("");

  const handleCapture = (imageData: any) => {
    captureAndSendImage();
    console.log(imageData);
  };

  const navigateToPersonalId = () => {
    router.push(decode);
  };

  return (
    <div className="h-full w-full">
      <QrScanner
        onResult={(result) => {
          setData(result);
          setTimeout(() => {
            navigateToPersonalId();
          }, 1000);
        }}
        onDecode={(decode) => {
          const userInfo = JSON.stringify(decode);
          setDecode(userInfo);
        }}
        onError={(error) => {
          console.log("onError" + error?.message);
        }}
      />
      <>
        <Link href="/identification/personal-id">Go to Personal ID</Link>
        <button onClick={navigateToPersonalId}>
          Go to Personal ID (via function)
        </button>
      </>
      ;{/* <GenerateQRCode /> */}
    </div>
  );
}
