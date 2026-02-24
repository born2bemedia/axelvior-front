import { WhatHelp, WhatHero, WhatHowWeWork, WhatOurApproach } from './components';

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
