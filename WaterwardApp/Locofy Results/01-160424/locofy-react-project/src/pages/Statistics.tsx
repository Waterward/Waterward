import { FunctionComponent } from "react";

const Statistics: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-light-gray-0 overflow-hidden flex flex-col items-start justify-start gap-[17px] leading-[normal] tracking-[normal] text-left text-xl text-light-gray-11 font-medium">
      <header className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-mini text-darkslategray font-medium">
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
      <div className="flex flex-row items-start justify-start pt-0 px-6 pb-[3px]">
        <h2 className="m-0 w-[100px] relative text-inherit leading-[32px] font-semibold font-inherit whitespace-nowrap inline-block min-w-[100px]">{`For Today     `}</h2>
      </div>
      <main className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-6 pl-[23px] box-border max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full text-left text-lg text-light-gray-11 font-medium">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[18px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-5 px-[13px] pb-[21px] box-border relative gap-[25px] min-w-[101px]">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[1px] bottom-[1px] left-[1px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/mask-group1.svg"
                />
                <div className="absolute h-full w-full top-[1px] right-[0px] bottom-[0px] left-[0px] rounded-lg box-border z-[1] border-[0.5px] border-solid border-lightgray" />
              </div>
              <div className="w-[81px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
                <h3 className="m-0 flex-1 relative text-inherit leading-[100%] font-medium font-inherit z-[2]">
                  Water
                </h3>
              </div>
              <div className="w-[124px] h-[103px] flex flex-col items-end justify-start pt-0 px-0 pb-[22px] box-border">
                <div className="flex-1 flex flex-row items-start justify-end py-0 pr-[7px] pl-3">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8.7px]">
                    <div className="h-20 w-[5px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-skyblue-300 w-full h-full z-[2]" />
                      <div className="absolute top-[2px] left-[0px] rounded-t-lg rounded-b-none bg-lightskyblue-200 w-[5px] h-[78px] z-[3]" />
                    </div>
                    <div className="h-20 w-1.5 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-skyblue-300 w-full h-full z-[2]" />
                      <div className="absolute top-[21px] left-[0px] rounded-t-lg rounded-b-none bg-lightskyblue-200 w-1.5 h-[59px] z-[3]" />
                    </div>
                    <div className="h-20 w-[5px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-skyblue-300 w-full h-full z-[2]" />
                      <div className="absolute top-[41px] left-[0px] rounded-t-lg rounded-b-none bg-lightskyblue-200 w-[5px] h-[39px] z-[3]" />
                    </div>
                    <div className="h-20 w-1.5 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-skyblue-300 w-full h-full z-[2]" />
                      <div className="absolute top-[29px] left-[0px] rounded-t-lg rounded-b-none bg-lightskyblue-200 w-1.5 h-[51px] z-[3]" />
                    </div>
                    <div className="h-20 w-1.5 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-skyblue-300 w-full h-full z-[2]" />
                      <div className="absolute top-[44px] left-[0px] rounded-t-lg rounded-b-none bg-lightskyblue-200 w-1.5 h-9 z-[3]" />
                    </div>
                    <div className="self-stretch w-[5px] relative rounded-t-lg rounded-b-none bg-skyblue-300 z-[2]" />
                    <div className="self-stretch w-1.5 relative rounded-t-lg rounded-b-none bg-skyblue-300 z-[2]" />
                    <div className="self-stretch w-[5px] relative rounded-t-lg rounded-b-none bg-skyblue-300 z-[2]" />
                  </div>
                </div>
                <img
                  className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[4]"
                  loading="lazy"
                  alt=""
                  src="/vector-51.svg"
                />
              </div>
              <div className="w-[111px] flex flex-row items-start justify-start py-0 px-2 box-border text-6xl text-light-gray-0">
                <div className="flex-1 relative leading-[28px] font-medium z-[2]">
                  <span>{`2.1 `}</span>
                  <span className="text-sm">liters</span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg box-border flex flex-col items-start justify-start pt-[18px] px-[15px] pb-[72px] gap-[72px] min-w-[101px] z-[3] border-[0.5px] border-solid border-lightgray">
              <h3 className="m-0 w-[115px] relative text-inherit leading-[100%] font-medium font-inherit flex items-center">
                Most Used
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[26px] pl-[25px] text-center text-6xl text-lightskyblue-200">
                <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-1">
                    <div className="flex-1 relative leading-[100%] font-semibold inline-block min-w-[62px] z-[2]">
                      2628
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start relative text-xs text-light-gray-11">
                    <div className="h-[119.1px] w-[119px] absolute !m-[0] top-[-54px] left-[-29px]">
                      <div className="absolute top-[0px] left-[10px] rounded-[50%] box-border w-full h-full border-[0px] border-solid border-skyblue-200" />
                      <img
                        className="absolute top-[15.8px] left-[0px] rounded-[9px] w-[106.9px] h-[103.3px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/subtract.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[100%] font-medium z-[2]">
                      Steps Completed
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[154px] h-[236px] relative rounded-lg box-border hidden border-[0.5px] border-solid border-lightgray" />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[100px]">
              <div className="self-stretch rounded-lg flex flex-col items-start justify-start pt-[27px] px-5 pb-10 gap-[37px] border-[0.5px] border-solid border-lightgray">
                <div className="w-[154px] h-[161px] relative rounded-lg box-border hidden border-[0.5px] border-solid border-lightgray" />
                <h3 className="m-0 w-[104px] relative text-inherit leading-[100%] font-medium font-inherit flex items-center z-[1]">
                  Calories
                </h3>
                <div className="w-[104px] flex flex-col items-start justify-start gap-[10px] text-6xl text-lightskyblue-200">
                  <div className="self-stretch h-[15px] relative leading-[100%] font-medium flex items-center shrink-0 z-[1]">
                    510.43
                  </div>
                  <div className="self-stretch relative text-sm leading-[15px] font-medium text-light-gray-11 z-[1]">
                    Kcol
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-col items-start justify-start pt-[27px] px-5 pb-9 gap-[40px] z-[1] border-[0.5px] border-solid border-lightgray">
                <h3 className="m-0 w-[104px] relative text-inherit leading-[100%] font-medium font-inherit flex items-center">
                  Sleep
                </h3>
                <div className="w-[104px] flex flex-col items-start justify-start gap-[7px] text-6xl text-lightskyblue-200">
                  <div className="self-stretch h-[15px] relative leading-[100%] font-medium flex items-center shrink-0 whitespace-nowrap">
                    08:00
                  </div>
                  <div className="self-stretch relative text-sm leading-[15px] font-medium text-light-gray-11">
                    hours
                  </div>
                </div>
                <div className="w-[154px] h-[157px] relative rounded-lg box-border hidden border-[0.5px] border-solid border-lightgray" />
              </div>
            </div>
            <div className="flex-1 rounded-lg box-border flex flex-col items-start justify-start pt-[27px] px-0 pb-12 relative gap-[50px] min-w-[100px] border-[0.5px] border-solid border-lightgray">
              <div className="self-stretch h-[336px] relative rounded-lg box-border hidden z-[0] border-[0.5px] border-solid border-lightgray" />
              <div className="w-[132px] flex flex-row items-start justify-start py-0 px-3.5 box-border">
                <h3 className="m-0 flex-1 relative text-inherit leading-[100%] font-medium font-inherit z-[1]">
                  Heart
                </h3>
              </div>
              <div className="absolute !m-[0] bottom-[37px] left-[14px] text-sm leading-[15px] font-medium inline-block min-w-[34px] z-[2]">
                bpm
              </div>
              <div className="self-stretch h-[194px] relative text-6xl text-lightskyblue-200">
                <div className="absolute top-[0px] left-[20px] w-[107px] h-[86px]">
                  <img
                    className="absolute w-[calc(100%_-_13.6px)] top-[0px] right-[7px] left-[6.6px] max-w-full overflow-hidden h-[86px] z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                  <img
                    className="absolute top-[24px] left-[0px] w-[107px] h-[31px] z-[3]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="absolute top-[83px] left-[0px] w-full flex flex-col items-start justify-end pt-[86px] px-3.5 pb-2.5 box-border">
                  <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/rectangle-163.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[1px] w-[153px] h-[25px] z-[3]"
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                  <div className="w-[104px] h-[15px] relative leading-[100%] font-medium flex items-center shrink-0 z-[2]">
                    105
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="self-stretch h-[82px] relative max-w-full">
        <div className="absolute top-[0px] left-[158px] rounded-31xl bg-light-gray-0 shadow-[0px_2px_14px_rgba(0,_0,_0,_0.09)] w-[53.8px] h-14 z-[1]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl bg-light-gray-0 shadow-[0px_2px_14px_rgba(0,_0,_0,_0.09)] hidden" />
          <img
            className="absolute top-[15px] left-[14px] w-[25px] h-[25.1px] z-[2]"
            loading="lazy"
            alt=""
            src="/group-911.svg"
          />
        </div>
        <footer className="absolute top-[6px] left-[0px] bg-light-gray-0 shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.1)] w-full flex flex-row flex-wrap items-start justify-between pt-[11px] pb-[22px] pr-[25px] pl-[22.1px] box-border max-w-full gap-[20px] text-center text-xs text-light-gray-11 font-roboto">
          <div className="h-[76px] w-[375px] relative bg-light-gray-0 shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
          <div className="flex flex-row items-end justify-start gap-[32.9px]">
            <div className="flex flex-col items-end justify-start gap-[3px]">
              <div className="flex flex-row items-start justify-end py-0 pr-[5.1px] pl-1.5">
                <img
                  className="h-6 w-[23.1px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/home-11.svg"
                />
              </div>
              <div className="relative tracking-[0.4px] leading-[16px] font-medium inline-block min-w-[34px] z-[1]">
                Home
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[7px] text-5xl text-[transparent] font-font-awesome-6-free">
              <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-[13px]">
                <h1 className="m-0 w-[21px] relative text-inherit tracking-[0.4px] leading-[16px] font-normal font-inherit inline-block [-webkit-text-stroke:1.5px_#5dccfc] min-w-[21px] whitespace-nowrap z-[1]">
                  chart-simple
                </h1>
              </div>
              <div className="relative text-xs tracking-[0.4px] leading-[16px] font-roboto text-lightskyblue-200 inline-block min-w-[48px] z-[1]">
                Analysis
              </div>
            </div>
          </div>
          <div className="w-[111.3px] flex flex-col items-start justify-start relative gap-[3px]">
            <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-[8.8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/search-1.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="w-11 relative tracking-[0.4px] leading-[16px] inline-block min-w-[44px] z-[1]">
                Setting
              </div>
              <div className="w-[41px] relative tracking-[0.4px] leading-[16px] inline-block min-w-[41px] z-[1]">
                Profile
              </div>
            </div>
            <img
              className="w-6 h-6 absolute !m-[0] top-[0px] right-[5.5px] overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/usersvgrepocom-1.svg"
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Statistics;
