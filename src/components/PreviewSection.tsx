import feedMockup from "@/assets/ziona-feed-mockup.png";

const PreviewSection = () => {
  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container">
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl px-4">
            <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-[4px] md:border-[8px] border-foreground/10">
              <img
                src={feedMockup}
                alt="Ziona app feed preview"
                className="w-full h-auto"
                width={590}
                height={1278}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
