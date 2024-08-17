import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: "Justin George",
  description: "An online home for Justin's career, writings and everything else",
  openGraph: {
    type: 'website',
    locale: 'en_in',
    url: 'https://typeofjust.in/',
    siteName: 'Justin',
    images: [{
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og`
    }]
  },
  twitter: {
    handle: '@georgemjustin',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://typeofjust.in/favicon.png',
    }
  ]
};

export default config;
