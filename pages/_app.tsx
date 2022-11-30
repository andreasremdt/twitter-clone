import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { Roboto } from "@next/font/google";

import type { AppProps } from "next/app";

import "../styles/globals.css";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-roboto" });

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <SessionProvider session={session}>
    <Toaster />

    <main
      className={`${roboto.variable} font-sans max-w-[1400px] lg:px-4 px-2 mx-auto grid grid-cols-12 text-slate-800`}
    >
      <Component {...pageProps} />
    </main>
  </SessionProvider>
);

export default App;
