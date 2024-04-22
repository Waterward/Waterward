import { FunctionComponent } from "react";

const SplashScreen: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-lightskyblue-200 overflow-hidden flex flex-col items-end justify-start pt-[262px] px-0 pb-0 box-border gap-[77px] leading-[normal] tracking-[normal]">
      <img
        className="w-[147.8px] h-[159px] relative object-cover hidden"
        alt=""
        src="/water-drop@2x.png"
      />
      <section className="self-stretch h-[317px] flex flex-row items-start justify-end py-0 pr-[61px] pl-[68px] box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[86px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/asset-2-1@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[26px] pl-5">
            <img
              className="h-[18px] w-[42px] relative"
              loading="lazy"
              alt=""
              src="/loading.svg"
            />
          </div>
        </div>
      </section>
      <section className="self-stretch h-[156px] relative">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[121px] left-[0px] w-[375px] h-[35px]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full"
            alt=""
            src="/background.svg"
          />
          <div className="absolute top-[21px] left-[121px] rounded-[30px] bg-light-grey w-[134px] h-[5px] z-[1]" />
        </button>
        <img
          className="absolute top-[0px] left-[-131px] w-[599px] h-[251px] z-[2]"
          alt=""
          src="/vector-11.svg"
        />
        <img
          className="absolute top-[0px] left-[-16.3px] w-[525.5px] h-[267px] object-contain z-[3]"
          alt=""
          src="/vector-2.svg"
        />
      </section>
    </div>
  );
};

export default SplashScreen;
