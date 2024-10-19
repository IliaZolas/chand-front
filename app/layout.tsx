"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./components/navbar";
import Player from "./components/player";
import LoadingSpinner from "./components/loadingSpinner";
import { MusicPlayerProvider } from './components/musicPlayerContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      console.log("Page fully loaded");
      setIsLoading(false);
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
      <body>
        <div className="relative">
          <MusicPlayerProvider>
            <Navbar />
            {children}
            <Player />
          </MusicPlayerProvider>

          {/* Render the spinner when loading */}
          {isLoading && <LoadingSpinner />}
        </div>
      </body>
    </html>
  );
}
