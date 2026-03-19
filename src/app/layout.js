import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Chitthesh | Full Stack Developer",
  description: "Professional portfolio of Chitthesh, a passionate Full Stack Developer specializing in the MERN stack and modern web technologies.",
  keywords: ["Chitthesh", "Portfolio", "Full Stack Developer", "MERN Stack", "React", "Next.js"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}