"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Player from "./components/player";
import { MusicPlayerProvider } from './components/musicPlayerContext';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MusicPlayerProvider>
          <Navbar />
          {children}
          <Player />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
