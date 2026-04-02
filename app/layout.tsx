import type { Metadata } from "next";
import { Inter } from "next/font/google";
// PILIH SALAH SATU SAJA yang benar-benar berisi @import "tailwindcss";
import "./global.css"; 

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Tambahkan ini untuk menghilangkan warning "preload" tadi
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}