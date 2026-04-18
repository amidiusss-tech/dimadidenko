import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://dimadidenko.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Music Store by Dima D.",
  description: "Cinematic music store by film composer Dima D."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
