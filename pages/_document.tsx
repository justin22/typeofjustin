import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Teachers:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400..500;1,400..500&display=swap" rel="stylesheet"></link>

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