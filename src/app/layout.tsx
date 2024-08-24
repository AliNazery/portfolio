import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Footer from "@/Components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import SidebarHeader from "@/Components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@Ali Nazery",
  description: "Web developer, React Developer",
  keywords: [
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Redux Toolkit",
    "TypeScript",
    "Git",
    "GitHub",
    "Front-end Development",
  ],
  authors: [{ name: "Ali Nazery" }],
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
          <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
              {/* Sidebar */}
              <SidebarHeader />

              {/* Main Content */}
              <div className="flex-1 ml-16">{children}</div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "../style/globals.css";
// import Footer from "@/Components/Footer/Footer";
// import { ThemeProvider } from "next-themes";
// import SidebarHeader from "@/Components/Header/Header";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "@Ali Nazery",
//   description: "Web developer, React Developer",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ThemeProvider attribute="class">
//           <SidebarHeader />
//           {children}
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
