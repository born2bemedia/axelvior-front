import type { Metadata } from 'next';

import { WhoFor, WhoHero, WhoTabs } from './components';

export const metadata: Metadata = {
  title: 'Who We Are | Axelvior Advisory Services',
  description:
    'Axelvior supports independent entrepreneurs who are ready to regain control and structure in their businesses. We help you make deliberate decisions, providing the clarity needed for lasting success.',
  openGraph: {
    title: 'Who We Are | Axelvior Advisory Services',
    description:
      'Axelvior supports independent entrepreneurs who are ready to regain control and structure in their businesses. We help you make deliberate decisions, providing the clarity needed for lasting success.',
    images: 'https://axelvior.com/images/meta.png',
  },
};

export default async function Who() {
  return (
    <>
      <WhoHero />
      <WhoFor />
      <WhoTabs />
    </>
  );
}
