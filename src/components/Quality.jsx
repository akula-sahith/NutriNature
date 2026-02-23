import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── Shared easing & variants ── */
const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.13, ease: EASE },
  }),
};

/* ── Data ── */
const commitments = [
  "100% natural — no artificial colours or preservatives",
  "Lab-tested every batch for purity and safety",
  "FSSAI licensed and compliant",
  "Preparing for ISO and HACCP certification",
  "Full traceability from farm to pack",
  "Consistent colour, aroma, and taste across batches",
];

const steps = [
  { num: "01", title: "Raw Material Sourcing", description: "We source only from trusted Indian farms, selecting the finest quality raw spices with rigorous incoming quality checks.", icon: "🌱" },
  { num: "02", title: "Cleaning & Sorting", description: "Multi-stage cleaning removes impurities, stones, and foreign matter. Advanced sorting ensures only the best material proceeds.", icon: "✨" },
  { num: "03", title: "Grinding Technology", description: "Temperature-controlled grinding preserves essential oils, natural colour, and aroma. Our machinery ensures consistent particle size.", icon: "⚙️" },
  { num: "04", title: "Hygiene Control", description: "Stainless steel equipment, sanitized environments, and protective gear ensure zero contamination throughout the process.", icon: "🛡️" },
  { num: "05", title: "Packaging Standards", description: "Nitrogen-flushed, multi-layer laminated pouches preserve freshness and prevent moisture ingress. Tamper-evident seals for safety.", icon: "📦" },
  { num: "06", title: "Lab Testing", description: "Every batch is tested for moisture, colour value, microbial load, and adulteration. We believe in data-driven quality assurance.", icon: "🔬" },
];

export default function QualityProcess() {
  return (
    <div style={{ backgroundColor: "#FFF8ED" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      {/* ══════════════════════════════════════
          1. HEADER SECTION (Formerly Bottom)
      ══════════════════════════════════════ */}
      <section className="pt-32 pb-20 px-5 text-center relative overflow-hidden">
        <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "300px", background: "radial-gradient(circle, rgba(201,125,58,0.1) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 max-w-3xl mx-auto">
          <motion.span variants={fadeUp} custom={0} style={{ display: "inline-block", color: "#C97D3A", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Our Standards
          </motion.span>
          <motion.h1 variants={fadeUp} custom={1} style={{ fontFamily: "'Playfair Display', serif", color: "#2C1A0E", fontWeight: 700, fontSize: "clamp(2.5rem, 8vw, 4rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Quality & <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Processing</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B4C2A", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            From the first seed to the final seal, every step is designed for uncompromised purity and natural goodness.
          </motion.p>
          
          <motion.div variants={fadeUp} custom={3} className="flex gap-3 justify-center flex-wrap">
            {["FSSAI Licensed", "ISO Ready", "HACCP Ready", "Lab Tested"].map((badge) => (
              <span key={badge} style={{ background: "white", border: "1px solid rgba(201,125,58,0.2)", color: "#C97D3A", fontSize: "0.7rem", fontWeight: 700, padding: "0.6rem 1.2rem", borderRadius: "999px", textTransform: "uppercase", letterSpacing: "0.05em", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          2. STEP-BY-STEP PROCESS (One by One)
      ══════════════════════════════════════ */}
      <section className="py-20 px-5 md:px-12">
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <StepRow key={step.num} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. OUR COMMITMENT (Checklist)
      ══════════════════════════════════════ */}
      <section style={{ backgroundColor: "#F6F1E8" }} className="py-24 px-5 relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#2C1A0E", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700 }}>
              Our <span style={{ color: "#C97D3A" }}>Commitment</span>
            </h2>
          </div>
          <div style={{ background: "white", borderRadius: "2rem", padding: "clamp(1.5rem, 5vw, 3rem)", boxShadow: "0 20px 50px rgba(44,26,14,0.05)", border: "1px solid rgba(201,125,58,0.08)" }}>
             {commitments.map((text, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 0", borderBottom: i === commitments.length -1 ? "none" : "1px solid #F6F1E8" }}
               >
                 <div style={{ color: "#B02A1F", fontSize: "1.2rem" }}>✓</div>
                 <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A3320", margin: 0, fontWeight: 500 }}>{text}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* Sub-component for Step-by-Step reveal */
function StepRow({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: EASE }}
      style={{
        display: "flex",
        gap: "2rem",
        padding: "2.5rem 0",
        borderBottom: "1px solid rgba(201,125,58,0.15)",
        alignItems: "center"
      }}
      className="flex-col md:flex-row text-center md:text-left"
    >
      <div style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontSize: "3.5rem", 
        fontWeight: 800, 
        color: "rgba(201,125,58,0.2)",
        minWidth: "80px"
      }}>
        {step.num}
      </div>
      
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#2C1A0E", marginBottom: "0.5rem" }}>
          {step.title}
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#7A5C3C", lineHeight: 1.6, margin: 0 }}>
          {step.description}
        </p>
      </div>

      <div style={{ 
        width: "60px", height: "60px", borderRadius: "50%", background: "white", 
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem",
        boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
      }}>
        {step.icon}
      </div>
    </motion.div>
  );
}