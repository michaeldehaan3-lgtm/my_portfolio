import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { siteName } from "@/data/portfolio";
import SiteHeader from "@/components/SiteHeader";
import Navigation from "@/components/Navigation";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: siteName,
  description: "Portfolio — Architecture, Design, Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <div className="layout">
          <main className="layout__main">
            <SiteHeader />
            <div className="layout__body">
              <div className="layout__nav-area">
                <Navigation />
              </div>
              <div className="layout__content">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
