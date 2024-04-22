import { FunctionComponent } from "react";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start gap-[24px] leading-[normal] tracking-[normal]">
      <div className="w-[122.7px] h-36 absolute !m-[0] top-[129px] right-[40.3px] z-[5] flex items-center justify-center">
        <img
          className="w-full h-full z-[5] object-contain absolute left-[-20px] top-[2px] [transform:scale(2.274)]"
          loading="lazy"
          alt=""
          src="/group-90@2x.png"
        />
      </div>
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
                src="/cellular-connection.svg"
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
                  src="/cap.svg"
                />
                <div className="absolute top-[2px] left-[2px] rounded-[1.33px] bg-darkslategray w-[18px] h-[7.3px] z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-7 pb-[42px]">
        <section className="flex-1 flex flex-col items-end justify-start gap-[20px] text-left text-sm text-neutral-4 font-medium">
          <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-1 gap-[20px]">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[102px]">
                Good Morning,
              </div>
              <h2 className="m-0 relative text-xl leading-[32px] font-semibold font-inherit text-neutral-1">
                Ayham Al Ali
              </h2>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="w-10 h-10 rounded-[70px] bg-light-gray-0 shadow-[0px_4px_45px_rgba(27,_170,_225,_0.08)] flex flex-row items-center justify-center p-2.5 box-border relative gap-[10px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/hicon--bold--notification-3.svg"
                />
                <div className="h-2.5 w-2.5 absolute !m-[0] top-[0px] left-[29px] rounded-[50%] bg-red" />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-light-gray-0 shadow-[0px_4px_45px_rgba(27,_170,_225,_0.08)] overflow-hidden flex flex-col items-start justify-start pt-2.5 px-5 pb-[27px] relative gap-[47px] text-xl text-neutral-1">
            <img
              className="w-[68px] h-[116px] relative overflow-hidden shrink-0 hidden z-[0]"
              alt=""
              src="/frame.svg"
            />
            <div className="w-[131px] flex flex-col items-start justify-start">
              <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit inline-block min-w-[106px]">
                Main Tank
              </h2>
              <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium text-neutral-4 whitespace-nowrap z-[1] text-sm">
                <span>{`70% left `}</span>
                <span className="text-[8px]">(7000ml/10000ml)</span>
              </div>
            </div>
            <div className="w-[375px] h-[259.4px] absolute !m-[0] bottom-[-148.4px] left-[calc(50%_-_187.5px)]">
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[-236px] max-h-full w-[618.1px]"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className="absolute top-[14.8px] left-[-87.8px] w-[519.4px] h-[206.3px] z-[1]"
                alt=""
                src="/go-to-statistics-button.svg"
              />
              <div className="absolute top-[70px] left-[56px] rounded-2xl bg-cornflowerblue [filter:blur(32px)] w-[76px] h-6 z-[2]" />
            </div>
            <button className="cursor-pointer [border:none] py-1 px-[28.5px] bg-light-gray-0 rounded-[25px] flex flex-row items-start justify-start whitespace-nowrap z-[3]">
              <div className="relative text-3xs tracking-[-0.02em] leading-[16px] font-medium font-medium text-light-gray-11 text-left inline-block min-w-[60px] whitespace-nowrap">
                More Details
              </div>
            </button>
            <div className="w-[100px] h-[100px] relative overflow-hidden shrink-0 hidden z-[4]" />
            <img
              className="w-[122.7px] h-36 relative object-cover hidden z-[5]"
              alt=""
              src="/group-89@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[11px] text-lg text-light-gray-11">
            <div className="self-stretch [filter:drop-shadow(0px_0px_45px_rgba(27,_169,_225,_0.25))] flex flex-col items-start justify-start pt-[18.4px] px-[26.6px] pb-[19.1px] relative gap-[42.9px]">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] left-[0px]">
                <div className="absolute top-[0px] left-[2px] w-full h-full flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain absolute left-[0px] top-[1px] [transform:scale(1.422)]"
                    alt=""
                    src="/mask-group.svg"
                  />
                </div>
                <div className="absolute top-[0.9px] left-[0px] rounded-lg w-full h-full z-[1]" />
              </div>
              <div className="w-[253.6px] flex flex-col items-start justify-start gap-[22.4px]">
                <div className="w-[234.8px] flex flex-row items-start justify-start py-0 pr-3.5 pl-[14.4px] box-border">
                  <h3 className="m-0 flex-1 relative text-inherit leading-[14px] font-medium font-inherit z-[2]">
                    Today’s Water Usage
                  </h3>
                </div>
                <div className="self-stretch h-[74px] relative">
                  <div className="absolute top-[0px] left-[24.5px] w-[10.2px] h-[73.1px]">
                    <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-skyblue-300 w-full h-full" />
                    <div className="absolute top-[1.8px] left-[0px] rounded-t-lg rounded-b-none bg-lightskyblue-200 w-[10.2px] h-[71.2px] z-[3]" />
                  </div>
                  <div className="absolute top-[0px] left-[53.2px] w-[12.3px] h-[73.1px]">
                    <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-skyblue-300 w-full h-full" />
                    <div className="absolute top-[19.1px] left-[0px] rounded-t-lg rounded-b-none bg-lightskyblue-200 w-[12.3px] h-[53.9px] z-[3]" />
                  </div>
                  <div className="absolute top-[0px] left-[83.8px] w-[10.2px] h-[73.1px]">
                    <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-skyblue-300 w-full h-full" />
                    <div className="absolute top-[37.4px] left-[0px] rounded-t-lg rounded-b-none bg-lightskyblue-200 w-[10.2px] h-[35.6px] z-[3]" />
                  </div>
                  <div className="absolute top-[0px] left-[110.4px] w-[12.3px] h-[73.1px]">
                    <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-skyblue-300 w-full h-full" />
                    <div className="absolute top-[26.4px] left-[0px] rounded-t-lg rounded-b-none bg-lightskyblue-200 w-[12.3px] h-[46.6px] z-[3]" />
                  </div>
                  <div className="absolute top-[0px] left-[141.1px] w-[12.3px] h-[73.1px]">
                    <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-skyblue-300 w-full h-full" />
                    <div className="absolute top-[40.1px] left-[0px] rounded-t-lg rounded-b-none bg-lightskyblue-200 w-[12.3px] h-[32.9px] z-[3]" />
                  </div>
                  <div className="absolute top-[0px] left-[169.7px] rounded-t-lg rounded-b-none bg-skyblue-300 w-[10.2px] h-[73.1px] z-[2]" />
                  <div className="absolute top-[0px] left-[198.3px] rounded-t-lg rounded-b-none bg-skyblue-300 w-[12.3px] h-[73.1px] z-[2]" />
                  <div className="absolute top-[0px] left-[229px] rounded-t-lg rounded-b-none bg-skyblue-300 w-[10.2px] h-[73.1px] z-[2]" />
                  <img
                    className="absolute top-[73px] left-[0px] w-[253.6px] h-px z-[4]"
                    loading="lazy"
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
              </div>
              <div className="w-[226.9px] flex flex-row items-start justify-start py-0 pr-4 pl-[16.3px] box-border text-6xl text-light-gray-0">
                <div className="flex-1 relative leading-[25.6px] font-medium z-[2]">
                  <span>{`257 `}</span>
                  <span className="text-sm">liters</span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[63px] pl-[62px]">
              <button className="cursor-pointer [border:none] py-3.5 px-[43px] bg-lightskyblue-200 rounded-lg shadow-[2px_2px_6px_rgba(0,_0,_0,_0.3)] flex flex-row items-start justify-start whitespace-nowrap">
                <div className="w-[108px] relative text-sm tracking-[-0.01em] leading-[20px] font-semibold font-medium text-light-gray-0 text-center inline-block min-w-[108px]">
                  Go To Statistics
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[45px] text-center text-xs">
            <div className="w-[220px] relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
              You got 50% of today’s goal, keep focus on your health!
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
            src="/group-91.svg"
          />
        </div>
        <footer className="absolute top-[6px] left-[0px] bg-light-gray-0 shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.1)] w-full flex flex-row flex-wrap items-start justify-between pt-[11px] pb-[22px] pr-[25px] pl-[22.1px] box-border max-w-full gap-[20px] text-center text-xs text-lightskyblue-200 font-roboto">
          <div className="h-[76px] w-[375px] relative bg-light-gray-0 shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
          <div className="flex flex-row items-end justify-start gap-[32.9px]">
            <div className="flex flex-col items-end justify-start gap-[3px]">
              <div className="flex flex-row items-start justify-end py-0 pr-[5.1px] pl-1.5">
                <img
                  className="h-6 w-[23.1px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/home-1.svg"
                />
              </div>
              <div className="relative tracking-[0.4px] leading-[16px] font-medium inline-block min-w-[34px] z-[1]">
                Home
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[7px] text-5xl text-[transparent] font-font-awesome-6-free">
              <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-[13px]">
                <h1 className="m-0 w-[21px] relative text-inherit tracking-[0.4px] leading-[16px] font-normal font-inherit inline-block [-webkit-text-stroke:1.5px_#000] min-w-[21px] whitespace-nowrap z-[1]">
                  chart-simple
                </h1>
              </div>
              <div className="relative text-xs tracking-[0.4px] leading-[16px] font-roboto text-light-gray-11 inline-block min-w-[48px] z-[1]">
                Analysis
              </div>
            </div>
          </div>
          <div className="w-[111.3px] flex flex-col items-start justify-start relative gap-[3px] text-light-gray-11">
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

export default Dashboard;
