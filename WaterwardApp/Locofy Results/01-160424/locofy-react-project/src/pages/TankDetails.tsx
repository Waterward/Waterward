import { FunctionComponent } from "react";

const TankDetails: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-aliceblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start gap-[44px] leading-[normal] tracking-[normal] text-center text-sm text-light-gray-0 font-medium">
      <img
        className="w-[394.8px] h-[378.5px] absolute !m-[0] bottom-[278.8px] left-[-218.2px] overflow-hidden shrink-0 object-contain"
        alt=""
        src="/shape@2x.png"
      />
      <img
        className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[1]"
        alt=""
        src="/hicon--bold--left-circle-21.svg"
      />
      <div className="self-stretch h-[34px] relative hidden opacity-[0.3] z-[2]">
        <div className="absolute bottom-[9px] left-[calc(50%_-_66.5px)] rounded-81xl bg-neutral-1 w-[134px] h-[5px]" />
      </div>
      <div className="w-[194px] rounded-lg bg-lightskyblue-200 shadow-[2px_2px_6px_rgba(0,_0,_0,_0.3)] hidden flex-row items-center justify-center py-3.5 px-3 box-border whitespace-nowrap z-[3]">
        <div className="relative tracking-[-0.01em] leading-[20px] font-semibold pl-5 pr-5">
          Goal Not Archive
        </div>
      </div>
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[34px] box-border gap-[12px] max-w-full text-center text-xl text-light-gray-11 font-medium">
        <header className="self-stretch flex flex-row items-start justify-start max-w-full z-[2] text-center text-mini text-darkslategray font-medium">
          <div className="flex-1 flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[14.4px] pl-[21px] box-border max-w-full gap-[20px]">
            <div className="w-[54px] relative tracking-[-0.24px] leading-[20px] font-semibold inline-block shrink-0">
              9:41
            </div>
            <div className="w-[66.6px] flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
                <img
                  className="h-[10.7px] w-[17px] relative"
                  loading="lazy"
                  alt=""
                  src="/cellular-connection1.svg"
                />
                <img
                  className="h-[11px] w-[15.3px] relative"
                  loading="lazy"
                  alt=""
                  src="/wifi.svg"
                />
                <div className="h-[11.3px] w-[24.3px] relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[2.67px] box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-darkslategray" />
                  <img
                    className="absolute top-[3.7px] left-[23px] w-[1.3px] h-1 mix-blend-normal"
                    loading="lazy"
                    alt=""
                    src="/cap1.svg"
                  />
                  <div className="absolute top-[2px] left-[2px] rounded-[1.33px] bg-darkslategray w-[18px] h-[7.3px] z-[1]" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="w-[302px] flex flex-row items-start justify-start py-0 px-6 box-border">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <img
                className="w-5 h-[18.3px] relative object-contain"
                loading="lazy"
                alt=""
                src="/group1@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start relative">
              <h1 className="m-0 w-[181px] relative text-inherit leading-[32px] font-semibold font-inherit inline-block whitespace-nowrap z-[2]">
                Drink Water Glass
              </h1>
              <div className="h-[319.6px] w-[212px] absolute !m-[0] right-[-97px] bottom-[-231.6px]">
                <img
                  className="absolute top-[-107px] left-[0px] w-[314.6px] h-[301.6px] overflow-hidden object-contain z-[1]"
                  alt=""
                  src="/shape-11@2x.png"
                />
                <img
                  className="absolute top-[149px] left-[1px] w-[100px] h-[170.6px] overflow-hidden z-[2]"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[147px] flex flex-row items-start justify-start py-0 px-7 box-border text-right text-3xs text-gray">
        <div className="self-stretch flex flex-col items-end justify-start gap-[1px]">
          <div className="flex flex-row items-end justify-start gap-[4px]">
            <div className="w-[13px] relative leading-[13px] font-medium flex items-center shrink-0 min-w-[13px] z-[1]">
              10
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="w-[30px] h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-gray" />
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[2px]">
            <div className="w-[9px] relative leading-[13px] font-medium flex items-center shrink-0 min-w-[9px] [debug_commit:1de1738] z-[1]">
              9
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="w-[30px] h-0.5 relative box-border shrink-0 [debug_commit:1de1738] z-[1] border-t-[2px] border-solid border-gray" />
            </div>
          </div>
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-row items-end justify-start gap-[2px]">
              <div className="w-[9px] relative leading-[13px] font-medium flex items-center shrink-0 min-w-[9px] [debug_commit:1de1738] z-[1]">
                8
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                <div className="w-[30px] h-0.5 relative box-border shrink-0 [debug_commit:1de1738] z-[1] border-t-[2px] border-solid border-gray" />
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-[12px] mt-[-2.7px] text-left text-mini text-light-gray-11">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.4px]">
                <div className="flex flex-row items-start justify-start gap-[3px]">
                  <h3 className="m-0 relative text-inherit leading-[15.3px] font-semibold font-inherit z-[1]">
                    <p className="m-0">6 Glass</p>
                    <p className="m-0">Water</p>
                  </h3>
                  <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                    <img
                      className="w-5 h-3 relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-end justify-start gap-[3px] text-right text-3xs text-gray">
                <div className="w-2 relative leading-[13px] font-medium flex items-center shrink-0 min-w-[8px] z-[1]">
                  7
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                  <div className="w-[30px] h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-gray" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[2px]">
            <div className="w-[9px] relative leading-[13px] font-medium flex items-center shrink-0 min-w-[9px] z-[1]">
              6
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
              <div className="w-[30px] h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-gray" />
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[2px]">
            <div className="w-[9px] relative leading-[13px] font-medium flex items-center shrink-0 min-w-[9px] z-[1]">
              5
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="w-[30px] h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-gray" />
            </div>
          </div>
          <div className="flex flex-row items-end justify-start pt-0 px-0 pb-[3px] gap-[2px]">
            <div className="w-[9px] relative leading-[13px] font-medium flex items-center shrink-0 min-w-[9px] z-[1]">
              4
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
              <div className="w-[30px] h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-gray" />
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[3px]">
            <div className="w-2 relative leading-[13px] font-medium flex items-center shrink-0 min-w-[8px] z-[1]">
              3
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
              <div className="w-[30px] h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-gray" />
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[3px]">
            <div className="w-2 relative leading-[13px] font-medium flex items-center shrink-0 min-w-[8px] z-[1]">
              2
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <div className="w-[30px] h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-gray" />
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[3px]">
            <div className="w-2 relative leading-[13px] font-medium flex items-center shrink-0 min-w-[8px] z-[1]">
              1
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
              <div className="w-[30px] h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-gray" />
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch rounded-t-9xl rounded-b-none bg-light-gray-0 shadow-[0px_4px_45px_rgba(27,_170,_225,_0.16)] overflow-hidden flex flex-col items-start justify-start pt-[37px] px-0 pb-0 relative gap-[24px] z-[1] text-left text-xl text-neutral-4 font-medium">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[68px] pb-2 text-center text-neutral-1">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[39px]">
              <h1 className="m-0 w-[149px] relative text-inherit leading-[32px] font-semibold font-inherit inline-block">
                Tank Statistics
              </h1>
            </div>
            <h3 className="m-0 relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-inherit text-neutral-4 text-left">
              We prepared a lot of goals for you!
            </h3>
          </div>
        </div>
        <div className="w-[60px] h-[3px] absolute !m-[0] top-[14px] right-[152px] rounded-[15px] bg-lightskyblue-100" />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-7 pb-1 text-sm">
          <div className="flex-1 rounded-2xl bg-background-1 flex flex-row items-start justify-start p-4 gap-[10px] whitespace-nowrap">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/hicon--bold--search-1.svg"
            />
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px] font-medium">
              Search Template
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-7 text-xs">
          <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[12px]">
              <div className="flex-1 rounded-2xl bg-light-gray-0 box-border overflow-hidden flex flex-col items-start justify-start pt-[11px] pb-[15px] pr-[13px] pl-4 gap-[12px] min-w-[115px] border-[0.5px] border-solid border-neutral-5">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[82px] whitespace-nowrap">
                  Summer time
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-neutral-1">
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <div className="relative tracking-[-0.01em] leading-[24px] font-semibold inline-block min-w-[64px]">
                      10 Glass
                    </div>
                  </div>
                  <h1 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit inline-block min-w-[25px]">
                    🌴
                  </h1>
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-light-gray-0 box-border overflow-hidden flex flex-col items-start justify-start pt-[11px] pb-[15px] pr-[15px] pl-4 gap-[12px] min-w-[115px] border-[0.5px] border-solid border-neutral-5">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[42px]">
                  Sporty
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-neutral-1">
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[24px] font-semibold font-inherit inline-block min-w-[57px]">
                      7 Glass
                    </h2>
                  </div>
                  <h1 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit inline-block min-w-[25px]">
                    🏀
                  </h1>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[12px]">
              <div className="flex-1 rounded-2xl bg-light-gray-0 box-border overflow-hidden flex flex-col items-start justify-start pt-[11px] pb-[15px] pr-[13px] pl-4 gap-[12px] min-w-[115px] border-[0.5px] border-solid border-neutral-5">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[63px]">
                  Snow day
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-neutral-1">
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <div className="relative tracking-[-0.01em] leading-[24px] font-semibold inline-block min-w-[59px]">
                      5 Glass
                    </div>
                  </div>
                  <div className="relative text-5xl leading-[32px] font-semibold inline-block min-w-[25px]">
                    ❄️
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-light-gray-0 box-border overflow-hidden flex flex-col items-start justify-start pt-[11px] pb-[15px] pr-3.5 pl-4 gap-[12px] min-w-[115px] border-[0.5px] border-solid border-neutral-5">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[34px]">
                  Child
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-neutral-1">
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[24px] font-semibold font-inherit inline-block min-w-[59px]">
                      4 Glass
                    </h2>
                  </div>
                  <h1 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit inline-block min-w-[25px]">
                    🌈
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="self-stretch flex flex-row items-start justify-center pt-5 pb-[9px] pr-5 pl-[21px] opacity-[0.3]">
          <div className="h-[5px] w-[134px] relative rounded-81xl bg-neutral-1" />
        </footer>
      </section>
    </div>
  );
};

export default TankDetails;
