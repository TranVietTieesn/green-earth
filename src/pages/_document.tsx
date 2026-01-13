import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌍</text></svg>"
        />

        {/* Primary Meta Tags */}
        <meta name="title" content="Green Earth - Discover Our Planet" />
        <meta name="description" content="Explore the beauty and mystery of Earth - our shared home. A modern website celebrating our green planet, featuring interactive experiences and educational content about environmental sustainability." />
        <meta name="keywords" content="earth, green planet, environment, nature conservation, sustainability, climate action, eco-friendly" />
        <meta name="author" content="Green Earth Team" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Green Earth - Discover Our Planet" />
        <meta property="og:description" content="Explore the beauty and mystery of Earth - our shared home. A modern website celebrating our green planet." />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Green Earth - Discover Our Planet" />
        <meta property="twitter:description" content="Explore the beauty and mystery of Earth - our shared home. A modern website celebrating our green planet." />
        <meta property="twitter:image" content="/og-image.png" />

        {/* Theme Color */}
        <meta name="theme-color" content="#10b981" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}