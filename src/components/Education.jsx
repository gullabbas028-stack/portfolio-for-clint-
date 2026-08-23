import { motion } from "framer-motion";
import { education, certifications } from "../data";

export default function Education() {
  return (
    <section id="education" className="px-6 py-20 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="section-label">04 — Education</p>
          <h2 className="font-display text-3xl mt-2 font-semibold mb-8">Academic background</h2>
          {education.map((e) => (
            <motion.div
              key={e.institute}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="bg-panel border border-line rounded-lg p-6"
            >
              <span className="font-mono text-xs text-amber">{e.period}</span>
              <h3 className="font-display text-xl mt-1">{e.institute}</h3>
              <p className="text-mist text-sm mt-1">{e.detail}</p>
              <p className="text-cyan font-mono text-sm mt-3">{e.program}</p>
              <p className="text-mist text-sm mt-2 leading-relaxed">{e.note}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <p className="section-label">05 — Certifications</p>
          <h2 className="font-display text-3xl mt-2 font-semibold mb-8">Training & certifications</h2>
          <div className="space-y-5">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-panel border border-line rounded-lg p-6"
              >
                <span className="font-mono text-xs text-amber">{c.period}</span>
                <h3 className="font-display text-lg mt-1">{c.title}</h3>
                <p className="text-cyan font-mono text-sm mt-1">{c.org}</p>
                <p className="text-mist text-sm mt-2 leading-relaxed">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
