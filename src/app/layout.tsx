import type { Metadata } from "next";
import localFont from "next/font/local";
import "@cloudscape-design/global-styles/index.css"
import "./globals.scss";

import ConfigureAmplify from '@/components/ConfigureAmplify';
import Providers from '@/components/ContextProviders';

import ClientLayout from '@/components/ClientLayout';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UGI AI Operations Assistant",
  description: "AI-powered assistants for UGI Utilities operations - natural gas and electric utility management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ConfigureAmplify/>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
