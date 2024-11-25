"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./components/navbar";
import Player from "./components/player";
import LoadingSpinner from "./components/loadingSpinner";
import { MusicPlayerProvider } from "./components/musicPlayerContext";
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      console.log("Page fully loaded");
      setIsLoading(false); // Start fade-out of the spinner
    };

    // Check if the document is already fully loaded
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  console.log("isLoading", isLoading); // Debugging output to verify state change

  return (
    <html lang="en">
      <head>
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2JZGCRG');
          `,
        }}
      />
        {/* <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-LLFDEPEWXV`}
            strategy="afterInteractive"
          />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script> */}
      </head>
      <body>
        <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2JZGCRG" height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          ></noscript>
        {/* Content Wrapper: faded out while loading */}
        <div
          className={`relative transition-opacity duration-1000 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <MusicPlayerProvider>
            <Navbar />
            {children}
            <Player />
          </MusicPlayerProvider>
        </div>

        {/* Loading Spinner */}
        <div
          className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50 transition-opacity duration-1000 ${
            isLoading ? "opacity-100" : "opacity-0"
          }`}
          style={{ pointerEvents: isLoading ? "auto" : "none" }}
        >
          <LoadingSpinner />
        </div>
      </body>
    </html>
  );
}
