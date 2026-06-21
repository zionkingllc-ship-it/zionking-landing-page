import zionKingLogo from "@/assets/Vector 442.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Product", to: "/product" },
  { label: "Contact", to: "/contact" },
];

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    "text-sm font-medium transition-colors hover:text-primary",
    isActive ? "text-primary" : "text-foreground/80",
  ].join(" ");

const exploreButtonClassName =
  "bg-[#181419] rounded-[10px] shadow-[inset_0px_6px_4px_0px_rgba(166,163,57,0.16)] text-primary-foreground hover:bg-[#181419]/95";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container">
        <nav className="flex items-center justify-between gap-4 py-4">
          <Link to="/" className="shrink-0" aria-label="Go to home page">
            <img
              src={zionKingLogo}
              alt="Ziona"
              width={33}
              height={17}
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          <div className="hidden flex-1 justify-center md:flex">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={navLinkClassName}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden shrink-0 md:block">
            <Button asChild size="lg" className={exploreButtonClassName}>
              <Link to="/product">Explore</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-border/70">
                <div className="mt-10 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.to}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          [
                            "rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-muted hover:text-primary",
                            isActive ? "bg-muted text-primary" : "text-foreground/80",
                          ].join(" ")
                        }
                      >
                        {item.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                </div>

                <SheetClose asChild>
                  <Button asChild size="lg" className={`mt-8 w-full ${exploreButtonClassName}`}>
                    <Link to="/product">Explore</Link>
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
