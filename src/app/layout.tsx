import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

const jetBrainsMono = JetBrains_Mono({
  variable: "--jetbrains-mono",
  fallback: ["monospace"],
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kenaioz Links | Developer FullStack",
  description: "Meus links importantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} h-screen antialiased`}>
        <header className="flex items-center justify-between px-8 py-4">
          <h2>My Links</h2>
          <ThemeSwitcher />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
