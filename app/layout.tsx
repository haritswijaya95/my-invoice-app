import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css"; // Pastikan nama file sesuai (global.css atau globals.css)

const inter = Inter({ subsets: ["latin"] });

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
        {/* Sidebar dihapus dari sini agar tidak bentrok dengan Server Component */}
        {children}
      </body>
    </html>
  );
}