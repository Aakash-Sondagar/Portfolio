import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Aakash's Portfolio",
  description:
    "Welcome to Aakash's professional portfolio website. Explore projects, skills, and get in touch.",
  keywords:
    "Aakash, Aakash Sondagar, Aakash Sondagar portfolio, portfolio, software engineer, projects, contact",
  author: "Aakash Sondagar",
  url: "https://aakashsondagar.vercel.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
