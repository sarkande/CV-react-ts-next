import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta name="description" content="Allan PEREZ professionnal page" />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
