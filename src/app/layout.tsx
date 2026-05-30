import type { Metadata } from "next";
import { funnelDisplay, martianMono, matter } from "@/utils/fonts";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    template: "Lama Telecom | %s",
    default: "Lama Telecom",
  },
  description: "A telecom company that puts people first",
  icons: {
    icon: [
      {
        url: "/favicon_black.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${funnelDisplay.variable} ${martianMono.variable} ${matter.variable}`}
    >
      <body className="font-body overflow-x-clip antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
