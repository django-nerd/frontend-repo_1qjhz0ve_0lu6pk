import { motion } from "framer-motion";
import { Brain, Bot, Code, Rocket, ShieldCheck, Workflow } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Planning",
    desc: "Turn ideas into detailed specs with structured roadmaps and user stories.",
  },
  {
    icon: Code,
    title: "Code Generation",
    desc: "Generate clean, modular full‑stack code tailored to your product.",
  },
  {
    icon: Brain,
    title: "Code Analysis",
    desc: "Understand impact, detect issues, and refactor safely with AI insights.",
  },
  {
    icon: ShieldCheck,
    title: "Production Readiness",
    desc: "Best practices baked‑in: auth, testing, observability, and CI hooks.",
  },
  {
    icon: Bot,
    title: "Autonomous Agents",
    desc: "Agents plan, build, and verify features end‑to‑end while you guide.",
  },
  {
    icon: Rocket,
    title: "Deep Planning → Code",
    desc: "From discovery to shipping — a straight line to market confidence.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Everything you need to ship with confidence
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-6 hover:border-orange-500/40 transition"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 rounded-2xl transition" />
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-zinc-800 text-orange-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
