/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  
  
  return (
    <>
    <Head>
    <title>Aquecimento Global: consequências e como reduzir os efeitos</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;800&family=Nunito+Sans&display=swap" rel="stylesheet" />
  <meta name="description" content="Entenda de maneira simples o que é o aquecimento global e o que você pode fazer para ajudar nosso planeta" />
  <link rel="icon" href="/favicon.ico" />
  </Head>
  <Component {...pageProps} />
  </>
  )

  
}

export default MyApp
