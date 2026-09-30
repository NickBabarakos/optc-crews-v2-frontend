import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import ClientLayout from "@/components/layout/ClientLayout";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: "OPTC Crews",
    template: "%s | OPTC Crews"
  },
  description: "Create, Upload and Share your crews with your fellow captains.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script 
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head>
      <body className="h-screen bg-background text-white flex overflow-hidden">
        <NuqsAdapter>
          <QueryProvider>
            <ClientLayout>
                {children}
                <ReactQueryDevtools initialIsOpen={false}/>
            </ClientLayout>
          </QueryProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
