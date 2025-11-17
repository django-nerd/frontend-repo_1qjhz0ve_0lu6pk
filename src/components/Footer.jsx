import FoxLogo from "./FoxLogo";

const Footer = () => {
  return (
    <footer className="relative py-14 border-t border-zinc-800 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-white/90">
          <FoxLogo className="w-8 h-8" />
          <span className="font-semibold">FoxForge</span>
        </div>
        <p className="text-zinc-400 text-sm">Build with confidence. Launch with speed.</p>
      </div>
    </footer>
  );
};

export default Footer;
