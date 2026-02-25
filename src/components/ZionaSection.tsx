import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import zionaFeed from "@/assets/ziona-feed.png";

const ZionaSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-muted-foreground font-semibold tracking-wide uppercase text-sm mb-4">
              Flagship Product
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Our Flagship Product — Ziona
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ziona is our first product — a modern social platform that puts Christian faith first. 
              Built to connect, inspire, and empower believers in a safe, purpose-driven digital space.
            </p>
            <Button variant="default" size="lg" asChild>
              <a href="https://ziona.app/" target="_blank" rel="noopener noreferrer">
                Visit Ziona
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>

          <div className="relative flex justify-center">
            <div className="w-[280px] rounded-[2rem] overflow-hidden border-2 border-border shadow-2xl shadow-foreground/10">
              <img
                src={zionaFeed}
                alt="Ziona app feed showing a faith-based social platform"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZionaSection;
