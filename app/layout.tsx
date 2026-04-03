import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

// Konfigurasi Inter yang paling simpel
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invoice App",
  description: "Aplikasi Invoice dengan Peta Wilayah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Pastikan tidak ada typo di class name global jika ada */}
      <body className="antialiased"> 
        {children}
      </body>
    </html>
  );
}
  
      