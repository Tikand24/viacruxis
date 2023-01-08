'use client';

import { TypingText, CardStation } from '../components';
import { stationList } from '../constants';
import styles from '../styles';

const Stations = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <div className='flex justify-center items-center content-center'>
      <TypingText title="| Rezar el viacrucis" />
    </div>
    {stationList.map((station, index) => (
      <CardStation
        title={station.title}
        description={station.description}
        fadeInType={index % 2 == 0 ? 'left' : 'right'}
        img={station.img}
        index={`indexCardStationStation${index}`}
        key={`indexCardStationStation${index}`}
      />
    ))}
  </section>
);
export default Stations;
