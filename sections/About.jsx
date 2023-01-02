'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Que es?" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Es la meditación de los momentos y sufrimientos vividos por Jesús desde
        que fue hecho prisionero hasta su muerte en la cruz y posterior
        resurrección. Literalmente, via crucis significa 
        <span className="font-extrabold text-white">camino de la cruz</span>. Al
        rezarlo, recordamos con amor y agradecimiento lo mucho que Jesús sufrió
        por salvarnos del pecado durante su pasión y muerte. Dicho camino se
        representa mediante 15 imágenes de la Pasión que se llaman 
        <span className="font-extrabold text-white">estaciones</span>.
        Te animarás a cargar con las cruces de cada día, si recuerdas con
        frecuencia las estaciones o pasos de Jesús hasta el Calvario.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
