import "../styles/globals.css";
import "./globals.css"; // Sesuaikan jalur foldernya
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
