import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import { AuthProvider } from "@/app/context/AuthContext";
import RootLayoutWrapper from "@/app/components/RootLayoutWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-circularpro-book",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "punkrecords* — Premium Design Resources for Creators",
  description: "Access curated free and paid design resources, fonts, UI kits, icon packs, and template mockups. Designed for industrial precision and creative speed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-fog text-obsidian">
        <AuthProvider>
          <CartProvider>
            <RootLayoutWrapper>{children}</RootLayoutWrapper>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
