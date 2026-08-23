import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#methodology", label: "methodology" },
  { href: "#skills", label: "skills" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold tracking-tight text-paper flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(63,217,224,0.7)]" />
          M.Ashfaq<span className="text-cyan">/</span>sec
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm text-mist">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cyan transition-colors">
              ./{l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 chip hover:border-cyan hover:text-cyan transition-colors"
        >
          get_in_touch()
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-paper text-2xl leading-none"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "×" : "≡"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 font-mono text-sm text-mist bg-ink/95 border-b border-line">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-cyan">
              ./{l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="chip w-fit">
            get_in_touch()
          </a>
        </div>
      )}
    </motion.header>
  );
}
