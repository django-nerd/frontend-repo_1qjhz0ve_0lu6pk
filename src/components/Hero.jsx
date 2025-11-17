import { motion } from "framer-motion";
import FoxLogo from "./FoxLogo";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        <div className="absolute -inset-[20%] -z-10 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#ff7a18_0%,transparent_35%),radial-gradient(circle_at_80%_30%,#ff3d00_0%,transparent_35%),radial-gradient(circle_at_50%_80%,#ff9a44_0%,transparent_35%)] animate-pulse" />
      </div>

      {/* Parallax orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-600/20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-10">
        <div className="pt-16">
          <div className="flex items-center gap-3 text-orange-400/90">
            <FoxLogo className="w-10 h-10" />
            <span className="uppercase tracking-widest text-xs font-semibold">No‑Code → Full‑Stack</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            Build real, production‑ready apps without writing code
          </h1>

          <p className="mt-5 text-zinc-300 text-lg md:text-xl max-w-xl">
            From idea to launch in days. Plan, generate, analyze, and ship full‑stack products with autonomous agents and deep planning — all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#features" className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold shadow-[0_0_30px_rgba(255,122,24,0.35)] transition">Explore Features</a>
            <a href="#ux" className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 text-white">See How It Works</a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-zinc-400">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full bg-orange-500/80 border border-orange-300/20" />
              <div className="w-8 h-8 rounded-full bg-orange-400/80 border border-orange-300/20" />
              <div className="w-8 h-8 rounded-full bg-orange-600/80 border border-orange-300/20" />
            </div>
            <span className="text-sm">Trusted by makers bringing ideas to market</span>
          </div>
        </div>

        {/* 3D preview area (placeholder with parallax cards) */}
        <div className="relative h-[520px] md:h-[640px]">
          <motion.div
            className="absolute right-6 top-10 w-64 h-40 rounded-2xl bg-zinc-900/70 backdrop-blur border border-zinc-800 shadow-2xl"
            whileHover={{ rotate: -2, y: -4 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-4">
              <div className="h-3 w-24 bg-zinc-700 rounded" />
              <div className="mt-4 h-24 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded" />
            </div>
          </motion.div>

          <motion.div
            className="absolute right-24 top-40 w-72 h-48 rounded-2xl bg-zinc-900/70 backdrop-blur border border-zinc-800 shadow-2xl"
            whileHover={{ rotate: 3, y: -6 }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="p-4">
              <div className="flex gap-2">
                <div className="h-28 w-1/2 bg-zinc-800 rounded" />
                <div className="h-28 w-1/2 bg-orange-500/20 rounded" />
              </div>
              <div className="mt-4 h-4 w-32 bg-zinc-700 rounded" />
            </div>
          </motion.div>

          <motion.div
            className="absolute right-10 bottom-10 w-80 h-60 rounded-2xl bg-zinc-900/70 backdrop-blur border border-zinc-800 shadow-2xl"
            whileHover={{ rotate: -4, y: -8 }}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-4">
              <div className="h-32 bg-gradient-to-r from-zinc-800 to-orange-500/20 rounded" />
              <div className="mt-4 h-4 w-40 bg-zinc-700 rounded" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Parallax scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 text-sm">Scroll</div>
    </section>
  );
};

export default Hero;
