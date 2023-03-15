import type { AppProps } from 'next/app'
import NavBar from '@/components/NavBar'
import '../styles/reset.css'
import '../styles/global.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const route: { path: string; value: string }[] = [
    { path: '/', value: 'Accueil' },
    { path: '/cv', value: 'CV' },
    // { path: "/skills", value: "Compétences" },
    { path: '/portfolio', value: 'Portfolio' },
  ]
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <NavBar route={route} />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
