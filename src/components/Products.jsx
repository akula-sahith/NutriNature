import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
// Ensure these paths are correct for your project
import ChilliImage from "../assets/ChilliImage.png";
import ChilliPacket from "../assets/chilli-packet.png";
import turmeric from "../assets/turmeric.png";
// ─── Particle Component ───────────────────────────────────────
function Particle({ color, delay, x, size }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: `${x}%`,
        top: "25%",
        filter: "blur(0.8px)",
      }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 0.8, 0],
        y: [0, 80, 200, 320],
        x: [`${x}%`, `${x + (Math.random() * 4 - 2)}%`],
      }}
      transition={{ duration: 1.5, delay, ease: "easeIn" }}
    />
  );
}

function SpiceAnimation({ spice, inView, played }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!inView || played.current) return;
    played.current = true;
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => setPhase(3), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [inView]);

  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    color: spice.particleColors[i % spice.particleColors.length],
    delay: 0.5 + i * 0.04,
    x: 47 + Math.random() * 6,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div className="relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute flex flex-col items-center"
        style={{ top: "5%", zIndex: 20 }}
        initial={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        animate={{
          clipPath: phase >= 2 ? "inset(0% 0% 100% 0%)" : "inset(0% 0% 0% 0%)",
          y: phase >= 2 ? -40 : 0,
          opacity: phase === 3 ? 0 : 1,
        }}
        transition={{ duration: 3.5, ease: "linear" }}
      >
        <div className="w-56 h-56">
          <img src={spice.wholeImage} alt={spice.wholeName} className="w-full h-full object-contain" />
        </div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 25 }}>
        {phase >= 1 && phase < 3 && particles.map((p) => <Particle key={p.id} {...p} />)}
      </div>

      <motion.div
        className="absolute flex items-center justify-center"
        style={{ zIndex: 15 }}
        initial={{ opacity: 0, y: 150, scale: 0.8 }}
        animate={{ 
          opacity: phase >= 1 ? 1 : 0,
          y: phase === 3 ? 0 : 150, 
          scale: phase === 3 ? 1.2 : 1,
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-64 h-80">
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: phase >= 2 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
            transition={{ duration: 3.5, ease: "linear" }}
          >
            <img src={spice.packetImage} className="w-full h-full object-contain" alt="packet" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Product Section ──────────────────────────────────────────────────────────
function ProductSection({ spice, reverse, bg }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });
  const played = useRef(false);

  const handleContact = () => {
    // Navigates to contact section or page
    window.location.href = "/contact"; 
  };

  const handleBuy = () => {
    // Opens the specific product link in a new tab
    if (spice.buyLink) {
      window.open(spice.buyLink, "_blank");
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section ref={ref} className="w-full py-24 px-6 md:px-12 lg:px-20" style={{ background: bg }}>
      <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}>
        
        <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[500px]">
          <SpiceAnimation spice={spice} inView={inView} played={played} />
        </div>

        <motion.div 
          className="w-full lg:w-1/2 flex flex-col gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div custom={0} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full"
              style={{ background: `${spice.accent}12`, color: spice.accent, fontFamily: "'DM Sans', sans-serif" }}>
              NutriNature Originals
            </span>
          </motion.div>

          <motion.h2 custom={1} variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}>
            {spice.title}
          </motion.h2>

          <motion.p custom={2} variants={fadeUp}
            className="text-base leading-relaxed"
            style={{ color: "#6B4C2A", fontFamily: "'DM Sans', sans-serif" }}>
            {spice.description}
          </motion.p>

          <motion.div custom={3} variants={fadeUp}>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: spice.accent, fontFamily: "'DM Sans', sans-serif" }}>
              Best Used For
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {spice.useCases.map((u, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#2C1A0E", fontFamily: "'DM Sans', sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: spice.accent }} />
                  {u}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div custom={4} variants={fadeUp}
            className="rounded-2xl p-6 border"
            style={{ background: "rgba(255,255,255,0.4)", borderColor: "rgba(201,125,58,0.15)", backdropFilter: "blur(10px)" }}>
            <div className="grid grid-cols-3 gap-4">
              {spice.nutrition.map((n, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-bold" style={{ color: "#2C1A0E", fontFamily: "'Playfair Display', serif" }}>{n.value}</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: "#A07850", fontFamily: "'DM Sans', sans-serif" }}>{n.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div custom={5} variants={fadeUp} className="flex flex-wrap items-center gap-6 mt-2">
            <button 
              onClick={handleContact}
              className="px-10 py-4 rounded-full text-white font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
              style={{ background: `linear-gradient(135deg, ${spice.accent} 0%, #2C1A0E 150%)`, boxShadow: `0 10px 30px ${spice.accent}33`, fontFamily: "'DM Sans', sans-serif" }}>
              Contact Now
            </button>
            <button 
              onClick={handleBuy}
              className="px-10 py-4 rounded-full text-white font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
              style={{ background: `linear-gradient(135deg, ${spice.accent} 0%, #2C1A0E 150%)`, boxShadow: `0 10px 30px ${spice.accent}33`, fontFamily: "'DM Sans', sans-serif" }}>
              Buy Now
            </button>
            <div className="flex gap-2">
               {spice.sizes.slice(0, 3).map((s, i) => (
                 <span key={i} className="text-[10px] font-bold" style={{ color: "#A07850", fontFamily: "'DM Sans', sans-serif" }}>{s} {i < 2 && "•"}</span>
               ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Data & Page ──────────────────────────────────────────────────────────────
const SPICES = [
  {
    name: "Chilli Powder",
    title: "Premium Chilli Powder",
    wholeName: "Sun-Dried Red Chillies",
    accent: "#C0392B",
    wholeImage: ChilliImage,
    packetImage: ChilliPacket,
    buyLink: " https://amzn.eu/d/8Ig6ThP", // Add your link here
    particleColors: ["#C0392B", "#e05c4b", "#b03020", "#d44433", "#ff6b5b"],
    description: "Stone-ground from hand-picked Guntur and Byadgi chillies...",
    useCases: ["Curries, gravies, and traditional Indian sabzis", "Marinades for tandoori", "Spice blends", "Catering applications"],
    nutrition: [{ label: "Calories", value: "282kcal" }, { label: "Protein", value: "13.5g" }, { label: "Fiber", value: "34g" }],
    sizes: ["100g", "250g", "500g", "1 kg", "5 kg", "Bulk Export"],
  },
  {
    name: "Turmeric Powder",
    title: "Golden Turmeric Powder",
    wholeName: "Lakadong Turmeric Roots",
    accent: "#D4A017",
    wholeImage: turmeric,
    packetImage: ChilliPacket,
    buyLink: " https://amzn.eu/d/8Ig6ThP", // Add your link here
    particleColors: ["#E1AD01", "#f0c840", "#c89a00", "#daba20", "#ffe060"],
    description: "Sourced from the curcumin-rich Lakadong variety of Meghalaya...",
    useCases: ["Dals and rice", "Golden milk lattes", "Skincare", "Food industry"],
    nutrition: [{ label: "Calories", value: "354kcal" }, { label: "Curcumin", value: "6.5%" }, { label: "Iron", value: "41mg" }],
    sizes: ["100g", "250g", "500g", "1 kg", "5 kg", "Bulk Export"],
  },
  {
    name: "Coriander Powder",
    title: "Aromatic Coriander Powder",
    wholeName: "Rajasthani Coriander Seeds",
    accent: "#5E8A3A",
    wholeImage: ChilliImage,
    packetImage: ChilliPacket,
    buyLink: " https://amzn.eu/d/8Ig6ThP", // Add your link here
    particleColors: ["#7D9E5A", "#9ab870", "#5e8a3a", "#8ab060", "#b5d090"],
    description: "Slow-roasted and freshly milled from premium Rajasthani seeds...",
    useCases: ["Gravies and kormas", "Dry rubs", "Garam masala", "Herbal teas"],
    nutrition: [{ label: "Calories", value: "298kcal" }, { label: "Calcium", value: "709mg" }, { label: "Fiber", value: "41g" }],
    sizes: ["100g", "250g", "500g", "1 kg", "5 kg", "Bulk Export"],
  },
];

const BG = ["#F6F1E8", "#FFFBF5", "#F6F1E8"];

export default function Products() {
  return (
    <div style={{ backgroundColor: "#F6F1E8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="w-full pt-32 pb-16 px-6 text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] tracking-[0.3em] font-bold uppercase" style={{ color: "#C97D3A", fontFamily: "'DM Sans', sans-serif" }}>
          Farm to Table · Est. 2010
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mt-4"
          style={{ fontFamily: "'Playfair Display', serif", color: "#2C1A0E" }}>
          Our Spice <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Collection</span>
        </motion.h1>
      </div>

      {SPICES.map((spice, i) => (
        <ProductSection key={spice.name} spice={spice} reverse={i % 2 === 1} bg={BG[i]} />
      ))}
    </div>
  );
}