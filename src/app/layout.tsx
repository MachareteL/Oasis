import { BoschSansBold, BoschSansItalic, BoschSansRegular } from "@/fonts/fonts";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Oasis',
  description: 'A MVP PROJECT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={BoschSansRegular.className}>{children}</body>
    </html>
  );
}
