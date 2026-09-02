import { Helmet } from "react-helmet-async";

const SITE_URL = "https://threeangles.vercel.app";
const SITE_NAME = "ThreeAngles";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, any>;
}

export function SEO({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  type = "website",
  jsonLd,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Out of Home Advertising in Egypt`;
  const fullDescription = description || "Connect with millions daily through premier out-of-home advertising, billboards, transit media, and digital screens across Sheikh Zayed and 6th of October.";
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
