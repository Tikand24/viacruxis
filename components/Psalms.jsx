import styles from '../styles';
const Psalms = () => (
  <div className="mt-[20px] flex flex-col w-full">
    <div className={`${styles.flexCenter} flex-row mb-2`}>
      <div
        className={`${styles.flexCenter} w-[50px] rounded-[24px] bg-[#323F5D] `}
      >
        <p className="font-bold text-[20px] text-[#B0B0B0]">V </p>
      </div>
      <p className="flex-1 ml-[20px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        Te adoramos, oh Cristo, y te bendecimos.
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[50px] rounded-[24px] bg-[#323F5D]`}
      >
        <p className="font-bold text-[20px] text-white">R</p>
      </div>
      <p className="flex-1 ml-[20px] font-normal text-[18px] text-white leading-[32.4px]">
        Pues por tu santa cruz redimiste al mundo.
      </p>
    </div>
  </div>
);
export default Psalms;
