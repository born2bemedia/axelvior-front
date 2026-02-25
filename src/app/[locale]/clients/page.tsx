import { ClientsHero, ClientsList, ClientsWhyChoose } from '@/app/[locale]/clients/components';

export default async function Clients() {
  return (
    <>
      <ClientsHero />
      <ClientsList />
      <ClientsWhyChoose />
    </>
  );
}
