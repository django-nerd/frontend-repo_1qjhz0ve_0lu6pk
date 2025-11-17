import Hero from "./components/Hero";
import Features from "./components/Features";
import UXShowcase from "./components/UXShowcase";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Starry parallax background */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,122,24,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,61,0,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent,rgba(0,0,0,0.6))]" />
      </div>

      {/* Content sections */}
      <Hero />
      <Features />
      <UXShowcase />

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,122,24,0.12),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <h3 className="text-3xl md:text-4xl font-extrabold">Ready to build your product?</h3>
          <p className="mt-3 text-zinc-300">Join makers shipping production‑level apps without touching code.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold shadow-[0_0_30px_rgba(255,122,24,0.35)] transition" href="#">Start Free</a>
            <a className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 text-white" href="#">Book a Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
