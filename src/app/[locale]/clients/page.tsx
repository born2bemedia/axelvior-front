import type { Metadata } from 'next';

import { ClientsHero, ClientsList, ClientsWhyChoose } from '@/app/[locale]/clients/components';

export const metadata: Metadata = {
  title: 'Our Clients | Axelvior’s Success Stories',
  description:
    'Axelvior has helped independent entrepreneurs and business owners scale with clarity. Explore our case studies to see how our strategic advisory services drive sustainable success.',
  openGraph: {
    title: 'Our Clients | Axelvior’s Success Stories',
    description:
      'Axelvior has helped independent entrepreneurs and business owners scale with clarity. Explore our case studies to see how our strategic advisory services drive sustainable success.',
    images: 'https://axelvior.com/images/meta.png',
  },
};

export default async function Clients() {
  return (
    <>
      <ClientsHero />
      <ClientsList />
      <ClientsWhyChoose />
    </>
  );
}
