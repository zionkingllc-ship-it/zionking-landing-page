const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <p className="font-logo font-extrabold text-xl tracking-wide mb-1">ZIONKING</p>
        <p className="text-primary-foreground/60 text-sm">
          Faith-rooted Technology Company
        </p>
        <p className="text-primary-foreground/40 text-xs mt-4 italic">
          Inspired by John 1:5
        </p>
        <p className="text-primary-foreground/30 text-xs mt-6">
          © {year} ZionKing LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
