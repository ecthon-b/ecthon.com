import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { NextSeo } from "next-seo";
import projectTheme from "@theme";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={projectTheme}>
      <NextSeo
        title="Ecthon Almeida"
        description="Olá, eu sou Ecthon Almeida, desenvolvedor Front-End e UI Designer."
      />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
