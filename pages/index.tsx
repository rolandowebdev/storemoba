import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos';

import Navbar from '../components/organism/Navbar';
import MainBanner from '../components/organism/MainBanner';
import TransactionStep from '../components/organism/TransactionStep';
import FeaturedGame from '../components/organism/FeturedGame';
import Reached from '../components/organism/Reached';
import Story from '../components/organism/Story';
import Footer from '../components/organism/Footer';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
