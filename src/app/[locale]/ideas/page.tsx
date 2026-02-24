import type { Metadata } from "next";

import { IdeasHero, IdeasLoop } from "./components";

export const metadata: Metadata = {
  title: 'Ideas',
  description: '',
  openGraph: {
    title: 'Ideas',
    description: '',
    //images: 'https://axelvior.com/images/meta.png',
  },
};

export default async function Home() {
  return (
    <>
      <IdeasHero />
      <IdeasLoop />
    </>
  );
}
