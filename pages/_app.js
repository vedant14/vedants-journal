import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Layout } from "../components/Layout";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
