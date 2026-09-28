import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2", 
  variable: "--font-satoshi",
  display: "swap",
});
const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.woff2", 
  variable: "--font-clash",
  display: "swap",
});
export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Access to Hundreds of courses available for free, Learn and grow with Bytespace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
