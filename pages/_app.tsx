import SEO from '../next-seo.config';
import Head from "next/head";
import Layout from "../components/layout/Index";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react"
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.bunny.net" />
      </Head>
      <DefaultSeo {...SEO} />
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  )
}

export default MyApp
