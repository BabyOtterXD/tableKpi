import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import Nav from "./components/Home/ืNavbar/Nav";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ['400', '500', '600', '700'], // ระบุ weight ที่ต้องการใช้งาน
  subsets: ['thai', 'latin'], // ระบุ subset ที่ต้องการให้รองรับภาษาไทยและภาษาอังกฤษ
});

export const metadata: Metadata = {
  title: "KPI Manament",
  description: "Employee KPI",
};

export default function RootLayout({ children }: { children: React.ReactNode}){
  return (
    <html className={ibmPlexSansThai.className} lang="th">
      <body><Nav />{children}</body>
    </html>
  );
}
  
