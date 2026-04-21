import type { Metadata } from "next";
import { Inter, Rubik_Glitch } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  variable: "--font-rubik-glitch",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rachel Pham - Web & Graphic Designer",
  description:
    "Hi there! I'm Rachel Pham, a UX/UI designer based in Ontario, Canada. Graphic & Web Designer with the Business Team at the Applied Research Centre at Mohawk College.",
  keywords: ["UX design", "UI design", "product design", "Rachel Pham", "portfolio"],
  icons: {
    icon: "/media/favicon.png",
    apple: "/media/favicon.png",
  },
  openGraph: {
    title: "Rachel Pham - Web & Graphic Designer",
    description: "UX/UI designer based in Ontario, Canada.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${rubikGlitch.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="rp-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
