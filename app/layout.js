import localFont from "next/font/local";
import "./globals.css";
import { Oswald } from "next/font/google";
import SmoothScroller from "./SmoothScroller";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const oswald = Oswald({ subsets: ["latin"], weight: ["200", "300", "400", "500", "700", "600"], variable: "--font-oswald" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} antialiased`}>
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
