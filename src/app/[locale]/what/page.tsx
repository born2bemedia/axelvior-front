import type { Metadata } from 'next';

import { WhatHelp, WhatHero, WhatHowWeWork, WhatOurApproach } from './components';

export const metadata: Metadata = {
  title: 'What Axelvior Does | Strategic Business Development Services',
  description:
    'Axelvior offers tailored business development solutions, focusing on strategic direction, positioning, systems design, and sustainable growth for independent entrepreneurs.',
  openGraph: {
    title: 'What Axelvior Does | Strategic Business Development Services',
    description:
      'Axelvior offers tailored business development solutions, focusing on strategic direction, positioning, systems design, and sustainable growth for independent entrepreneurs.',
    images: 'https://axelvior.com/images/meta.png',
  },
};

export default async function What() {
  return (
    <>
      <WhatHero />
      <WhatOurApproach />
      <WhatHelp />
      <WhatHowWeWork />
    </>
  );
}
