if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>c(e,a),f={module:{uri:a},exports:t,require:r};s[a]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SKuDFQ2pek0scfckp6p2P/_buildManifest.js",revision:"8ae8d7690cc06544c92639efa715113d"},{url:"/_next/static/SKuDFQ2pek0scfckp6p2P/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0895380a-3d8df7a317469a50.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/1049.3876f851248e21fa.js",revision:"3876f851248e21fa"},{url:"/_next/static/chunks/1400.a8905f71b06eb200.js",revision:"a8905f71b06eb200"},{url:"/_next/static/chunks/1695-525d7d66c25c2968.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/2267.8e925670c617090f.js",revision:"8e925670c617090f"},{url:"/_next/static/chunks/2443530c-a0bc8f847a38397b.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/2903.c0492bc3ed3d52a8.js",revision:"c0492bc3ed3d52a8"},{url:"/_next/static/chunks/3581.7f30a3f313f0d6ff.js",revision:"7f30a3f313f0d6ff"},{url:"/_next/static/chunks/3976.a2433ff7a8125f1c.js",revision:"a2433ff7a8125f1c"},{url:"/_next/static/chunks/3978.2172d0f7456c19e9.js",revision:"2172d0f7456c19e9"},{url:"/_next/static/chunks/41c1353d-685ed9254880b267.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/4222.aeeb8e2c696b3243.js",revision:"aeeb8e2c696b3243"},{url:"/_next/static/chunks/4722a755.dda381803c12cc46.js",revision:"dda381803c12cc46"},{url:"/_next/static/chunks/5411.be1d20e5372cd04c.js",revision:"be1d20e5372cd04c"},{url:"/_next/static/chunks/5422-081e1d293e3e63e6.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/5538.c9c9e667d7f58f78.js",revision:"c9c9e667d7f58f78"},{url:"/_next/static/chunks/6458-9062cb4d4866cfdc.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/6721-e4ec7870f555ef2c.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/6786.027a726432251cfa.js",revision:"027a726432251cfa"},{url:"/_next/static/chunks/6982.ac2254475e973f3e.js",revision:"ac2254475e973f3e"},{url:"/_next/static/chunks/7141.ab5fcd14b029933e.js",revision:"ab5fcd14b029933e"},{url:"/_next/static/chunks/7264-639eeeb20111732c.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/7384.f7e5da9557281b21.js",revision:"f7e5da9557281b21"},{url:"/_next/static/chunks/7429.033363bb232cfdc6.js",revision:"033363bb232cfdc6"},{url:"/_next/static/chunks/776.bbd10018e8371e17.js",revision:"bbd10018e8371e17"},{url:"/_next/static/chunks/7872.4feefa6b568ba202.js",revision:"4feefa6b568ba202"},{url:"/_next/static/chunks/7918.734108d08b9c9765.js",revision:"734108d08b9c9765"},{url:"/_next/static/chunks/7977.197ca08da261f69d.js",revision:"197ca08da261f69d"},{url:"/_next/static/chunks/8096.33a9a4c9b65acacc.js",revision:"33a9a4c9b65acacc"},{url:"/_next/static/chunks/8230.4e87d6db98227dd1.js",revision:"4e87d6db98227dd1"},{url:"/_next/static/chunks/8848.4b2ef2d9fe2cf56c.js",revision:"4b2ef2d9fe2cf56c"},{url:"/_next/static/chunks/8920-336ade390e72d3cd.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/9602-d49f2231b1996e2e.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/9824.a48e7242a1fb9ae9.js",revision:"a48e7242a1fb9ae9"},{url:"/_next/static/chunks/app/banking/page-6a3eec9c60c576a0.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/career/page-9b2d0df0459b4a87.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/create/page-6245f94f527b7ff3.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/education/page-2564ada505e9db48.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/help/page-a9539962fa6f5949.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/identification/page-925ecccd4b11b9d9.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/layout-b6e7d36400f0bf8c.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/page-5dbfff0573b053a9.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/passport/page-668e2f216eba98d4.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/residence/page-ac02ccb63bc9c63f.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/settings/page-1f005e383fb52653.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/transactions/page-b5a4822651873ba9.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/app/wallet/page-bb988795ae8e84c3.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/d24c7ea9.27e2693ebbd83264.js",revision:"27e2693ebbd83264"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/main-app-518f9f24b5fb59b0.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/main-ff0800a9d192addb.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/pages/_app-ed2c3d0606c6e9b2.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/pages/_error-635fbc803b916a72.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-214e55e34b12a6fc.js",revision:"SKuDFQ2pek0scfckp6p2P"},{url:"/_next/static/css/7ff3c4e6574b8639.css",revision:"7ff3c4e6574b8639"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/latina.e6be4d65.png",revision:"0b0fe72a330612ed71bcab80a2360fc6"},{url:"/android/android-launchericon-144-144.png",revision:"7620ed28364e8c6f7e416b6f4ef6f957"},{url:"/android/android-launchericon-192-192.png",revision:"d5b8af62dfb41ba992cebb2dc6122ab3"},{url:"/android/android-launchericon-48-48.png",revision:"028acc4cfcc61ada24a58787069ef3a1"},{url:"/android/android-launchericon-512-512.png",revision:"4e9a1add91f00b9163bbc231c5ef6bfb"},{url:"/android/android-launchericon-72-72.png",revision:"2bf85ca1b281deeb2b5bf8c4dafdd378"},{url:"/android/android-launchericon-96-96.png",revision:"9c53e8d4309785fff4faabf52daca244"},{url:"/etheruem-logo.png",revision:"a3bcf888539b9e11d6c2d0dfc649187d"},{url:"/ios/100.png",revision:"3291d47c388a846d3e66c6f9ae469892"},{url:"/ios/1024.png",revision:"c9c369d49f7d48dafe3dea7d26d1bc82"},{url:"/ios/114.png",revision:"1226a921c2e142b88e155cbb9d4dfd39"},{url:"/ios/120.png",revision:"88e69968fd9f96fb8ca22faca7ac9862"},{url:"/ios/128.png",revision:"a94b4d62e818d8f5321246b6432423b2"},{url:"/ios/144.png",revision:"7620ed28364e8c6f7e416b6f4ef6f957"},{url:"/ios/152.png",revision:"4c56fd1b06746fe391ca979b28902e89"},{url:"/ios/16.png",revision:"c26cbd9317e830bafc670fed5d501c57"},{url:"/ios/167.png",revision:"c08bdf158e975b8d0dbe518302aac395"},{url:"/ios/180.png",revision:"a94187656fac769c80ad175a2512f6ca"},{url:"/ios/192.png",revision:"d5b8af62dfb41ba992cebb2dc6122ab3"},{url:"/ios/20.png",revision:"fcd8347beb3fbee4944fe3546d6586b2"},{url:"/ios/256.png",revision:"43967e7a8c737cc07d3257d10a46c9e1"},{url:"/ios/29.png",revision:"6ddc3e7914da17bd7b0fdf03ca7d4ffc"},{url:"/ios/32.png",revision:"6169e2ceac0091d87f33a8e1008ef0d8"},{url:"/ios/40.png",revision:"a96dd42752c17578d80271d44fce172a"},{url:"/ios/50.png",revision:"7f4a900ea22860234fe87119087e322e"},{url:"/ios/512.png",revision:"4e9a1add91f00b9163bbc231c5ef6bfb"},{url:"/ios/57.png",revision:"79f70912d53db49d5b0ed48064aa1931"},{url:"/ios/58.png",revision:"087eb13b1b8f3961737a3eb1fa867f17"},{url:"/ios/60.png",revision:"3d76d93a5b7a18dffe32bfbd4475fa09"},{url:"/ios/64.png",revision:"70be9459ea1309020f72657362d559b9"},{url:"/ios/72.png",revision:"2bf85ca1b281deeb2b5bf8c4dafdd378"},{url:"/ios/76.png",revision:"58fda4fa8d190e574bb41afcfab17bc8"},{url:"/ios/80.png",revision:"8dc6416639e6d803293a1e7b5193114c"},{url:"/ios/87.png",revision:"239504201f0fc5ca925cfd0a910ac9e1"},{url:"/latina.png",revision:"0b0fe72a330612ed71bcab80a2360fc6"},{url:"/manifest.json",revision:"b0a1163220e75fadfb4dc3caa1053253"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/nft1.png",revision:"b149ff3c780f53dfce47052fb40385c2"},{url:"/nft2.png",revision:"201acf04354de939840c4c1cde5aa539"},{url:"/nft3.png",revision:"af48b5939d51fbd807090e6d7255a3ad"},{url:"/nft4.png",revision:"b1f983879f68edcd46a8f5736e97edef"},{url:"/splash.png",revision:"746d1e1fbd611cee29b8f69617ab3649"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
