'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TitleText, Psalms } from '../components';
import styles from '../styles';

const CardStation = ({ title, description, fadeInType, img, index }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex flex-col-reverse  ${fadeInType != 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}
    key={`index${index}`}
  >
    <motion.div
      variants={fadeIn(fadeInType, 'tween', 0.2, 1)}
      className="flex-1 flex justify-center flex-col"
    >
      <div className="mt-[31px] flex flex-col w-full gap-[24px]">
        <TitleText title={<>{} {title}</>} />
      </div>
      <Psalms />
      <div className="mt-[8px] font-normal text-secondary-white">
        {description.map((desc) => (
          <>
            <p className="mt-[18px]">{desc}</p>
          </>
        ))}

        <p className="flex-1 ml-[20px] mt-[20px] font-normal text-[18px] text-white italic">
          Padre nuestro, Avemaria y gloria
        </p>
      </div>
      <div className="border-b-4 border-slate-700 w-full h-[10px] mt-2" />
    </motion.div>
    <motion.div
      variants={planetVariants(fadeInType)}
      className={`flex-1 ${styles.flexCenter} flex-[0.75] flex justify-center flex-col`}
    >
      <img src={img} className="w-[90%] h-[90%] object-contain" />
    </motion.div>
  </motion.div>
);
export default CardStation;
