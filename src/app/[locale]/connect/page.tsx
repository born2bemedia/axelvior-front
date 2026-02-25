import { ConnectContact, ConnectForm, ConnectHero, ConnectPrice } from './components';

export default async function Connects() {
  return (
    <>
      <ConnectHero />
      <ConnectContact />
      <ConnectForm />
      <ConnectPrice />
    </>
  );
}
