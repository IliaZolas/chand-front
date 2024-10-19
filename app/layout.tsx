"use client";

import "./globals.css";
import Navbar from "./components/navbar";
import Player from "./components/player";
import { MusicPlayerProvider } from './components/musicPlayerContext';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MusicPlayerProvider>
          <Navbar />
          {children}
          <Player />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
