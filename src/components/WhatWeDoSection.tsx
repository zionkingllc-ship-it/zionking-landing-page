import { Lightbulb, Users, Shield, Eye } from "lucide-react";

const items = [
  {
    icon: Lightbulb,
    title: "Faith-Aligned Platforms",
    description: "Digital platforms designed with biblical values at their core.",
  },
  {
    icon: Users,
    title: "Community-Centered Products",
    description: "Social products that put Christian community and connection first.",
  },
  {
    icon: Shield,
    title: "Safety & Purpose",
    description: "Tools that empower churches and ministries with clarity and protection.",
  },
  {
    icon: Eye,
    title: "Clarity & Vision",
    description: "Technology rooted in transparency, purpose, and long-term vision.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="our-work" className="py-24 sm:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4 tracking-tight">
          What We Do
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          ZionKing LLC designs and develops technology that serves the Church.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-lg p-8 border border-border hover:border-accent/30 transition-colors"
            >
              <item.icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-lg">
          We operate with a product-first mindset and long-term vision.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
