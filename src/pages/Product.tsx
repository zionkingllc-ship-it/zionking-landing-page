import { Button } from "@/components/ui/button";
import zionaWordMarkColumn from "@/assets/ziona-wordmark-column.png";
import playstore from "@/assets/Playstore.png";
import { TbBrandAppleFilled } from "react-icons/tb";
import smallLeftImage from "@/assets/image 69.png";

const Product = () => {
  return (
    <section className="px-6">
      <div className="w-full px-4 md:px-20 py-5 flex flex-col md:flex-row justify-center items-center md:items-start gap-12 overflow-hidden">
        <div className="w-72 h-96 flex flex-col justify-center items-center gap-10 shrink-0">
          <img
            src={zionaWordMarkColumn}
            alt="Ziona Wordmark Column"
            width={287}
            height={350}
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="w-full max-w-[958px] flex flex-col justify-start items-center md:items-start gap-10">

          <div className="w-full flex flex-col justify-start items-center md:items-start gap-8">

            <div className="w-full flex justify-center md:justify-start">
              <p className="w-full max-w-[953px] text-[#393535] text-lg md:text-2xl font-normal font-['Helvetica'] leading-6 md:leading-8 text-center md:text-left">
                <span className="font-bold">Ziona </span>
                is the first product developed under Zion King LLC. It is a
                Christian-first social platform designed to allow users to create,
                share, and engage with faith-based content in a safe, moderated,
                and values-aligned environment.
                <br />
                <br />
                <span className="font-bold">Ziona </span>
                serves as the initial proof point for the company’s vision and
                establishes the foundation for future products within the ecosystem.
              </p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-5 md:gap-8">

              <div className="w-28 flex flex-col justify-start items-start gap-2">
                <h3 className="text-[#2d2e2e] text-3xl font-semibold font-['Roboto']">
                  2,123+
                </h3>

                <p className="text-[#2d2e2e] text-lg font-normal font-['Roboto'] leading-5">
                  Active users
                </p>
              </div>

              <div className="w-0 h-20 opacity-30 outline outline-1 outline-offset-[-0.50px] outline-[#ababab]" />

              <div className="w-28 flex flex-col justify-start items-start gap-2">
                <h3 className="text-[#2d2e2e] text-3xl font-semibold font-['Roboto']">
                  10k+
                </h3>

                <p className="text-[#2d2e2e] text-lg font-normal font-['Roboto'] leading-5">
                  Downloads
                </p>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="inline-flex w-64 items-center justify-center gap-3 rounded-[10px] bg-[#181419] px-6 py-4 text-lg font-bold text-white shadow-[inset_0px_6px_4px_0px_rgba(166,163,57,0.16)] hover:bg-[#181419]/95 mb-11 lg:mb-0"
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 overflow-hidden lg:px-[82px]">
        <div className="flex flex-col">
          <h3 className="text-center text-[#1a131c] text-4xl lg:text-6xl font-bold font-['Helvetica'] mb-6">Download the App</h3>
          <div className="flex w-full self-center items-center justify-center gap-3 lg:gap-4 lg:justify-center mb-10 lg:mb-0">
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-black px-3 py-2 text-white transition hover:scale-[1.02] hover:opacity-90 lg:gap-3 lg:px-5 lg:py-3">
              <TbBrandAppleFilled className="h-5 w-5 text-white lg:h-7 lg:w-7" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[9px] font-medium uppercase tracking-wide text-white/70 lg:text-[11px]">
                  Download on the
                </span>
                <span className="text-sm font-semibold lg:text-lg">
                  App Store
                </span>
              </div>
            </button>

            <button className="flex items-center justify-center gap-2 rounded-2xl bg-black px-3 py-2 text-white transition hover:scale-[1.02] hover:opacity-90 lg:gap-3 lg:px-5 lg:py-3">
              <img
                src={playstore}
                alt="playstore"
                className="h-5 w-5 lg:h-7 lg:w-7"
                width={28}
                height={32}
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[9px] font-medium uppercase tracking-wide text-white/70 lg:text-[11px]">
                  Get it on
                </span>
                <span className="text-sm font-semibold lg:text-lg">
                  Google Play
                </span>
              </div>
            </button>
          </div>
        </div>

        <img
          src={smallLeftImage}
          alt="ziona-sample-image"
          width={327}
          height={651}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Product;
