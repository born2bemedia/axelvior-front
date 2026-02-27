import type { Metadata } from 'next';

import {
  PricingDownload,
  PricingHero,
  PricingHowWeWork,
  PricingPackages,
  PricingTabs,
} from './components';

export const metadata: Metadata = {
  title: 'Pricing | Axelvior Business Development & Strategic Advisory',
  description:
    'Explore our tailored solutions and service packages designed to guide independent entrepreneurs through clarity, structure, and strategic growth.',
  openGraph: {
    title: 'Pricing | Axelvior Business Development & Strategic Advisory',
    description:
      'Explore our tailored solutions and service packages designed to guide independent entrepreneurs through clarity, structure, and strategic growth.',
    images: 'https://axelvior.com/images/meta.png',
  },
};

export default async function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingTabs />
      <PricingPackages />
      <PricingHowWeWork />
      <PricingDownload />
    </>
  );
}
