import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Hi, I'm Markus Hsi-Yang Fritz, computational biologist turned software engineer. I ♥ web technology, open source, food & hiking."
          />
          <link rel="icon" type="image/png" href="/favicon.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
