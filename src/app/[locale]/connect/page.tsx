import type { Metadata } from 'next';

import { ConnectContact, ConnectForm, ConnectHero } from './components';

export const metadata: Metadata = {
  title: 'Connect with Axelvior | Strategic Advisory Services for Entrepreneurs',
  description:
    'Get in touch with Axelvior to discuss how our strategic advisory services can help your business thrive. Whether you need clarity, direction, or growth strategies, we’re here to help.',
  openGraph: {
    title: 'Connect with Axelvior | Strategic Advisory Services for Entrepreneurs',
    description:
      'Get in touch with Axelvior to discuss how our strategic advisory services can help your business thrive. Whether you need clarity, direction, or growth strategies, we’re here to help.',
    images: 'https://axelvior.com/images/meta.png',
  },
};

export default async function Connects() {
  return (
    <>
      <ConnectHero />
      <ConnectContact />
      <ConnectForm />
    </>
  );
}
