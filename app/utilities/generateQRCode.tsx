import React from "react";
import QRCode from "react-qr-code";

export default function GenerateQRCode() {
  const userInfo = {
    name: "Jon",
    age: "39",
    ID: "839103741291",
  };
  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={JSON.stringify(userInfo)}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}
