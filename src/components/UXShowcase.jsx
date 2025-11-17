import { motion } from "framer-motion";

const steps = [
  {
    title: "Describe your product",
    desc: "Explain your idea in plain language. The system turns it into a structured plan.",
  },
  {
    title: "Review the plan",
    desc: "User stories, data models, and screens are generated for you to approve.",
  },
  {
    title: "Generate the app",
    desc: "Code is created for frontend and backend with best practices built‑in.",
  },
  {
    title: "Ship to production",
    desc: "Confidence checks, tests, and deploy hooks give you a smooth launch.",
  },
];

const UXShowcase = () => {
  return (
    <section id="ux" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,122,24,0.15),transparent_50%)]" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Create a market‑ready product without being technical
        </motion.h2>

        <div className="mt-14 space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="grid md:grid-cols-12 gap-6 items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="md:col-span-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-black font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-3 text-white font-semibold text-lg">{s.title}</h3>
                <p className="mt-1 text-zinc-300 text-sm">{s.desc}</p>
              </div>
              <div className="md:col-span-8">
                <div className="h-40 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 p-4">
                  <div className="h-full w-full rounded-md bg-[length:20px_20px] bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXShowcase;
