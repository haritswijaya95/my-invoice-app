import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Invoice App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* JANGAN letakkan <div> di luar body atau di atas fungsi ini */}
      <body>{children}</body>
    </html>
  );
}