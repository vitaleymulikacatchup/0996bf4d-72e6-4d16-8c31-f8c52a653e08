import type { Metadata } from "next";
import { Inter_Tight, Montserrat } from "next/font/google";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Futurist Lens Portfolio",
  description: "Showcase a photographer's futuristic portfolio and drive inquiries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${montserrat.variable} antialiased bg-[var(--background)] text-[var(--text)]`}>  
        <SiteThemeProvider theme={{
          styleVariant: 'futuristicAndOutOfBox',
          colorTemplate: 1,
          textAnimation: 'none'
        }}>
            {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}