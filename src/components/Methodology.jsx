import { motion } from "framer-motion";
import { methodology } from "../data";

export default function Methodology() {
  return (
    <section id="methodology" className="px-6 py-20 border-t border-line relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">02 — Approach</p>
        <h2 className="font-display text-3xl mt-2 font-semibold mb-3">How I approach a system</h2>
        <p className="text-mist max-w-2xl mb-12">
          The CEH methodology, applied in every lab and every practice engagement.
        </p>

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-line" />
          {methodology.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-panel border border-line rounded-lg p-5"
            >
              <div className="hidden md:flex absolute -top-[1.65rem] left-5 w-3 h-3 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(63,217,224,0.6)]" />
              <span className="font-mono text-xs text-amber">0{i + 1}</span>
              <h3 className="font-display text-xl mt-2 mb-2">{step.phase}</h3>
              <p className="text-mist text-sm leading-relaxed">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
