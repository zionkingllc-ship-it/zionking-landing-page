import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import zionKingVideo from "@/assets/zion-king-video.mp4";
import zionKingPoster from "@/assets/zion-king-video-poster.jpg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LeftImage from "@/assets/Frame 2609262.png";
import RightImage from "@/assets/Frame 2609263.png";
import smallLeftImage from "@/assets/image 69.png";
import smallRightImage from "@/assets/image 70.png";

const exploreButtonClassName =
  "w-64 px-6 py-4 bg-[#181419] rounded-[10px] shadow-[inset_0px_6px_4px_0px_rgba(166,163,57,0.16)] font-bold text-lg text-primary-foreground hover:bg-[#181419]/95";

const HeroSection = () => {
  const heroPreviewRef = useRef<HTMLDivElement | null>(null);
  const flagshipSectionRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false);
  const [areFlagshipImagesVisible, setAreFlagshipImagesVisible] = useState(false);

  useEffect(() => {
    const preview = heroPreviewRef.current;

    if (!preview) {
      return;
    }

    let idleCallbackId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const browserWindow = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const loadAnimatedPreview = () => {
      if (browserWindow.requestIdleCallback) {
        idleCallbackId = browserWindow.requestIdleCallback(
          () => setShouldLoadHeroVideo(true),
          { timeout: 2000 },
        );
        return;
      }

      timeoutId = setTimeout(() => setShouldLoadHeroVideo(true), 500);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadAnimatedPreview();
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );

    observer.observe(preview);

    return () => {
      observer.disconnect();

      if (idleCallbackId !== undefined && browserWindow.cancelIdleCallback) {
        browserWindow.cancelIdleCallback(idleCallbackId);
      }

      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    const section = flagshipSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAreFlagshipImagesVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-[31px] lg:mt-[65px]">
      <h3 className="self-stretch text-center justify-start text-[#181419] text-4xl lg:text-6xl font-bold font-['Helvetica']">
        Faith, Technology, Purpose
      </h3>
      <p className="py-4 lg:pb-10 px-4 lg:px-[244px] self-stretch text-center justify-start text-[#181419] text-base lg:text-2xl font-['Helvetica']">
        We design and build digital experiences that makes faith more accessible, interactive and alive for a new generation
      </p>
      <div className="flex justify-center">
        <Button asChild size="lg" className={exploreButtonClassName}>
          <Link to="/product">Explore our products</Link>
        </Button>
      </div>
      <div className="mt-8 w-full pb-8 lg:pb-0 px-4 lg:px-0 sm:mt-10 lg:mt-12">
        <div ref={heroPreviewRef} className="overflow-hidden bg-muted shadow-lg">
          <video
            className="h-auto w-full object-cover"
            width={1280}
            height={720}
            poster={zionKingPoster}
            src={shouldLoadHeroVideo ? zionKingVideo : undefined}
            autoPlay
            loop
            muted
            playsInline
            preload={shouldLoadHeroVideo ? "metadata" : "none"}
            aria-label="Ziona product preview animation"
          >
            <img
              src={zionKingPoster}
              alt="Ziona product preview animation"
              width={1280}
              height={720}
            />
          </video>
        </div>
      </div>
      <div className=" bg-[#181419] lg:pt-[81px] py-8 px-[30px] lg:pb-[115px] lg:px-[64px]">
        <h3 className="self-stretch text-center justify-start text-[#f6eafa] text-3xl lg:text-6xl font-bold font-['Helvetica']">What We Build</h3>
        <div className="mt-[38px] flex flex-col items-center justify-center gap-6 lg:mt-[70px] lg:flex-row lg:items-stretch lg:gap-[57px]">
          <div className="inline-flex w-full max-w-80 flex-col items-start justify-start gap-2.5 overflow-hidden rounded-[20px] bg-gray-50 p-5 min-h-40 sm:max-w-96 lg:w-96 lg:min-h-64">
            <div className="flex self-stretch flex-col items-start justify-start gap-3">
              <h3 className="w-full justify-start text-2xl font-semibold leading-8 text-[#332b36] font-['Roboto'] lg:text-3xl lg:leading-10">
                Faith-Based Platforms
              </h3>
              <p className="self-stretch justify-start text-lg font-normal leading-6 text-[#393535] font-['Roboto'] lg:text-2xl lg:leading-8">
                Digital products designed to inspire, teach and connect believers.
              </p>
            </div>
          </div>
          <div className="inline-flex w-full max-w-80 flex-col items-start justify-start gap-2.5 overflow-hidden rounded-[20px] bg-gray-50 p-5 min-h-40 sm:max-w-96 lg:w-96 lg:min-h-64">
            <div className="flex self-stretch flex-col items-start justify-start gap-3">
              <h3 className="w-full justify-start text-2xl font-semibold leading-8 text-[#332b36] font-['Roboto'] lg:text-3xl lg:leading-10">
                Community Driven Experiences
              </h3>
              <p className="self-stretch justify-start text-lg font-normal leading-6 text-[#393535] font-['Roboto'] lg:text-2xl lg:leading-8">
                Tools that encourage real interaction, not just passive consumption.
              </p>
            </div>
          </div>
          <div className="inline-flex w-full max-w-80 flex-col items-start justify-start gap-2.5 overflow-hidden rounded-[20px] bg-gray-50 p-5 min-h-40 sm:max-w-96 lg:w-96 lg:min-h-64">
            <div className="flex self-stretch flex-col items-start justify-start gap-3">
              <h3 className="w-full justify-start text-2xl font-semibold leading-8 text-[#332b36] font-['Roboto'] lg:text-3xl lg:leading-10">
                Purposeful Designs
              </h3>
              <p className="self-stretch justify-start text-lg font-normal leading-6 text-[#393535] font-['Roboto'] lg:text-2xl lg:leading-8">
                Every product is built with intention, clarity and values at its core.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={flagshipSectionRef}>
        <div className="hidden md:block relative overflow-hidden bg-[#eceff1] min-h-[820px] lg:px-10 lg:py-24 xl:min-h-[920px]">
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <h3 className="text-4xl font-bold text-[#181419] font-['Helvetica'] lg:text-6xl">
              Our Flagship Product
            </h3>
            <p className="mt-4 max-w-2xl text-center text-lg font-normal text-[#423348] font-['Roboto'] leading-8 lg:mt-6 lg:text-2xl">
              <span className="font-bold">Ziona</span>
              <span> is a faith focused social platform built for both discovery and meaningful interaction. With a dynamic content feed and Interactive </span>
              <span className="font-bold">Faith Circles</span>
              <span>, users grow together in faith.</span>
            </p>
            <Button
              asChild
              size="lg"
              className="mt-10 flex w-64 items-center justify-center bg-[#181419] px-6 py-4 text-lg font-bold text-primary-foreground shadow-[inset_0px_6px_4px_0px_rgba(166,163,57,0.16)] hover:bg-[#181419]/95"
            >
              <Link to="/product">Join Ziona</Link>
            </Button>
          </div>
          <img
            src={LeftImage}
            alt="left-image"
            width={475}
            height={713}
            loading="lazy"
            decoding="async"
            className={[
              "pointer-events-none absolute left-0 top-[13rem] hidden w-[180px] transition-all duration-700 ease-out lg:block xl:w-auto",
              areFlagshipImagesVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0",
            ].join(" ")}
          />
          <img
            src={RightImage}
            alt="right-image"
            width={443}
            height={714}
            loading="lazy"
            decoding="async"
            className={[
              "pointer-events-none absolute right-0 top-0 hidden w-[180px] transition-all duration-700 ease-out lg:block xl:w-auto",
              areFlagshipImagesVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
            ].join(" ")}
          />
        </div>
        <div className="md:hidden flex flex-col items-center justify-center px-[29.5px] space-y-6 mt-8">
          <h3 className="text-4xl font-bold text-[#181419] font-['Helvetica'] w-max">
            Our Flagship Product
          </h3>
          <img
            src={smallLeftImage}
            alt="left-image"
            width={327}
            height={651}
            loading="lazy"
            decoding="async"
            className={[
              "pointer-events-none w-[180px] transition-all duration-700 ease-out lg:block xl:w-auto",
              areFlagshipImagesVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0",
            ].join(" ")}
          />
          <p className="mt-4 max-w-2xl text-center text-lg font-normal text-[#423348] font-['Roboto'] leading-8 ">
            <span className="font-bold">Ziona</span>
            <span> is a faith focused social platform built for both discovery and meaningful interaction. With a dynamic content feed and Interactive </span>
            <span className="font-bold">Faith Circles</span>
            <span>, users grow together in faith.</span>
          </p>
          <img
            src={smallRightImage}
            alt="right-image"
            width={328}
            height={653}
            loading="lazy"
            decoding="async"
            className={[
              "pointer-events-none w-[180px] transition-all duration-700 ease-out lg:block xl:w-auto",
              areFlagshipImagesVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0",
            ].join(" ")}
          />
        </div>
      </div>

      {/* What We Stand For */}
      <section className="py-16 px-6 lg:py-24 lg:px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20">
          {/* Heading */}
          <div className="md:w-[280px] lg:w-[320px] shrink-0 flex items-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#181419] font-['Helvetica'] leading-tight">
              What We Stand For
            </h2>
          </div>

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-x-16 lg:gap-y-14">
            {/* Faith First */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181419] flex items-center justify-center shrink-0">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="15" fill="#181419" />
                  <path d="M21.0967 11.3994C21.4665 11.3994 21.827 11.5202 22.1221 11.7432C22.4146 11.9643 22.6275 12.2739 22.7295 12.626L22.7656 12.7783L24.2139 20.0195C24.2963 20.4322 24.4861 20.8165 24.7637 21.1328C25.0412 21.449 25.3975 21.6869 25.7959 21.8223L25.8037 21.8252L25.8125 21.8271L25.9707 21.873L25.9775 21.875L27.6807 22.3008C27.9377 22.3651 28.1635 22.5203 28.3154 22.7373C28.4659 22.9522 28.5341 23.2137 28.5088 23.4746L28.4893 23.6035L27.7988 27.0537C27.7575 27.2603 27.676 27.4569 27.5586 27.6318C27.4411 27.8068 27.2899 27.9568 27.1143 28.0732C26.9387 28.1896 26.7419 28.2704 26.5352 28.3105C26.331 28.3501 26.1208 28.3493 25.917 28.3086L25.7783 28.2744L22.7354 27.4043H22.7344C21.769 27.1292 20.9205 26.5453 20.3184 25.7422L19.998 25.3154L19.6777 25.7422C19.1258 26.4786 18.3654 27.032 17.4951 27.3311L17.2617 27.4043L14.2051 28.2783C14.0024 28.3361 13.7904 28.3535 13.5811 28.3291C13.3718 28.3047 13.1693 28.2395 12.9854 28.1367C12.8014 28.0338 12.6392 27.8951 12.5088 27.7295C12.4111 27.6054 12.3325 27.4678 12.2754 27.3213L12.2256 27.1709L12.1943 27.0391L11.5029 23.584C11.451 23.3243 11.495 23.0544 11.626 22.8242C11.7563 22.5954 11.964 22.4195 12.2119 22.3311L12.332 22.2959L14.0107 21.877C14.419 21.7749 14.794 21.5677 15.0967 21.2754C15.3992 20.9832 15.6191 20.6162 15.7354 20.2119L15.7383 20.2041L15.7402 20.1963L15.7783 20.0361L15.7803 20.0273L15.7822 20.0195L17.2324 12.7646C17.286 12.4962 17.4035 12.2444 17.5752 12.0312C17.7471 11.818 17.9687 11.6495 18.2197 11.54C18.4708 11.4306 18.7444 11.3832 19.0176 11.4023C19.2908 11.4215 19.5558 11.5059 19.7891 11.6494L19.998 11.7783L20.207 11.6504C20.4665 11.4915 20.7704 11.3995 21.0967 11.3994ZM14.0947 23.0928L13.0693 23.3506L12.6992 23.4424L12.7734 23.8164L13.374 26.8184L13.459 27.2441L13.876 27.125L14.957 26.8145L15.3193 26.7109L15.2373 26.3438L14.583 23.3945L14.4932 22.9932L14.0947 23.0928ZM25.4141 23.3945L24.7588 26.3447L24.6768 26.7119L25.0391 26.8154L26.1201 27.125L26.5371 27.2441L26.6221 26.8184L27.2227 23.8164L27.2969 23.4424L26.9277 23.3506L25.9014 23.0928L25.5029 22.9932L25.4141 23.3945ZM20.5977 22.9824C20.5976 23.6861 20.8161 24.3729 21.2227 24.9473C21.6293 25.5217 22.2044 25.9556 22.8682 26.1895L22.876 26.1924L22.8838 26.1943L23.1045 26.2627L23.5186 26.3896L23.6123 25.9668L24.3467 22.666L24.3984 22.4326L24.2168 22.2764C23.6096 21.7531 23.1944 21.0418 23.0371 20.2559L21.5869 13.001V12.999C21.5696 12.9143 21.5307 12.8361 21.4746 12.7715L21.4131 12.7119L21.3428 12.6631C21.2683 12.6211 21.1832 12.5996 21.0967 12.5996V12.5986L21.0928 12.5996C20.962 12.601 20.8366 12.6527 20.7441 12.7451C20.6517 12.8376 20.6 12.963 20.5986 13.0938H20.5977V22.9824ZM19.3984 13.0938C19.3974 12.9952 19.3669 12.8999 19.3125 12.8193L19.25 12.7441L19.1738 12.6816C19.0927 12.6281 18.997 12.5997 18.8984 12.5996V12.8984L18.8955 12.5996C18.8098 12.6005 18.726 12.623 18.6523 12.665L18.582 12.7139C18.4939 12.7866 18.433 12.8871 18.4102 12.999V13.001L16.959 20.2559C16.802 21.0418 16.3873 21.753 15.7803 22.2764L15.5986 22.4326L15.6504 22.666L16.3838 25.9668L16.4766 26.3838L16.8857 26.2637L16.9307 26.25L16.9316 26.251C17.6419 26.0481 18.267 25.619 18.7119 25.0293C19.1568 24.4396 19.3982 23.7211 19.3984 22.9824V13.0938Z" fill="white" stroke="white" stroke-width="0.8" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#181419] font-['Roboto']">Faith First</h3>
                <p className="text-base text-[#6b6b6b] font-['Roboto'] leading-7">Christ is at the center of everything we build</p>
              </div>
            </div>

            {/* Authentic Connection */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181419] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="6" r="4" stroke="white" stroke-width="1.5" />
                  <path d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z" stroke="white" stroke-width="1.5" />
                  <path d="M18.0885 12.5385L18.5435 11.9423L18.0885 12.5385ZM19 8.64354L18.4681 9.17232C18.6089 9.31392 18.8003 9.39354 19 9.39354C19.1997 9.39354 19.3911 9.31392 19.5319 9.17232L19 8.64354ZM19.9115 12.5385L19.4565 11.9423L19.9115 12.5385ZM18.0885 12.5385L18.5435 11.9423C18.0571 11.571 17.619 11.274 17.2659 10.8891C16.9387 10.5324 16.75 10.1638 16.75 9.69973H16H15.25C15.25 10.6481 15.6642 11.362 16.1606 11.9031C16.6311 12.4161 17.2372 12.8322 17.6335 13.1347L18.0885 12.5385ZM16 9.69973H16.75C16.75 9.28775 16.9898 8.95469 17.2973 8.81862C17.5635 8.7008 17.9874 8.68874 18.4681 9.17232L19 8.64354L19.5319 8.11476C18.6627 7.24047 17.5865 7.0503 16.6903 7.44694C15.8352 7.82533 15.25 8.69929 15.25 9.69973H16ZM18.0885 12.5385L17.6335 13.1347C17.7825 13.2483 17.9756 13.3959 18.1793 13.5111C18.3832 13.6265 18.6656 13.75 19 13.75V13V12.25C19.0344 12.25 19.0168 12.2615 18.9179 12.2056C18.8187 12.1495 18.7061 12.0663 18.5435 11.9423L18.0885 12.5385ZM19.9115 12.5385L20.3665 13.1347C20.7628 12.8322 21.3689 12.4161 21.8394 11.9031C22.3358 11.362 22.75 10.6481 22.75 9.69973H22H21.25C21.25 10.1638 21.0613 10.5324 20.7341 10.8891C20.381 11.274 19.9429 11.571 19.4565 11.9423L19.9115 12.5385ZM22 9.69973H22.75C22.75 8.69929 22.1648 7.82533 21.3097 7.44694C20.4135 7.0503 19.3373 7.24047 18.4681 8.11476L19 8.64354L19.5319 9.17232C20.0126 8.68874 20.4365 8.7008 20.7027 8.81862C21.0102 8.95469 21.25 9.28775 21.25 9.69973H22ZM19.9115 12.5385L19.4565 11.9423C19.2939 12.0663 19.1813 12.1495 19.0821 12.2056C18.9832 12.2615 18.9656 12.25 19 12.25V13V13.75C19.3344 13.75 19.6168 13.6265 19.8207 13.5111C20.0244 13.3959 20.2175 13.2483 20.3665 13.1347L19.9115 12.5385Z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#181419] font-['Roboto']">Authentic Connection</h3>
                <p className="text-base text-[#6b6b6b] font-['Roboto'] leading-7">We prioritize real community over empty engagement</p>
              </div>
            </div>

            {/* Purposeful Innovation */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181419] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#181419] font-['Roboto']">Purposeful Innovation</h3>
                <p className="text-base text-[#6b6b6b] font-['Roboto'] leading-7">Technology should serve meaning not distract from it</p>
              </div>
            </div>

            {/* Excellence with Integrity */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181419] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1459 7.02251C11.5259 6.34084 11.7159 6 12 6C12.2841 6 12.4741 6.34084 12.8541 7.02251L12.9524 7.19887C13.0603 7.39258 13.1143 7.48944 13.1985 7.55334C13.2827 7.61725 13.3875 7.64097 13.5972 7.68841L13.7881 7.73161C14.526 7.89857 14.895 7.98205 14.9828 8.26432C15.0706 8.54659 14.819 8.84072 14.316 9.42898L14.1858 9.58117C14.0429 9.74833 13.9714 9.83191 13.9392 9.93531C13.9071 10.0387 13.9179 10.1502 13.9395 10.3733L13.9592 10.5763C14.0352 11.3612 14.0733 11.7536 13.8435 11.9281C13.6136 12.1025 13.2682 11.9435 12.5773 11.6254L12.3986 11.5431C12.2022 11.4527 12.1041 11.4075 12 11.4075C11.8959 11.4075 11.7978 11.4527 11.6014 11.5431L11.4227 11.6254C10.7318 11.9435 10.3864 12.1025 10.1565 11.9281C9.92674 11.7536 9.96476 11.3612 10.0408 10.5763L10.0605 10.3733C10.0821 10.1502 10.0929 10.0387 10.0608 9.93531C10.0286 9.83191 9.95713 9.74833 9.81418 9.58117L9.68403 9.42898C9.18097 8.84072 8.92945 8.54659 9.01723 8.26432C9.10501 7.98205 9.47396 7.89857 10.2119 7.73161L10.4028 7.68841C10.6125 7.64097 10.7173 7.61725 10.8015 7.55334C10.8857 7.48944 10.9397 7.39258 11.0476 7.19887L11.1459 7.02251Z" stroke="white" stroke-width="1.5" />
                  <path d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z" stroke="white" stroke-width="1.5" />
                  <path d="M12 16.0678L8.22855 19.9728C7.68843 20.5321 7.41837 20.8117 7.18967 20.9084C6.66852 21.1289 6.09042 20.9402 5.81628 20.4602C5.69597 20.2495 5.65848 19.8695 5.5835 19.1095C5.54117 18.6804 5.52 18.4658 5.45575 18.2861C5.31191 17.8838 5.00966 17.5708 4.6211 17.4219C4.44754 17.3554 4.24033 17.3335 3.82589 17.2896C3.09187 17.212 2.72486 17.1732 2.52138 17.0486C2.05772 16.7648 1.87548 16.1662 2.08843 15.6266C2.18188 15.3898 2.45194 15.1102 2.99206 14.5509L5.45575 12" stroke="white" stroke-width="1.5" />
                  <path d="M12 16.0678L15.7715 19.9728C16.3116 20.5321 16.5816 20.8117 16.8103 20.9084C17.3315 21.1289 17.9096 20.9402 18.1837 20.4602C18.304 20.2495 18.3415 19.8695 18.4165 19.1095C18.4588 18.6804 18.48 18.4658 18.5442 18.2861C18.6881 17.8838 18.9903 17.5708 19.3789 17.4219C19.5525 17.3554 19.7597 17.3335 20.1741 17.2896C20.9081 17.212 21.2751 17.1732 21.4786 17.0486C21.9423 16.7648 22.1245 16.1662 21.9116 15.6266C21.8181 15.3898 21.5481 15.1102 21.0079 14.5509L18.5442 12" stroke="white" stroke-width="1.5" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#181419] font-['Roboto']">Excellence with Integrity</h3>
                <p className="text-base text-[#6b6b6b] font-['Roboto'] leading-7">We build with care, clarity and accountability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#111111] px-6 py-6 lg:px-6 lg:py-10 mb-6">
        <div className="mx-auto flex w-full max-w-[1312px] items-center justify-center rounded-[24px] bg-gradient-to-br from-[#e8e0f0] via-[#d8cce8] to-[#c8b8e0] px-6 py-12 sm:px-8 sm:py-14 lg:px-20 lg:py-20">
          <div className="flex w-full max-w-[600px] flex-col items-center">
            <h2 className="mb-6 text-center text-4xl font-extrabold leading-tight tracking-[-0.02em] text-[#1a1a2e] sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Join What God is Building
            </h2>
            <p className="mb-10 max-w-[640px] text-center text-base font-normal leading-7 text-[#3d3d4e] sm:text-lg sm:leading-[1.6]">
              We&apos;re just getting started. Whether you&apos;re here to explore, connect or be part of
              something greater, there&apos;s a place for you.
            </p>

            <form className="flex w-full max-w-[600px] flex-col items-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-auto w-full rounded-[12px] border-0 bg-white px-5 py-4 text-base font-normal text-[#3d3d4e] shadow-[0_1px_3px_0_rgba(0,0,0,0.08)] placeholder:text-[#6b6b7a] focus-visible:ring-2 focus-visible:ring-[#1a1a2e]/20"
              />
              <div className="flex w-full justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full max-w-[300px] rounded-[12px] bg-[#1a1a2e] px-12 py-4 text-center text-base font-bold text-white hover:bg-[#1a1a2e]/95"
                >
                  Join now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </section>
  );
};

export default HeroSection;
