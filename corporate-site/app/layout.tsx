import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechSolutions - 生成AI × LINE × 現場DXで課題解決",
  description: "生成AI × LINE × 現場DXで\"動く\"まで最短に。実績ベースの課題解決を、一気通貫で。",
  keywords: "AI開発, LINEミニアプリ, 業務DX, システム開発, OpenAI, Next.js",
  openGraph: {
    title: "TechSolutions",
    description: "生成AI × LINE × 現場DXで\"動く\"まで最短に。実績ベースの課題解決を、一気通貫で。",
    type: "website",
    locale: "ja_JP",
    url: "https://example.com",
    siteName: "TechSolutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSolutions",
    description: "生成AI × LINE × 現場DXで\"動く\"まで最短に。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
