import Document, { Html, Head, Main, NextScript } from 'next/document'

const GOOGLE_FONTS = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&family=Mulish:ital,wght@0,400;0,700;1,400;1,700&display=swap'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head>
          {/* favicon */}
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />

          {/* Google fonts */}
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link rel='preload' as='style' href={GOOGLE_FONTS} />
          <link rel='stylesheet' href={GOOGLE_FONTS} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
