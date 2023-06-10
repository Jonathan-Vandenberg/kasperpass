// "use client";

// import React, { useState } from "react";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function Camera() {
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
//     <div>
//       <Button>
//         <Link href="/">Home</Link>
//       </Button>
//       <div className="h-full text-center">
//         <div>
//           <div className="w-full">
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
