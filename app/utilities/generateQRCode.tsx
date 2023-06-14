import React from "react";
import QRCode from "react-qr-code";

export default function GenerateQRCode() {
  const d = new Date();
  let date = d.toString();
  var futureDate = d.getMonth() + 4;

  const userInfo = {
    name: "Jonathan Charles",
    surname: "van den Berg",
    ID: "839103741291",
    support: "0839283733",
    address: "123 Happy Street",
    birthCertificate: "143123123",
    issuer: "Issued by the Spanish Government",
    issueDate: date,
    expirationDate: futureDate,
    nationality: "Spanish",
    mother: "Nicole Margaret van den Berg",
    father: "Charles Hendrik van den Berg",
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
