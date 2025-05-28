import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "サクペジ - あなたの作品を美しくページ化",
  description: "書いた作品をいろいろな形式でページ化してダウンロードできます。",
  keywords: [
    "小説",
    "ラノベ",
    "ライトノベル",
    "ノベル",
    "novel",
    "Novel",
    "画像",
    "画像化",
  ],
  authors: [{
    name: "Keito Suwahara",
    "url": "https://github.com/suwakei"
  }],
  viewport: {
    width: "device-width",
    initialScale: 1.0,
  },
  // OpenGraph設定
  openGraph: {
  title: "Page Maker - あなたの作品を美しくページ化",
  description: "書いた作品をEPUBやPDFなど、様々な形式で簡単にダウンロードできます。",
  url: "", // アプリケーションのURL
  siteName: "Page Maker",
  images: [
    {
      url: "", // OGP画像のURL
      width: 1200,
      height: 630,
      alt: "Page Makerのロゴ",
    },
  ],
  locale: "ja_JP",
  type: "website",
},
// Twitterカード設定
  twitter: {
    card: "summary_large_image",
    title: "Page Maker - あなたの作品を美しくページ化",
    description: "書いた作品をいろいろな形式でページ化してダウンロードできます。",
    // creator: "@yourTwitterHandle", // あなたのTwitterハンドルに置き換えてください
    images: ["https://example.com/twitter-image.png"], // Twitterカード画像のURLに置き換えてください
  },
  // アイコン設定の例 (favicon.icoがappディレクトリ直下にあれば自動で認識されますが、明示も可能です)
  icons: "/favicon.ico",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
