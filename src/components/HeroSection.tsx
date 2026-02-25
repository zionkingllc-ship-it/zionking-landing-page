import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      <div className="absolute inset-0 light-glow pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-24 text-center max-w-3xl">
        <div className="mb-12 fade-in">
          <span className="text-primary-foreground font-logo font-extrabold text-lg tracking-[0.3em] uppercase">
            ZionKing LLC
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight mb-6 fade-in fade-in-delay-1">
          Building Platforms That Bring{" "}
          <span className="text-gradient">Light.</span>
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed fade-in fade-in-delay-2">
          ZionKing LLC is a faith-rooted technology company committed to bringing light, clarity, and visibility to churches and Christian communities through modern digital platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in fade-in-delay-3">
          <Button variant="hero" size="lg" asChild>
            <a href="#our-work">Explore Our Work</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
