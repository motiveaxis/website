import { useEffect, useState } from "react";
import logo from "@/assets/motive-axis-logo.png";

const links = [
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#services", label: "What We Automate" },
  { href: "#process", label: "Process" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Case Studies" },
  { href: "#pricing", label: "Pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Motive Axis" className="h-8 w-8 group-hover:scale-110 transition-transform" />
          <span className="font-display font-semibold tracking-tight">
            Motive<span className="text-primary">Axis</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110 transition red-glow"
        >
          Book Call
          <span aria-hidden>→</span>
        </a>
        <button
          aria-label="Menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((s) => !s)}
        >
          <div className="space-y-1.5">
            <div className="w-5 h-px bg-current" />
            <div className="w-5 h-px bg-current" />
            <div className="w-5 h-px bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-md bg-primary px-4 py-2 text-center font-medium text-primary-foreground">
              Book Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
