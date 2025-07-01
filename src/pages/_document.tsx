import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌍</text></svg>"
        />
        <meta name="description" content="Discover the beauty and mystery of Earth - our shared home. A modern website celebrating our green planet." />
        <meta name="keywords" content="earth, green planet, environment, nature conservation, sustainability" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 