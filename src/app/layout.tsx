import type { Metadata } from "next";
import localFont from '@next/font/local'
import "./globals.css";

const dana = localFont({
  src: 'fonts/dana-regular.woff',
  variable: '--font-dana'
})

export const metadata: Metadata = {
  title: "OPAL",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={dana.className}>
        {children}
      </body>
    </html>
  );
}
