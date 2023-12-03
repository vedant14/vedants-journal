import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Layout } from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
