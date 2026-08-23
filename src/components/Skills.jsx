import { motion } from "framer-motion";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">03 — Toolkit</p>
        <h2 className="font-display text-3xl mt-2 font-semibold mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-panel border border-line rounded-lg p-6 hover:border-cyan/60 transition-colors"
            >
              <h3 className="font-mono text-sm text-cyan mb-4 uppercase tracking-wide">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
