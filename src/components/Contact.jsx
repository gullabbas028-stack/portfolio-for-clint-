import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { profile, socials, emailjsConfig } from "../data";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in every field before sending.");
      return;
    }

    const isConfigured =
      emailjsConfig.serviceId !== "YOUR_SERVICE_ID" &&
      emailjsConfig.templateId !== "YOUR_TEMPLATE_ID" &&
      emailjsConfig.publicKey !== "YOUR_PUBLIC_KEY";

    if (!isConfigured) {
      setStatus("error");
      setErrorMsg(
        "Contact form isn't connected yet — add your EmailJS IDs in src/data.js (see README)."
      );
      return;
    }

    try {
      setStatus("sending");
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Message failed to send. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" className="px-6 py-20 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="section-label">06 — Contact</p>
          <h2 className="font-display text-3xl mt-2 font-semibold mb-4">Let's talk security</h2>
          <p className="text-mist leading-relaxed max-w-md mb-8">
            Open to internships, entry-level SOC or network security roles, and collaboration
            on cybersecurity projects. Drop a message and I'll get back to you on email.
          </p>

          <div className="space-y-3 font-mono text-sm">
            <a href={socials.email} className="flex items-center gap-3 text-mist hover:text-cyan transition-colors">
              <span className="text-cyan">➜</span> {profile.email}
            </a>
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-mist hover:text-cyan transition-colors"
            >
              <span className="text-cyan">➜</span> WhatsApp: {profile.phone}
            </a>
            <p className="flex items-center gap-3 text-mist">
              <span className="text-cyan">➜</span> {profile.location}
            </p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-panel border border-line rounded-lg p-6 space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block font-mono text-xs text-mist mb-2">
              name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-panel2 border border-line rounded-md px-4 py-3 text-paper placeholder:text-mist/50 focus:border-cyan outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs text-mist mb-2">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-panel2 border border-line rounded-md px-4 py-3 text-paper placeholder:text-mist/50 focus:border-cyan outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-xs text-mist mb-2">
              message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="w-full bg-panel2 border border-line rounded-md px-4 py-3 text-paper placeholder:text-mist/50 focus:border-cyan outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-md bg-cyan text-ink font-mono text-sm font-medium hover:bg-cyan-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "sending..." : "send_message()"}
          </button>

          {status === "sent" && (
            <p className="font-mono text-sm text-cyan">✓ Message sent — thank you, I'll reply soon.</p>
          )}
          {status === "error" && <p className="font-mono text-sm text-danger">✕ {errorMsg}</p>}
        </motion.form>
      </div>
    </section>
  );
}
