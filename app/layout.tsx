import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Source_Sans_3, Manrope, Geist_Mono } from "next/font/google";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nkirra.com"),
  title: {
    default: "Nkirra - Finance For Everyone",
    template: "%s | Nkirra",
  },
  description: "Finance for everyone.",
  openGraph: {
    title: "Nkirra - Finance For Everyone",
    description: "Finance for everyone.",
    siteName: "Nkirra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nkirra - Finance For Everyone",
    description: "Finance for everyone.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans.variable} ${manrope.variable} antialiased`}>
        {/* <ThemeProvider
          
          defaultTheme="white"
          disableTransitionOnChange
        > */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
