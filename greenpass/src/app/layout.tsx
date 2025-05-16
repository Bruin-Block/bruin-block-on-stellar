import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { WalletProvider } from "@/contexts/WalletContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenPass - Environmental Impact on Stellar",
  description: "A Web3 event discovery and rewards platform for eco-friendly events and activities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        <WalletProvider>
          <Navigation />
          <main className="container mx-auto py-8 px-4">
            {children}
          </main>
          <footer className="bg-green-900 text-white py-6 mt-auto">
            <div className="container mx-auto px-4 text-center">
              <p>GreenPass - Eco-friendly actions on the Stellar blockchain</p>
              <p className="text-sm mt-2 text-green-300">Built for Stellar Consensus Hackathon 2025</p>
            </div>
          </footer>
        </WalletProvider>
      </body>
    </html>
  );
}
