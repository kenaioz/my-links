import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${jetBrainsMono.variable} ease-in-out; h-screen antialiased transition-all duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex items-center justify-between px-8 py-4">
            <h1>My Links</h1>
            <ThemeSwitcher />
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
