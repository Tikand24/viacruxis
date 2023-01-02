'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TypingText, TitleText, Psalms, CardStation } from '../components';
import { stationList } from '../constants';
import styles from '../styles';

const Stations = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div>
      <TypingText title="| Rezar el viacrucis" />
    </div>
    {stationList.map((station, index) => (
      <CardStation
        title={station.title}
        description={station.description}
        fadeInType={index % 2 == 0 ? 'left' : 'right'}
        img={station.img}
        key={station}
      />
    ))}
  </section>
);
export default Stations;
