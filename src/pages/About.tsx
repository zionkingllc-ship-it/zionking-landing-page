import aboutImageOne from "@/assets/about-image-1.png";
import aboutImageTwo from "@/assets/about-image-2.png";

const About = () => {
  return (
    <section className="px-6 pt-0 pb-6 sm:py-0">
      <div className="px-6 lg:px-16 py-10 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-8 overflow-hidden">
        {/* Heading Section */}
        <div className="w-full md:w-72 flex flex-col justify-start items-center">
          <h3 className="self-stretch text-center text-[#1a131c] text-4xl md:text-6xl font-bold font-['Helvetica'] leading-[56px] md:leading-[78.40px]">
            About Us
          </h3>
        </div>

        {/* Content Section */}
        <div className="w-full md:max-w-[953px]">
          <p className="text-[#393535] text-lg md:text-2xl font-normal font-['Helvetica'] leading-6 md:leading-8">
            <span className="font-bold">Zion King LLC</span> is a faith-driven
            technology company focused on building digital products that serve
            Christians in a modern, values-aligned way. The company exists to
            address the growing gap between Christian values and the design
            priorities of mainstream technology platforms.
            <br />
            <br />
            While most digital platforms are optimized for virality, outrage, and
            advertising revenue, Zion King LLC is intentionally built around
            community health, trust, and long-term impact. The company develops
            technology that enables Christians to connect, express their faith,
            and participate meaningfully in the digital world without compromising
            their beliefs.
          </p>
        </div>
      </div>

      <div className="hidden bg-gray-50 lg:block">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(300px,1fr)_minmax(360px,462px)_minmax(280px,360px)] items-center gap-10 px-12 py-12 xl:gap-14 xl:px-20">
          {/* Supporting Section */}
          <div className="flex min-h-[517px] max-w-[396px] flex-col justify-between gap-8">
            <img
              className="h-48 w-full rounded-xl object-cover"
              src={aboutImageOne}
              alt="Vision supporting illustration"
              width={362}
              height={198}
              loading="lazy"
              decoding="async"
            />

            <p className="text-xl font-normal leading-8 text-[#393535] font-['Roboto'] xl:text-2xl">
              This vision guides all strategic, product, and cultural decisions
              within the company. It reflects a long-term commitment to creating
              tools that are not only functional and modern, but also aligned with
              Christian principles and community well-being.
            </p>
          </div>

          {/* Main Image */}
          <div className="flex justify-center">
            <img
              className="h-auto max-h-[420px] w-full max-w-[462px] rounded-xl object-cover"
              src={aboutImageTwo}
              alt="Vision main illustration"
              width={462}
              height={315}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Vision Section */}
          <div className="flex max-w-[360px] flex-col items-start gap-4 justify-self-end">
            <h3 className="text-5xl font-bold leading-tight text-[#1a131c] font-['Helvetica'] xl:text-6xl xl:leading-[78.40px]">
              Vision
            </h3>

            <p className="text-xl font-semibold leading-8 text-[#332b36] font-['Roboto'] xl:text-2xl">
              To build technology that helps Christians connect, express faith,
              and live out their values in the digital world.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-8 bg-white md:hidden inline-flex flex-col justify-start items-center gap-10 overflow-hidden">
        <div className="w-80 flex flex-col justify-start items-start gap-4">
          <h3 className="self-stretch text-center text-[#181419] text-3xl font-bold font-['Helvetica'] leading-10">
            Vision
          </h3>

          <img
            className="w-80 h-64 object-cover"
            src={aboutImageTwo}
            alt="Vision main illustration"
            width={462}
            height={315}
            loading="lazy"
            decoding="async"
          />

          <p className="w-80 text-[#332b36] text-xl font-semibold font-['Roboto'] leading-7">
            To build technology that helps Christians connect, express faith,
            and live out their values in the digital world.
          </p>
        </div>

        {/* Supporting Section */}
        <div className="w-80 flex flex-col justify-start items-start gap-6">
          <img
            className="w-80 h-48 object-cover"
            src={aboutImageOne}
            alt="Vision supporting illustration"
            width={362}
            height={198}
            loading="lazy"
            decoding="async"
          />

          <p className="self-stretch text-[#393535] text-lg font-normal font-['Roboto'] leading-6">
            This vision guides all strategic, product, and cultural decisions
            within the company. It reflects a long-term commitment to creating
            tools that are not only functional and modern, but also aligned with
            Christian principles and community well-being.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 lg:py-24 lg:px-16">
        <div className="max-w-[1200px] flex flex-col md:flex-row lg:justify-between gap-12 md:gap-16 lg:gap-20">
          {/* Heading */}
          <div className="md:w-[280px] lg:w-[320px] shrink-0 flex items-center">
            <h2 className="text-center text-4xl lg:text-5xl font-bold text-[#181419] font-['Helvetica'] leading-tight">
              Our Core Values
            </h2>
          </div>

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-x-16 lg:gap-y-14">
            {/* Faith First */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181419] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5766 8.70419C11.2099 7.56806 11.5266 7 12 7C12.4734 7 12.7901 7.56806 13.4234 8.70419L13.5873 8.99812C13.7672 9.32097 13.8572 9.48239 13.9975 9.5889C14.1378 9.69541 14.3126 9.73495 14.6621 9.81402L14.9802 9.88601C16.2101 10.1643 16.825 10.3034 16.9713 10.7739C17.1176 11.2443 16.6984 11.7345 15.86 12.715L15.643 12.9686C15.4048 13.2472 15.2857 13.3865 15.2321 13.5589C15.1785 13.7312 15.1965 13.9171 15.2325 14.2888L15.2653 14.6272C15.3921 15.9353 15.4554 16.5894 15.0724 16.8801C14.6894 17.1709 14.1137 16.9058 12.9622 16.3756L12.6643 16.2384C12.337 16.0878 12.1734 16.0124 12 16.0124C11.8266 16.0124 11.663 16.0878 11.3357 16.2384L11.0378 16.3756C9.88634 16.9058 9.31059 17.1709 8.92757 16.8801C8.54456 16.5894 8.60794 15.9353 8.7347 14.6272L8.76749 14.2888C8.80351 13.9171 8.82152 13.7312 8.76793 13.5589C8.71434 13.3865 8.59521 13.2472 8.35696 12.9686L8.14005 12.715C7.30162 11.7345 6.88241 11.2443 7.02871 10.7739C7.17501 10.3034 7.78993 10.1643 9.01977 9.88601L9.33794 9.81402C9.68743 9.73495 9.86217 9.69541 10.0025 9.5889C10.1428 9.48239 10.2328 9.32097 10.4127 8.99812L10.5766 8.70419Z" stroke="white" strokeWidth="1.5" />
                  <path d="M12 2V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M12 20V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2 12L4 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M20 12L22 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 18L6.34305 17.657" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M17.6562 6.34277L17.9995 5.99951" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M18 18L17.657 17.657" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6.34375 6.34375L6.00049 6.00049" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#181419] font-['Roboto']">Values Matter in Technology</h3>
                <p className="text-base text-[#6b6b6b] font-['Roboto'] leading-7">Digital platforms are not neutral. The values embedded in their design shape behavior, culture and community.
                </p>
              </div>
            </div>

            {/* Authentic Connection */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181419] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="white" strokeWidth="1.5" />
                  <path d="M6.04779 10.849L6.28497 10.1375H6.28497L6.04779 10.849ZM8.22309 11.5741L7.98592 12.2856H7.98592L8.22309 11.5741ZM9.01682 13.256L8.31681 12.9868H8.31681L9.01682 13.256ZM7.77003 16.4977L8.47004 16.7669H8.47004L7.77003 16.4977ZM17.9522 10.849L17.715 10.1375H17.715L17.9522 10.849ZM15.7769 11.5741L16.0141 12.2856H16.0141L15.7769 11.5741ZM14.9832 13.256L15.6832 12.9868V12.9868L14.9832 13.256ZM16.23 16.4977L15.53 16.7669V16.7669L16.23 16.4977ZM10.4242 17.7574L11.0754 18.1295V18.1295L10.4242 17.7574ZM12 14.9997L12.6512 14.6276C12.5177 14.394 12.2691 14.2497 12 14.2497C11.7309 14.2497 11.4823 14.394 11.3488 14.6276L12 14.9997ZM17.1465 7.8969L16.9894 7.16355V7.16355L17.1465 7.8969ZM15.249 8.30353L15.4061 9.03688V9.03688L15.249 8.30353ZM8.75102 8.30353L8.90817 7.57018V7.57018L8.75102 8.30353ZM6.85345 7.89691L6.69631 8.63026V8.63026L6.85345 7.89691ZM13.5758 17.7574L12.9246 18.1295V18.1295L13.5758 17.7574ZM15.0384 8.34826L14.8865 7.61381L14.8865 7.61381L15.0384 8.34826ZM8.96161 8.34826L8.80969 9.08272L8.80969 9.08272L8.96161 8.34826ZM15.2837 11.7666L15.6777 12.4048V12.4048L15.2837 11.7666ZM14.8182 12.753L15.5613 12.6514V12.6514L14.8182 12.753ZM8.71625 11.7666L8.3223 12.4048H8.3223L8.71625 11.7666ZM9.18177 12.753L9.92485 12.8546V12.8546L9.18177 12.753ZM6.04779 10.849L5.81062 11.5605L7.98592 12.2856L8.22309 11.5741L8.46026 10.8626L6.28497 10.1375L6.04779 10.849ZM9.01682 13.256L8.31681 12.9868L7.07002 16.2284L7.77003 16.4977L8.47004 16.7669L9.71683 13.5252L9.01682 13.256ZM17.9522 10.849L17.715 10.1375L15.5397 10.8626L15.7769 11.5741L16.0141 12.2856L18.1894 11.5605L17.9522 10.849ZM14.9832 13.256L14.2832 13.5252L15.53 16.7669L16.23 16.4977L16.93 16.2284L15.6832 12.9868L14.9832 13.256ZM10.4242 17.7574L11.0754 18.1295L12.6512 15.3718L12 14.9997L11.3488 14.6276L9.77299 17.3853L10.4242 17.7574ZM17.1465 7.8969L16.9894 7.16355L15.0918 7.57017L15.249 8.30353L15.4061 9.03688L17.3037 8.63026L17.1465 7.8969ZM8.75102 8.30353L8.90817 7.57018L7.0106 7.16355L6.85345 7.89691L6.69631 8.63026L8.59387 9.03688L8.75102 8.30353ZM12 14.9997L11.3488 15.3718L12.9246 18.1295L13.5758 17.7574L14.227 17.3853L12.6512 14.6276L12 14.9997ZM15.249 8.30353L15.0918 7.57017C14.9853 7.593 14.9356 7.60366 14.8865 7.61381L15.0384 8.34826L15.1903 9.08272C15.2458 9.07123 15.3016 9.05928 15.4061 9.03688L15.249 8.30353ZM8.75102 8.30353L8.59387 9.03688C8.6984 9.05928 8.75416 9.07123 8.80969 9.08272L8.96161 8.34826L9.11353 7.61381C9.06443 7.60366 9.01468 7.593 8.90817 7.57018L8.75102 8.30353ZM15.0384 8.34826L14.8865 7.61381C12.9823 8.00768 11.0177 8.00768 9.11353 7.61381L8.96161 8.34826L8.80969 9.08272C10.9143 9.51805 13.0857 9.51805 15.1903 9.08272L15.0384 8.34826ZM9.14506 18.4997V19.2497C9.94287 19.2497 10.6795 18.8222 11.0754 18.1295L10.4242 17.7574L9.77299 17.3853C9.64422 17.6107 9.40459 17.7497 9.14506 17.7497V18.4997ZM16.23 16.4977L15.53 16.7669C15.7122 17.2406 15.3625 17.7497 14.8549 17.7497V18.4997V19.2497C16.4152 19.2497 17.4901 17.6846 16.93 16.2284L16.23 16.4977ZM15.7769 11.5741L15.5397 10.8626C15.3178 10.9366 15.0816 11.01 14.8898 11.1283L15.2837 11.7666L15.6777 12.4048C15.6688 12.4102 15.6763 12.4037 15.7342 12.3818C15.795 12.3588 15.877 12.3313 16.0141 12.2856L15.7769 11.5741ZM14.9832 13.256L15.6832 12.9868C15.6313 12.8519 15.6004 12.7711 15.5795 12.7095C15.5596 12.651 15.5599 12.6411 15.5613 12.6514L14.8182 12.753L14.0751 12.8546C14.1057 13.0779 14.1992 13.3069 14.2832 13.5252L14.9832 13.256ZM15.2837 11.7666L14.8898 11.1283C14.3007 11.492 13.9814 12.1687 14.0751 12.8546L14.8182 12.753L15.5613 12.6514C15.5479 12.5534 15.5935 12.4567 15.6777 12.4048L15.2837 11.7666ZM19 9.39526H18.25C18.25 9.73202 18.0345 10.031 17.715 10.1375L17.9522 10.849L18.1894 11.5605C19.1214 11.2499 19.75 10.3777 19.75 9.39526H19ZM7.77003 16.4977L7.07002 16.2284C6.50994 17.6846 7.58484 19.2497 9.14506 19.2497V18.4997V17.7497C8.63751 17.7497 8.28784 17.2406 8.47004 16.7669L7.77003 16.4977ZM8.22309 11.5741L7.98592 12.2856C8.12301 12.3313 8.20501 12.3588 8.26583 12.3818C8.32371 12.4037 8.33115 12.4102 8.3223 12.4048L8.71625 11.7666L9.1102 11.1283C8.91842 11.01 8.68219 10.9366 8.46026 10.8626L8.22309 11.5741ZM9.01682 13.256L9.71683 13.5252C9.80081 13.3069 9.89432 13.0779 9.92485 12.8546L9.18177 12.753L8.43868 12.6514C8.44009 12.6411 8.4404 12.6509 8.42051 12.7095C8.3996 12.7711 8.36869 12.8519 8.31681 12.9868L9.01682 13.256ZM8.71625 11.7666L8.3223 12.4048C8.40646 12.4567 8.45208 12.5534 8.43868 12.6514L9.18177 12.753L9.92485 12.8546C10.0186 12.1687 9.69929 11.492 9.1102 11.1283L8.71625 11.7666ZM5 9.39526H4.25C4.25 10.3777 4.87863 11.2499 5.81062 11.5605L6.04779 10.849L6.28497 10.1375C5.96549 10.031 5.75 9.73202 5.75 9.39526H5ZM5 9.39526H5.75C5.75 8.89717 6.20927 8.52589 6.69631 8.63026L6.85345 7.89691L7.0106 7.16355C5.58979 6.8591 4.25 7.9422 4.25 9.39526H5ZM13.5758 17.7574L12.9246 18.1295C13.3205 18.8222 14.0571 19.2497 14.8549 19.2497V18.4997V17.7497C14.5954 17.7497 14.3558 17.6107 14.227 17.3853L13.5758 17.7574ZM19 9.39526H19.75C19.75 7.9422 18.4102 6.85909 16.9894 7.16355L17.1465 7.8969L17.3037 8.63026C17.7907 8.52589 18.25 8.89717 18.25 9.39526H19Z" fill="white" />
                  <path d="M19.4537 14.5C21.0372 15.2961 22 16.3475 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 16.3475 2.96285 15.2961 4.54631 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#181419] font-['Roboto']">Community Over Virality</h3>
                <p className="text-base text-[#6b6b6b] font-['Roboto'] leading-7">Sustainable communities are built on trust, respect, and meaningful interaction—not outrage or clout.</p>
              </div>
            </div>

            {/* Purposeful Innovation */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181419] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0146 0.401367C10.3845 0.401373 10.7449 0.522185 11.04 0.745117C11.3326 0.966232 11.5454 1.27588 11.6475 1.62793L11.6836 1.78027L13.1318 9.02148C13.2143 9.4342 13.4041 9.81842 13.6816 10.1348C13.9592 10.4509 14.3155 10.6889 14.7139 10.8242L14.7217 10.8271L14.7305 10.8291L14.8887 10.875L14.8955 10.877L16.5986 11.3027C16.8557 11.367 17.0814 11.5222 17.2334 11.7393C17.3838 11.9541 17.4521 12.2157 17.4268 12.4766L17.4072 12.6055L16.7168 16.0557C16.6755 16.2623 16.594 16.4588 16.4766 16.6338C16.3591 16.8088 16.2079 16.9587 16.0322 17.0752C15.8567 17.1916 15.6599 17.2723 15.4531 17.3125C15.249 17.3521 15.0388 17.3512 14.835 17.3105L14.6963 17.2764L11.6533 16.4062H11.6523C10.687 16.1311 9.83845 15.5473 9.23633 14.7441L8.91602 14.3174L8.5957 14.7441C8.04372 15.4806 7.28338 16.034 6.41309 16.333L6.17969 16.4062L3.12305 17.2803C2.92039 17.3381 2.70835 17.3554 2.49902 17.3311C2.28974 17.3067 2.08724 17.2415 1.90332 17.1387C1.71933 17.0358 1.55716 16.8971 1.42676 16.7314C1.32912 16.6074 1.25051 16.4698 1.19336 16.3232L1.14355 16.1729L1.1123 16.041L0.420898 12.5859C0.368986 12.3263 0.413009 12.0563 0.543945 11.8262C0.674224 11.5973 0.881994 11.4215 1.12988 11.333L1.25 11.2979L2.92871 10.8789C3.33693 10.7768 3.71199 10.5697 4.01465 10.2773C4.31717 9.98511 4.53711 9.61811 4.65332 9.21387L4.65625 9.20605L4.6582 9.19824L4.69629 9.03809L4.69824 9.0293L4.7002 9.02148L6.15039 1.7666C6.20398 1.49818 6.32148 1.24637 6.49316 1.0332C6.66503 0.819944 6.88663 0.651465 7.1377 0.541992C7.38873 0.43255 7.66236 0.385113 7.93555 0.404297C8.20875 0.42349 8.47375 0.50789 8.70703 0.651367L8.91602 0.780273L9.125 0.652344C9.38444 0.493435 9.68838 0.401453 10.0146 0.401367ZM3.0127 12.0947L1.9873 12.3525L1.61719 12.4443L1.69141 12.8184L2.29199 15.8203L2.37695 16.2461L2.79395 16.127L3.875 15.8164L4.2373 15.7129L4.15527 15.3457L3.50098 12.3965L3.41113 11.9951L3.0127 12.0947ZM14.332 12.3965L13.6768 15.3467L13.5947 15.7139L13.957 15.8174L15.0381 16.127L15.4551 16.2461L15.54 15.8203L16.1406 12.8184L16.2148 12.4443L15.8457 12.3525L14.8193 12.0947L14.4209 11.9951L14.332 12.3965ZM9.51562 11.9844C9.51558 12.6881 9.73409 13.3748 10.1406 13.9492C10.5472 14.5236 11.1224 14.9575 11.7861 15.1914L11.7939 15.1943L11.8018 15.1963L12.0225 15.2646L12.4365 15.3916L12.5303 14.9688L13.2646 11.668L13.3164 11.4346L13.1348 11.2783C12.5275 10.7551 12.1124 10.0438 11.9551 9.25781L10.5049 2.00293V2.00098C10.4876 1.91625 10.4487 1.83804 10.3926 1.77344L10.3311 1.71387L10.2607 1.66504C10.1862 1.62307 10.1011 1.60154 10.0146 1.60156V1.60059L10.0107 1.60156C9.88001 1.60297 9.75457 1.65462 9.66211 1.74707C9.56966 1.83952 9.51801 1.96497 9.5166 2.0957H9.51562V11.9844ZM8.31641 2.0957C8.31535 1.99712 8.28485 1.90183 8.23047 1.82129L8.16797 1.74609L8.0918 1.68359C8.01072 1.63006 7.91497 1.60162 7.81641 1.60156V1.90039L7.81348 1.60156C7.72774 1.6024 7.64396 1.62495 7.57031 1.66699L7.5 1.71582C7.41188 1.78858 7.351 1.88901 7.32812 2.00098V2.00293L5.87695 9.25781C5.71998 10.0437 5.30522 10.755 4.69824 11.2783L4.5166 11.4346L4.56836 11.668L5.30176 14.9688L5.39453 15.3857L5.80371 15.2656L5.84863 15.252L5.84961 15.2529C6.55991 15.05 7.18493 14.6209 7.62988 14.0312C8.0748 13.4416 8.31621 12.7231 8.31641 11.9844V2.0957Z" fill="white" stroke="white" strokeWidth="0.8" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#181419] font-['Roboto']">Faith Has a Place Online</h3>
                <p className="text-base text-[#6b6b6b] font-['Roboto'] leading-7">Christians deserve digital spaces where faith expression is welcomed, protected, and respected.</p>
              </div>
            </div>

            {/* Excellence with Integrity */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181419] flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1497 8.80219L9.70794 9.40825V9.40825L10.1497 8.80219ZM12 3.10615L11.4925 3.65833C11.7794 3.9221 12.2206 3.9221 12.5075 3.65833L12 3.10615ZM13.8503 8.8022L14.2921 9.40826V9.40826L13.8503 8.8022ZM12 9.67598L12 10.426H12L12 9.67598ZM10.1497 8.80219L10.5915 8.19612C9.90132 7.69298 9.16512 7.08112 8.60883 6.43627C8.03452 5.77053 7.75 5.18233 7.75 4.71476H7H6.25C6.25 5.73229 6.82845 6.66885 7.47305 7.41607C8.13569 8.18419 8.97435 8.87349 9.70794 9.40825L10.1497 8.80219ZM7 4.71476H7.75C7.75 3.65612 8.27002 3.05231 8.8955 2.84182C9.54754 2.62238 10.5199 2.76435 11.4925 3.65833L12 3.10615L12.5075 2.55398C11.2302 1.37988 9.70254 0.987559 8.41707 1.42016C7.10502 1.8617 6.25 3.09623 6.25 4.71476H7ZM13.8503 8.8022L14.2921 9.40826C15.0257 8.8735 15.8643 8.18421 16.527 7.41608C17.1716 6.66886 17.75 5.73229 17.75 4.71475H17H16.25C16.25 5.18234 15.9655 5.77055 15.3912 6.43629C14.8349 7.08113 14.0987 7.69299 13.4085 8.19613L13.8503 8.8022ZM17 4.71475H17.75C17.75 3.09622 16.895 1.8617 15.5829 1.42016C14.2975 0.987559 12.7698 1.37988 11.4925 2.55398L12 3.10615L12.5075 3.65833C13.4801 2.76435 14.4525 2.62238 15.1045 2.84181C15.73 3.0523 16.25 3.65612 16.25 4.71475H17ZM10.1497 8.80219L9.70794 9.40825C10.463 9.95869 11.0618 10.426 12 10.426L12 9.67598L12 8.92598C11.635 8.92598 11.4347 8.81074 10.5915 8.19612L10.1497 8.80219ZM13.8503 8.8022L13.4085 8.19613C12.5653 8.81074 12.365 8.92598 12 8.92598L12 9.67598L12 10.426C12.9382 10.426 13.537 9.9587 14.2921 9.40826L13.8503 8.8022Z" fill="white" />
                  <path d="M5 20.3884H7.25993C8.27079 20.3884 9.29253 20.4937 10.2763 20.6964C12.0166 21.0549 13.8488 21.0983 15.6069 20.8138C16.4738 20.6734 17.326 20.4589 18.0975 20.0865C18.7939 19.7504 19.6469 19.2766 20.2199 18.7459C20.7921 18.216 21.388 17.3487 21.8109 16.6707C22.1736 16.0894 21.9982 15.3762 21.4245 14.943C20.7873 14.4619 19.8417 14.462 19.2046 14.9433L17.3974 16.3084C16.697 16.8375 15.932 17.3245 15.0206 17.4699C14.911 17.4874 14.7962 17.5033 14.6764 17.5172M12.7518 17.5326C13.4312 17.5968 14.0434 17.5829 14.5668 17.5292C14.6038 17.5254 14.6403 17.5214 14.6764 17.5172M14.6764 17.5172C14.8222 17.486 14.9669 17.396 15.1028 17.2775C15.746 16.7161 15.7866 15.77 15.2285 15.1431C15.0991 14.9977 14.9475 14.8764 14.7791 14.7759C11.9817 13.1074 7.62942 14.3782 5 16.2429M14.6764 17.5172C14.6399 17.525 14.6033 17.5292 14.5668 17.5292" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="2" y="14" width="3" height="8" rx="1.5" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#181419] font-['Roboto']">Long-Term Impact Over Short-Term Gains</h3>
                <p className="text-base text-[#6b6b6b] font-['Roboto'] leading-7">Zion King LLC prioritizes building enduring platforms rather than chasing trends or rapid monetization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
