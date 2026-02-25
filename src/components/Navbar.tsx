const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-primary-foreground/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-primary-foreground font-logo font-extrabold text-2xl tracking-tight">
          ZION<span className="text-primary-foreground/60">KING</span>
        </a>
        <div className="hidden sm:flex items-center gap-8">
          <a href="#our-work" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
            Our Work
          </a>
          <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
