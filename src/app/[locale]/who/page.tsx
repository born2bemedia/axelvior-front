import { WhoFor, WhoHero, WhoTabs } from "./components";

export default async function Who() {
  return (
    <>
      <WhoHero />
      <WhoFor />
      <WhoTabs />
    </>
  );
}
