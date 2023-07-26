import { BoschSansRegular } from "@/fonts/fonts";
import "./globals.css";
import type { Metadata } from "next";
import { NextAuthProvider } from "./providers/providers";

export const metadata: Metadata = {
  title: "Oasis",
  description: "A MVP PROJECT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <NextAuthProvider>
        <body className={BoschSansRegular.className}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
