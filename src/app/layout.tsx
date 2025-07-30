import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jack Chin's Portfolio",
  description: "Welcome to my portfolio!",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/favicon/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/favicon/android-chrome-512x512.png' },
    ]
  },
  openGraph: {
    images: "/jack-chin.jpg"
  },
  keywords: "portfolio,profile,resume",
  manifest: "/favicon/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
