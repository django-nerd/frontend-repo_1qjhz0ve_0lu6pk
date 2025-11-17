import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Brain, Bot, Code, Rocket, ShieldCheck, Workflow } from "lucide-react";
import { useRef, useEffect } from "react";

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

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), { stiffness: 220, damping: 18 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), { stiffness: 220, damping: 18 });

  useEffect(() => {
    // Reset CSS vars on mount
    if (ref.current) {
      ref.current.style.setProperty("--mx", "50%");
      ref.current.style.setProperty("--my", "50%");
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    x.set(px);
    y.set(py);
    // for the glow background
    ref.current?.style.setProperty("--mx", `${px * 100}%`);
    ref.current?.style.setProperty("--my", `${py * 100}%`);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
    ref.current?.style.setProperty("--mx", `50%`);
    ref.current?.style.setProperty("--my", `50%`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      className="relative group rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-6 hover:border-orange-500/40 transition will-change-transform"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(255,122,24,0.18), transparent 60%)",
        }}
      />
      {/* Inner content lifted in 3D */}
      <div className="relative" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
      {/* Subtle shadow plate behind content for extra depth */}
      <div
        aria-hidden
        className="absolute inset-3 rounded-xl bg-[linear-gradient(180deg,rgba(255,122,24,0.08),rgba(255,61,0,0.06))] opacity-0 group-hover:opacity-100 transition"
        style={{ transform: "translateZ(10px)" }}
      />
    </motion.div>
  );
}

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
            <TiltCard key={title}>
              <div className="flex items-center gap-4" style={{ transform: "translateZ(35px)" }}>
                <div className="p-2 rounded-lg bg-zinc-800 text-orange-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-zinc-300 text-sm leading-relaxed" style={{ transform: "translateZ(40px)" }}>{desc}</p>

              {/* Floating badges inside card */}
              <motion.div
                className="mt-5 flex gap-2 flex-wrap"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                style={{ transform: "translateZ(55px)" }}
              >
                <span className="px-2.5 py-1 text-xs rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/20">AI</span>
                <span className="px-2.5 py-1 text-xs rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700">Prod</span>
                <span className="px-2.5 py-1 text-xs rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-white border border-orange-500/20">Fast</span>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
