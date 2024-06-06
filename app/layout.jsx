import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Lakshya's Portfolio",
  description: "Lakshya Sharma's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
          <Analytics />
          <SpeedInsights />
        </PageTransition>
      </body>
    </html>
  );
}
