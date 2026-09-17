import localFont from "next/font/local";
import type { ReactNode } from "react";
import { parseRoute } from "@/data/site";
import "../globals.css";
import "../work.css";

const geist = localFont({
  src: "../../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  display: "swap",
  variable: "--font-geist",
});
export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ segments?: string[] }>;
}) {
  const { lang } = parseRoute((await params).segments);
  return (
    <html lang={lang} className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
