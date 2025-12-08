import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"], variable: "--_next_font_outfit",
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"], variable: "--_next_font_ovo", 
});

export const metadata = {
  title: "Smit's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning
        className={`${outfit.variable} ${ovo.variable} leading-8 overflow-x-hidden dark:bg-dark-theme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
