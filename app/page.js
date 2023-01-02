import { NavBar } from '../components';
import { About, GetStarted, Hero, Stations } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden w-full">
    <NavBar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-04 z-0" />
      <GetStarted />
    </div>
    <div className="relative">
      <Stations />
    </div>
  </div>
);

export default Page;
