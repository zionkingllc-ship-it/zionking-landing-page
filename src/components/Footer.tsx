import zionkinglogowhite from "@/assets/zionkinglogowhite.svg";
import { FaTiktok } from "react-icons/fa6";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-6 pt-14 pb-16 bg-black">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14">

        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* Logo — centered on mobile, left on desktop */}
          <div className="flex justify-center md:justify-start">
            <Link to="/" aria-label="Go to home page">
              <img
                src={zionkinglogowhite}
                alt="Zion King"
                className="h-12 w-auto"
                width={237}
                height={148}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* Nav columns — centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12 lg:gap-20">
            {/* Home */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link to="/" className="text-white font-heading font-semibold text-base leading-normal hover:opacity-80 transition-opacity">
                Home
              </Link>
            </div>

            {/* Product */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-white font-heading font-semibold text-base leading-normal">Product</span>
              <Link to="/product" className="text-white font-heading font-normal text-base leading-[22px] hover:opacity-80 transition-opacity">
                Ziona
              </Link>
            </div>

            {/* Company */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-white font-heading font-semibold text-base leading-normal">Company</span>
              <Link to="/about" className="text-white font-heading font-normal text-base leading-[22px] hover:opacity-80 transition-opacity">
                About Us
              </Link>
              <Link to="/contact" className="text-white font-heading font-normal text-base leading-[22px] hover:opacity-80 transition-opacity">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact — centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <span className="text-white font-heading font-semibold text-base leading-normal">Let's chat!</span>
            <a href="mailto:connect@zionkingllc.com" className="text-white font-heading font-normal text-base leading-[22px] hover:opacity-80 transition-opacity">
              connect@zionkingllc.com
            </a>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/ziona.app?igsh=bmR3aXV5ZGx3ZHo1" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 11.8072C22.6506 11.8072 23.0121 11.8072 24.0964 11.8072C25.0602 11.8072 25.5422 12.0482 25.9036 12.1687C26.3855 12.4096 26.747 12.5301 27.1084 12.8916C27.4699 13.253 27.7108 13.6145 27.8313 14.0964C27.9518 14.4578 28.0723 14.9398 28.1928 15.9036C28.1928 16.988 28.1928 17.2289 28.1928 20C28.1928 22.7711 28.1928 23.0121 28.1928 24.0964C28.1928 25.0602 27.9518 25.5422 27.8313 25.9036C27.5904 26.3855 27.4699 26.747 27.1084 27.1084C26.747 27.4699 26.3855 27.7108 25.9036 27.8313C25.5422 27.9518 25.0602 28.0723 24.0964 28.1928C23.0121 28.1928 22.7711 28.1928 20 28.1928C17.2289 28.1928 16.988 28.1928 15.9036 28.1928C14.9398 28.1928 14.4578 27.9518 14.0964 27.8313C13.6145 27.5904 13.253 27.4699 12.8916 27.1084C12.5301 26.747 12.2892 26.3855 12.1687 25.9036C12.0482 25.5422 11.9277 25.0602 11.8072 24.0964C11.8072 23.0121 11.8072 22.7711 11.8072 20C11.8072 17.2289 11.8072 16.988 11.8072 15.9036C11.8072 14.9398 12.0482 14.4578 12.1687 14.0964C12.4096 13.6145 12.5301 13.253 12.8916 12.8916C13.253 12.5301 13.6145 12.2892 14.0964 12.1687C14.4578 12.0482 14.9398 11.9277 15.9036 11.8072C16.988 11.8072 17.3494 11.8072 20 11.8072ZM20 10C17.2289 10 16.988 10 15.9036 10C14.8193 10 14.0964 10.241 13.494 10.4819C12.8916 10.7229 12.2892 11.0843 11.6867 11.6867C11.0843 12.2892 10.8434 12.7711 10.4819 13.494C10.241 14.0964 10.1205 14.8193 10 15.9036C10 16.988 10 17.3494 10 20C10 22.7711 10 23.0121 10 24.0964C10 25.1807 10.241 25.9036 10.4819 26.506C10.7229 27.1084 11.0843 27.7108 11.6867 28.3133C12.2892 28.9157 12.7711 29.1566 13.494 29.5181C14.0964 29.759 14.8193 29.8795 15.9036 30C16.988 30 17.3494 30 20 30C22.6506 30 23.0121 30 24.0964 30C25.1807 30 25.9036 29.759 26.506 29.5181C27.1084 29.2771 27.7108 28.9157 28.3133 28.3133C28.9157 27.7108 29.1566 27.2289 29.5181 26.506C29.759 25.9036 29.8795 25.1807 30 24.0964C30 23.0121 30 22.6506 30 20C30 17.3494 30 16.988 30 15.9036C30 14.8193 29.759 14.0964 29.5181 13.494C29.2771 12.8916 28.9157 12.2892 28.3133 11.6867C27.7108 11.0843 27.2289 10.8434 26.506 10.4819C25.9036 10.241 25.1807 10.1205 24.0964 10C23.0121 10 22.7711 10 20 10Z" fill="white" />
                  <path d="M20 14.8193C17.1084 14.8193 14.8193 17.1084 14.8193 20C14.8193 22.8916 17.1084 25.1807 20 25.1807C22.8916 25.1807 25.1807 22.8916 25.1807 20C25.1807 17.1084 22.8916 14.8193 20 14.8193ZM20 23.3735C18.1928 23.3735 16.6265 21.9277 16.6265 20C16.6265 18.1928 18.0723 16.6265 20 16.6265C21.8072 16.6265 23.3735 18.0723 23.3735 20C23.3735 21.8072 21.8072 23.3735 20 23.3735Z" fill="white" />
                  <path d="M25.3012 15.9036C25.9666 15.9036 26.506 15.3642 26.506 14.6988C26.506 14.0334 25.9666 13.494 25.3012 13.494C24.6358 13.494 24.0964 14.0334 24.0964 14.6988C24.0964 15.3642 24.6358 15.9036 25.3012 15.9036Z" fill="white" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1UN2Xjh7mF/" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6571 20.3648H25.3793L25.9637 16.5605H21.6563V14.4813C21.6563 12.901 22.1696 11.4996 23.6389 11.4996H26V8.17974C25.5852 8.12338 24.7078 8 23.05 8C19.5882 8 17.5587 9.8393 17.5587 14.0297V16.5605H14V20.3648H17.5587V30.821C18.2634 30.9276 18.9773 31 19.7101 31C20.3724 31 21.0189 30.9391 21.6571 30.8522V20.3648Z" fill="white" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/zionas/" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 20.7444V26.2601H24.7713V21.0807C24.7713 19.8027 24.3004 18.9283 23.157 18.9283C22.2825 18.9283 21.7444 19.5336 21.5426 20.0718C21.4753 20.2735 21.4081 20.5426 21.4081 20.8789V26.2601H18.1794C18.1794 26.2601 18.2466 17.5157 18.1794 16.6413H21.4081V17.9865C21.8117 17.3139 22.6188 16.3722 24.3004 16.3722C26.3856 16.3722 28 17.7848 28 20.7444ZM14.8161 12C13.7399 12 13 12.7399 13 13.6816C13 14.6233 13.6726 15.3632 14.7489 15.3632C15.8924 15.3632 16.565 14.6233 16.565 13.6816C16.6323 12.6726 15.9596 12 14.8161 12ZM13.2018 26.2601H16.4305V16.6413H13.2018V26.2601Z" fill="white" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@ziona.socials?_r=1&_t=ZS-96gcCdrKykk" aria-label="tiktok" className="text-white hover:opacity-80 transition-opacity">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row — centered on mobile, left on desktop */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          {/* <div className="flex items-center justify-center md:justify-start gap-10 flex-wrap">
            <a href="#" className="text-white font-body text-base leading-[22px] hover:opacity-80 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-white font-body text-base leading-[22px] hover:opacity-80 transition-opacity">Terms of Use</a>
            <a href="#" className="text-white font-body text-base leading-[22px] hover:opacity-80 transition-opacity">Legal</a>
          </div> */}

          <button
            type="button"
            onClick={handleScrollToTop}
            className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            <ArrowUp className="h-4 w-4" />
            Scroll to top
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

// Leave this here
{/* <footer style={{ backgroundColor: "#181419" }} className="px-6 pt-14 pb-16"> */}
