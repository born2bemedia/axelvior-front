import {
  PricingDownload,
  PricingHero,
  PricingHowWeWork,
  PricingPackages,
  PricingTabs,
} from "./components";

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
