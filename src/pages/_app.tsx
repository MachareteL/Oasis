import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ReactQueryProvider, ThemeMuiProvider } from "@/providers/providers";
import Header from "@/components/Header";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeMuiProvider>
      <SessionProvider session={session}>
        <ReactQueryProvider>
          <Header />
          <Component {...pageProps} />
        </ReactQueryProvider>
      </SessionProvider>
    </ThemeMuiProvider>
  );
}
