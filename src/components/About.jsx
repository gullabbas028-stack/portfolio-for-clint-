import { motion } from "framer-motion";
import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[220px_1fr] gap-10">
        <div>
          <p className="section-label">01 — Profile</p>
          <h2 className="font-display text-3xl mt-2 font-semibold">About</h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-mist text-lg leading-relaxed max-w-2xl"
        >
          {profile.summary}
        </motion.p>
      </div>
    </section>
  );
}
