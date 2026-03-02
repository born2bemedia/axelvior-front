import {
  HomeDetails,
  HomeFrom,
  HomeHero,
  HomeIndependence,
  HomeProgress,
  HomeRequest,
  HomeWhat,
  HomeWho,
  HomeWhy,
} from './components';

export default async function Home() {
  return (
    <>
      <HomeHero />
      <HomeProgress />
      <HomeWho />
      <HomeIndependence />
      <HomeWhat />
      <HomeFrom />
      <HomeWhy />
      <HomeDetails />
      <HomeRequest />
    </>
  );
}
