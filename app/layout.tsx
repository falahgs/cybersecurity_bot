import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberGuard AI - Cybernetic Security Assistant",
  description: "Your Advanced Cybernetic Security Expert - Developed by Falahgs4AI ✨",
  icons: {
    icon: '/shield-lock.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Navbar />
          <main className="flex-1 pl-16">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
