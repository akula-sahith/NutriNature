import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ChilliImage from "../assets/ChilliImage.png";
import ChilliPacket from "../assets/chilli-packet.png";
// ─── Particle Component (Stream Effect) ───────────────────────────────────────
// ─── Refined Particle (More 'Powdery' feel) ──────────────────────────────────
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
        y: [0, 80, 200, 320], // Falling path
        x: [`${x}%`, `${x + (Math.random() * 4 - 2)}%`], // Slight drift
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: "easeIn",
      }}
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

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [inView]);

  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    color: spice.particleColors[i % spice.particleColors.length],
    delay: 0.5 + i * 0.04,
    x: 47 + Math.random() * 6,
    size: 2 + Math.random() * 4,
  }));

  // INCREASED HEIGHT HERE (h-[700px])
  return (
    <div className="relative w-full h-[700px] flex flex-col items-center overflow-hidden">
      {/* 1. THE WHOLE SPICE (Ring and Border Removed) */}
      <motion.div
        className="absolute flex flex-col items-center"
        style={{ top: "5%", zIndex: 20 }} // Moved higher up
        initial={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        animate={{
          clipPath: phase >= 2 ? "inset(0% 0% 100% 0%)" : "inset(0% 0% 0% 0%)",
          y: phase >= 2 ? -20 : 0,
        }}
        transition={{ duration: 3.5, ease: "linear" }}
      >
        <div className="w-56 h-56">
          {" "}
          {/* Removed rounded-full, border, and shadow */}
          <img
            src={spice.wholeImage}
            alt={spice.wholeName}
            className="w-full h-full object-contain" // Changed to contain for natural spice shapes
          />
        </div>
      </motion.div>

      {/* 2. THE GRINDING PARTICLES */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 25 }}
      >
        {phase >= 1 && particles.map((p) => <Particle key={p.id} {...p} />)}
      </div>

      {/* 3. THE PACKET REVEAL (Background/Glow Removed) */}
      <motion.div
        className="absolute"
        style={{ bottom: "5%", zIndex: 15 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-64 h-80">
          {" "}
          {/* Slightly larger packet */}
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{
              clipPath:
                phase >= 2 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
            }}
            transition={{ duration: 3.5, ease: "linear" }}
          >
            <img
              src={spice.packetImage}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            {/* Glow removed for a cleaner look */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// In ProductSection component, update the minHeight:
// <div className="w-full lg:w-1/2 flex items-center justify-center" style={{ minHeight: 600 }}>
// ─── Product Section ──────────────────────────────────────────────────────────
function ProductSection({ spice, reverse, bg }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });
  const played = useRef(false);

  const textVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section
      ref={ref}
      className="w-full py-20 px-4 sm:px-8 lg:px-16"
      style={{ background: bg }}
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}
      >
        {/* Animation Side */}
        <div
          className="w-full lg:w-1/2 flex items-center justify-center"
          style={{ minHeight: 600 }}
        >
          <SpiceAnimation spice={spice} inView={inView} played={played} />
        </div>

        {/* Details Side */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Tag */}
          <motion.div custom={0} variants={textVariants}>
            <span
              className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full"
              style={{ background: `${spice.accent}18`, color: spice.accent }}
            >
              NutriNature Originals
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            custom={1}
            variants={textVariants}
            className="font-serif text-4xl lg:text-5xl font-bold leading-tight"
            style={{
              color: "#1A120B",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            {spice.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={2}
            variants={textVariants}
            className="text-base leading-relaxed"
            style={{ color: "#5a4a3a" }}
          >
            {spice.description}
          </motion.p>

          {/* Use Cases */}
          <motion.div custom={3} variants={textVariants}>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: spice.accent }}
            >
              Best Used For
            </p>
            <ul className="flex flex-col gap-2">
              {spice.useCases.map((u, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#4a3a2a" }}
                >
                  <span
                    className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: spice.accent }}
                  />
                  {u}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Nutritional Info */}
          <motion.div
            custom={4}
            variants={textVariants}
            className="rounded-2xl p-5 border"
            style={{
              background: `${spice.accent}08`,
              borderColor: `${spice.accent}22`,
            }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: spice.accent }}
            >
              Nutritional Info (per 100g)
            </p>
            <div className="grid grid-cols-3 gap-3">
              {spice.nutrition.map((n, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span
                    className="text-lg font-bold"
                    style={{
                      color: spice.accent,
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {n.value}
                  </span>
                  <span className="text-xs mt-0.5" style={{ color: "#7a6a5a" }}>
                    {n.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Package Sizes */}
          <motion.div custom={5} variants={textVariants}>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: spice.accent }}
            >
              Available In
            </p>
            <div className="flex flex-wrap gap-2">
              {spice.sizes.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    borderColor: `${spice.accent}40`,
                    color: spice.accent,
                    background: `${spice.accent}0d`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div custom={6} variants={textVariants}>
            <button
              className="relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold tracking-widest uppercase text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{
                background: spice.accent,
                boxShadow: `0 8px 32px ${spice.accent}44`,
              }}
            >
              <span className="relative z-10">Enquire Now</span>
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(255,255,255,0.12)" }}
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SPICES = [
  {
    name: "Chilli Powder",
    title: "Premium Chilli Powder",
    wholeName: "Sun-Dried Red Chillies",
    accent: "#C0392B",
    wholeImage: ChilliImage,
    packetImage: ChilliPacket,
    fillGradient: "linear-gradient(to top, #C0392B, #E74C3C88)",
    particleColors: ["#C0392B", "#e05c4b", "#b03020", "#d44433", "#ff6b5b"],
    description:
      "Stone-ground from hand-picked Guntur and Byadgi chillies, our Chilli Powder delivers a bold, vibrant heat with deep smoky undertones. Free from artificial color and preservatives — pure spice, as nature intended.",
    useCases: [
      "Curries, gravies, and traditional Indian sabzis",
      "Marinades for tandoori and grilled meats",
      "Spice blends, chutneys, and pickles",
      "Restaurant and catering applications",
    ],
    nutrition: [
      { label: "Calories", value: "282kcal" },
      { label: "Protein", value: "13.5g" },
      { label: "Fiber", value: "34g" },
    ],
    sizes: ["100g", "250g", "500g", "1 kg", "5 kg", "Bulk Export"],
  },
  {
    name: "Turmeric Powder",
    title: "Golden Turmeric Powder",
    wholeName: "Lakadong Turmeric Roots",
    accent: "#D4A017",
    wholeImage: ChilliImage,
    packetImage: ChilliPacket,
    fillGradient: "linear-gradient(to top, #D4A017, #f0c84088)",
    particleColors: ["#E1AD01", "#f0c840", "#c89a00", "#daba20", "#ffe060"],
    description:
      "Sourced from the curcumin-rich Lakadong variety of Meghalaya, our Turmeric Powder is cold-processed to preserve maximum potency. A single spoonful transforms dishes with vivid golden color and warm, earthy depth.",
    useCases: [
      "Dals, rice dishes, and soups for vibrant color",
      "Golden milk, turmeric lattes, and wellness drinks",
      "Skincare and Ayurvedic home remedies",
      "Food industry and nutraceutical manufacturing",
    ],
    nutrition: [
      { label: "Calories", value: "354kcal" },
      { label: "Curcumin", value: "6.5%" },
      { label: "Iron", value: "41mg" },
    ],
    sizes: ["100g", "250g", "500g", "1 kg", "5 kg", "Bulk Export"],
  },
  {
    name: "Coriander Powder",
    title: "Aromatic Coriander Powder",
    wholeName: "Rajasthani Coriander Seeds",
    accent: "#5E8A3A",
    wholeImage: ChilliImage,
    packetImage: ChilliPacket,
    fillGradient: "linear-gradient(to top, #5E8A3A, #9dca6888)",
    particleColors: ["#7D9E5A", "#9ab870", "#5e8a3a", "#8ab060", "#b5d090"],
    description:
      "Slow-roasted and freshly milled from premium Rajasthani coriander seeds, our Coriander Powder carries a citrusy, floral fragrance that lifts every dish. The cornerstone of Indian cooking — mild yet indispensable.",
    useCases: [
      "Base spice for gravies, curries, and kormas",
      "Dry rubs for kebabs and roasted vegetables",
      "Spice mixes like garam masala and chaat masala",
      "Digestive herbal teas and Ayurvedic formulations",
    ],
    nutrition: [
      { label: "Calories", value: "298kcal" },
      { label: "Calcium", value: "709mg" },
      { label: "Fiber", value: "41g" },
    ],
    sizes: ["100g", "250g", "500g", "1 kg", "5 kg", "Bulk Export"],
  },
];

const BG = ["#F6F1E8", "#FFF8ED", "#F6F1E8"];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Products() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        * { font-family: 'Lato', sans-serif; box-sizing: border-box; }
        h1, h2 { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

      {/* Hero Banner */}
      <div
        className="w-full py-20 px-6 text-center relative overflow-hidden"
        style={{ background: "#F6F1E8" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C0392B 0%, transparent 50%), radial-gradient(circle at 80% 50%, #D4A017 0%, transparent 50%), radial-gradient(circle at 50% 80%, #5E8A3A 0%, transparent 40%)",
          }}
        />
        <div className="relative z-10">
          <p
            className="text-xs tracking-widest uppercase font-bold mb-4"
            style={{ color: "#C0392B" }}
          >
            Farm to Table · Est. 2010
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-5"
            style={{ color: "#1A120B" }}
          >
            Our Spice{" "}
            <span style={{ color: "#C0392B", fontStyle: "italic" }}>
              Collection
            </span>
          </h1>
          <p
            className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
            style={{ color: "#5a4a3a" }}
          >
            Single-origin. Cold-processed. Uncompromisingly pure. NutriNature
            brings you the finest spices from India's iconic spice belts.
          </p>
          <div
            className="mt-8 mx-auto"
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, #C0392B, #D4A017, #5E8A3A)",
              borderRadius: 99,
            }}
          />
        </div>
      </div>

      {/* Product Sections */}
      {SPICES.map((spice, i) => (
        <ProductSection
          key={spice.name}
          spice={spice}
          reverse={i % 2 === 1}
          bg={BG[i]}
        />
      ))}

      {/* Footer Strip */}
      <div
        className="w-full py-8 text-center"
        style={{ background: "#1A120B" }}
      >
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "#8a7a6a" }}
        >
          © 2025 NutriNature · Premium Indian Spices · All Rights Reserved
        </p>
      </div>
    </>
  );
}
