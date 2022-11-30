import { Toaster } from "react-hot-toast";

import type { AppProps } from "next/app";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Toaster />
    <Component {...pageProps} />
  </>
);

export default App;
