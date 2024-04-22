import { FunctionComponent } from "react";

const AddHubTank: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-aliceblue overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[206px] box-border gap-[237px] leading-[normal] tracking-[normal]">
      <img
        className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[0]"
        alt=""
        src="/hicon--bold--left-circle-2.svg"
      />
      <section className="w-full h-[533.2px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[154.7px] left-[-218.2px] w-[394.8px] h-[378.5px] overflow-hidden object-contain"
          alt=""
          src="/shape@2x.png"
        />
        <img
          className="absolute top-[-107px] left-[163px] w-[314.6px] h-[301.6px] overflow-hidden object-contain z-[1]"
          alt=""
          src="/shape-1@2x.png"
        />
        <img
          className="absolute top-[62px] left-[24px] w-5 h-[18.3px] object-contain"
          loading="lazy"
          alt=""
          src="/group1@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-col items-end justify-start gap-[63px] max-w-full text-center text-mini text-darkslategray font-medium">
        <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full z-[2]">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-between pt-[13px] pb-[11px] pr-[14.4px] pl-[21px] box-border max-w-full gap-[20px]">
                <div className="w-[54px] relative tracking-[-0.24px] leading-[20px] font-semibold inline-block shrink-0">
                  9:41
                </div>
                <div className="w-[66.6px] flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
                    <img
                      className="h-[10.7px] w-[17px] relative"
                      alt=""
                      src="/cellular-connection1.svg"
                    />
                    <img
                      className="h-[11px] w-[15.3px] relative"
                      alt=""
                      src="/wifi.svg"
                    />
                    <div className="h-[11.3px] w-[24.3px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[2.67px] box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-darkslategray" />
                      <img
                        className="absolute top-[3.7px] left-[23px] w-[1.3px] h-1 mix-blend-normal"
                        alt=""
                        src="/cap1.svg"
                      />
                      <div className="absolute top-[2px] left-[2px] rounded-[1.33px] bg-darkslategray w-[18px] h-[7.3px] z-[1]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-xl text-light-gray-11">
              <div className="w-[148px] relative leading-[32px] font-semibold inline-block z-[2]">
                Add Hub/Tank
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-[68px] text-light-gray-0">
            <div className="h-[66px] w-[67px] bg-skyblue-100 flex flex-row items-start justify-start py-0 pr-px pl-[11px] box-border gap-[11px] z-[2]">
              <div className="self-stretch w-[67px] relative bg-skyblue-100 hidden" />
              <div className="mt-[-6px] flex-1 relative tracking-[-0.01em] leading-[80px] font-semibold z-[3]">
                8
              </div>
              <img
                className="h-[66px] w-0 relative object-contain z-[3]"
                loading="lazy"
                alt=""
                src="/line-7.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[19px] pl-7 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <button className="cursor-pointer py-[19px] px-[46px] bg-light-gray-0 flex-1 rounded-lg box-border flex flex-row items-start justify-start min-w-[100px] z-[1] border-[0.5px] border-solid border-lightgray">
              <div className="h-[65px] w-[154px] relative rounded-lg bg-light-gray-0 box-border hidden border-[0.5px] border-solid border-lightgray" />
              <div className="relative text-6xl leading-[100%] font-medium font-medium text-light-gray-11 text-left inline-block min-w-[62px] z-[1]">
                Tank
              </div>
            </button>
            <button className="cursor-pointer py-[19px] px-[46px] bg-light-gray-0 flex-1 rounded-lg box-border flex flex-row items-start justify-start min-w-[100px] border-[0.5px] border-solid border-lightgray">
              <div className="h-[65px] w-[154px] relative rounded-lg bg-light-gray-0 box-border hidden border-[0.5px] border-solid border-lightgray" />
              <div className="relative text-6xl leading-[100%] font-medium font-medium text-light-gray-11 text-left inline-block min-w-[51px] z-[1]">
                Hub
              </div>
            </button>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
        <button className="cursor-pointer [border:none] py-3.5 px-[47.5px] bg-lightskyblue-200 rounded-lg shadow-[2px_2px_6px_rgba(0,_0,_0,_0.3)] flex flex-row items-start justify-start whitespace-nowrap">
          <div className="w-[99px] relative text-sm tracking-[-0.01em] leading-[20px] font-semibold font-medium text-light-gray-0 text-center inline-block min-w-[99px]">
            Scan QR Code
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddHubTank;
