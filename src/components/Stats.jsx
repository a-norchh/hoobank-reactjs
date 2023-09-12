import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row sm:mb-20 mb-6 max-md:flex-wrap md:flex-nowrap max-xs:mt-4`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="flex items-center justify-start relative flex-row lg:px-12 px-8"
        >
          <h4 className="font-poppins font-semibold lg:text-[40px]  text-[30px] text-white sm:leading-[53px] leading-[43px]">
            {stat.value}
          </h4>
          <p
            className={`font-poppins font-normal lg:text-[20px] xs:leading-[26px] leading-[21px] text-gradient ml-3 uppercase whitespace-nowrap`}
          >
            {stat.title}
          </p>
          {index !== stats.length - 1 ? (
            <div className="absolute w-[2px] h-[13px] bg-white right-0 top-[50%] translate-y-[-50%] max-xs:hidden" />
          ) : (
            ""
          )}
        </div>
      ))}
    </section>
  );
};

export default Stats;
