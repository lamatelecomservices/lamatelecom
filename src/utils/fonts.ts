import { Funnel_Display, Martian_Mono } from "next/font/google";
import localFont from "next/font/local";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian-mono",
  display: "swap",
});

const matter = localFont({
  display: "swap",
  src: [
    { path: "../assets/fonts/Matter-Light.ttf", weight: "300" },
    { path: "../assets/fonts/Matter-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/Matter-Medium.ttf", weight: "500" },
    { path: "../assets/fonts/Matter-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/Matter-Bold.ttf", weight: "700" },
    { path: "../assets/fonts/Matter-Heavy.ttf", weight: "800" },
  ],
  variable: "--font-matter",
});

export { funnelDisplay, martianMono, matter };
