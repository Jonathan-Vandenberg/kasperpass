// "use client";

// import React, { useState } from "react";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function Page() {
//   const [source, setSource] = useState("");

//   const hiddenFileInput = React.useRef(null);

//   const handleCapture = (target: EventTarget & HTMLInputElement) => {
//     if (target.files) {
//       if (target.files.length !== 0) {
//         const file = target.files[0];
//         const newUrl = URL.createObjectURL(file);
//         setSource(newUrl);
//         console.log("url: " + newUrl);
//         console.log("sourceUrl: " + source);
//       }
//     }
//   };

//   return (
//     <div className="">
//       <h2>Identification Page</h2>
//       <Button>
//         <Link href="/">Home</Link>
//       </Button>
//       <div className="h-full text-center">
//         <div>
//           <div>
//             <h5>Capture your image</h5>
//             {source && (
//               <div className="flex justify-center w-36 h-36 bg-gray-400">
//                 <img src={source} alt={"snap"} className="h-36 w-36" />
//               </div>
//             )}
//             <input
//               accept="image/*"
//               className=""
//               type="file"
//               capture="environment"
//               ref={hiddenFileInput}
//               onChange={(e) => handleCapture(e.target)}
//             />
//             <label>
//               <button aria-label="upload picture">Camera Icon here</button>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function QRScanner() {
  const [qrData, setQrData] = useState("");

  const handleScan = (data: string | null) => {
    if (data) {
      setQrData(data);
    }
  };

  const handleError = (error: Error) => {
    console.error(error);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      {qrData && <p>Scanned QR code: {qrData}</p>}
    </div>
  );
}
