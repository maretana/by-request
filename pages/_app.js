import Head from 'next/head'

import '../styles/global.scss'

function MyApp ({ Component, pageProps }) {
  const GOOGLE_FONTS = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&family=Mulish:ital,wght@0,400;0,700;1,400;1,700&display=swap'
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link rel='preload' as='style' href={GOOGLE_FONTS} />
        <link rel='stylesheet' href={GOOGLE_FONTS} media='print' onLoad="this.media='all'" />
        <noscript>
          <link rel='stylesheet' href={GOOGLE_FONTS} />
        </noscript>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
