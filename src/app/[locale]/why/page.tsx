import type { Metadata } from 'next';

import { WhyHero, WhyTabs } from './components';

export const metadata: Metadata = {
  title: 'Why Axelvior Exists | Transforming Ideas into Actionable Strategy',
  description:
    'Axelvior exists to fill the gap between generic advice and real-world business needs. We offer structured guidance that empowers independent entrepreneurs to navigate complexity with confidence.',
  openGraph: {
    title: 'Why Axelvior Exists | Transforming Ideas into Actionable Strategy',
    description:
      'Axelvior exists to fill the gap between generic advice and real-world business needs. We offer structured guidance that empowers independent entrepreneurs to navigate complexity with confidence.',
    images: 'https://axelvior.com/images/meta.png',
  },
};

export default async function Why() {
  return (
    <>
      <WhyHero />
      <WhyTabs />
    </>
  );
}
