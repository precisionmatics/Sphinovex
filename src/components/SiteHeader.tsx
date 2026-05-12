import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/sphinovex-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className={`mx-auto max-w-[1800px] px-8 lg:px-12 flex items-center justify-between transition-all duration-500 h-20`}>
        <Link to="/" className="flex items-center shrink-0" aria-label="Sphinovex home">
          <img
            src={logo}
            alt="Sphinovex"
            className="h-10 w-auto md:h-12 lg:h-14 object-contain select-none transition-all duration-500 group-hover:scale-105"
            draggable={false}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-ink transition-colors relative group"
                activeProps={{ className: "text-ink" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
                <span className="absolute inset-x-4 bottom-1 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          <div className="h-6 w-px bg-border/60 mx-2" />

          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 hover:shadow-glow transition-all active:scale-95"
          >
            Request a demo
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/50 backdrop-blur-sm transition-colors hover:bg-secondary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-ink transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border mt-2 mx-4 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-4 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-ink hover:bg-secondary rounded-xl transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Request a demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
