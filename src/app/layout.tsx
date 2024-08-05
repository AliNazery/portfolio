import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import SidebarHeader from "@/Components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@Ali Nazery",
  description: "Web developer, React Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <SidebarHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
