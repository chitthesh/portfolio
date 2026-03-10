import "./globals.css";
import ThemeProvider from "@/context/ThemeContext";

export const metadata = {
  title: "Chitthesh Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}