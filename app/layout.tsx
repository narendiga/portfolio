import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const perandory = localFont({
  src: "../fonts/PerandorySemiCondensed.otf",
  variable: "--font-perandory",
  weight: "400",
});

const edwardian = localFont({
  src: "../fonts/Edwardian Script ITC Regular.ttf",
  variable: "--font-edwardian",
  weight: "400",
});

const glacial = localFont({
  src: [
    {
      path: "../fonts/GlacialIndifference-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GlacialIndifference-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-glacial",
});

const spaceMono = localFont({
  src: [
    {
      path: "../fonts/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Naifa Mumtazah Rendiga | Portfolio",
  description:
    "Portfolio of Naifa Mumtazah Rendiga — Information Systems graduate focused on data analytics, data engineering, and business intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${perandory.variable} ${edwardian.variable} ${glacial.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}