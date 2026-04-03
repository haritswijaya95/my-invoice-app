// pages/_app.tsx
import "../styles/globals.css"; // Pastikan file ini ada di folder styles
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}