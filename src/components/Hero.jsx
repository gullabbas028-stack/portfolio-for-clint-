import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { profile } from "../data";

const bootLines = [
  "$ whoami",
  "muhammad_ashfaq — cyber security student",
  "$ cat status.txt",
  "CEH trained @ Corvit Systems | KFUEIT '24-'28",
  "$ ./scan_available_roles --focus network-security",
  "scanning... 3 open ports found: internships, soc-analyst, network-security",
];

export default function Hero() {
  const { output, done } = useTypewriter(bootLines, 22, 380);

  return (
    <section id="top" className="relative pt-36 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-72 h-72 bg-amber/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-4">// {profile.status}</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-glow">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-mist font-body max-w-lg">
            {profile.tagline} Studying <span className="text-cyan">Cyber Security</span> at KFUEIT,
            trained in ethical hacking, network defense, and Linux systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-cyan text-ink font-mono text-sm font-medium hover:bg-cyan-soft transition-colors"
            >
              Hire / Contact →
            </a>
            <a
              href="#education"
              className="px-6 py-3 rounded-md border border-line text-paper font-mono text-sm hover:border-cyan hover:text-cyan transition-colors"
            >
              View credentials
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["CEH Trained", "Linux", "TCP/IP", "Shodan"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-xl border border-line bg-panel shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-panel2">
              <span className="w-3 h-3 rounded-full bg-danger/70" />
              <span className="w-3 h-3 rounded-full bg-amber/70" />
              <span className="w-3 h-3 rounded-full bg-cyan/70" />
              <span className="ml-3 font-mono text-xs text-mist">ashfaq@kfueit:~</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed min-h-[220px]">
              {output.map((line, i) => (
                <div key={i} className={i % 2 === 0 ? "text-cyan" : "text-mist mb-3"}>
                  {line}
                </div>
              ))}
              <span className={`inline-block w-2 h-4 bg-cyan align-middle ${done ? "animate-blink" : ""}`} />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl border border-line -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
