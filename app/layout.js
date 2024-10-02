import "./globals.css";
import { Open_Sans } from "next/font/google"; 

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Aakash Sondagar",
  description: "Portfolio of Aakash Sondagar, Software Development Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  );
}