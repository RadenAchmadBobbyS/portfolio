import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raden Achmad Bobby Syakir - Full Stack Web Developer",
  description: "Portfolio of Raden Achmad Bobby Syakir, showcasing full stack web development projects and skills.",
  icons: {
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJhYnktaWNvbiBsdWNpZGUtYmFieSI+PHBhdGggZD0iTTEwIDE2Yy41LjMgMS4yLjUgMiAuNXMxLjUtLjIgMi0uNSIvPjxwYXRoIGQ9Ik0xNSAxMmguMDEiLz48cGF0aCBkPSJNMTkuMzggNi44MTNBOSA5IDAgMCAxIDIwLjggMTAuMmEyIDIgMCAwIDEgMCAzLjYgOSA5IDAgMCAxLTE3LjYgMCAyIDIgMCAwIDEgMC0zLjZBOSA5IDAgMCAxIDEyIDNjMiAwIDMuNSAxLjEgMy41IDIuNXMtLjkgMi41LTIgMi41Yy0uOCAwLTEuNS0uNC0xLjUtMSIvPjxwYXRoIGQ9Ik05IDEyaC4wMSIvPjwvc3ZnPg==",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
