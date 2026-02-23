import { motion } from "framer-motion";
import SpiceImage from "../assets/image.png";
/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Values data ── */
const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Purity",
    description: "No additives, no artificial colours — just nature's best, untouched and unadulterated.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Quality",
    description: "Multi-stage quality checks for every batch produced, from farm to final packaging.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Trust",
    description: "Transparency in sourcing, processing, and pricing — earned through consistent integrity.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovation",
    description: "Combining centuries of spice tradition with modern food science and processing technology.",
  },
];

/* ── Inline turmeric/spice SVG illustration for founder section ── */
function SpiceIllustration() {
  return (
    <img 
      src={SpiceImage} 
      alt="NutriNature 15 Years FMCG Experience" 
      style={{
        width: "100%",
        height: "auto",
        aspectRatio: "1/1",
        borderRadius: "1.25rem",
        boxShadow: "0 16px 60px rgba(44,26,14,0.18)",
        objectFit: "cover"
      }}
    />
  );
}

export default function AboutUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      {/* ══════════════════════════════════════
          SECTION 1 — About Hero
      ══════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F6F1E8", fontFamily: "'DM Sans', sans-serif" }}
        className="pt-28 pb-20 px-5 md:px-12 relative overflow-hidden"
      >
        {/* Background blobs */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "min(500px,70vw)", height: "min(500px,70vw)", borderRadius: "50%", opacity: 0.18, background: "radial-gradient(circle, #E8A87C 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "min(350px,55vw)", height: "min(350px,55vw)", borderRadius: "50%", opacity: 0.12, background: "radial-gradient(circle, #C97D3A 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

        <motion.div
          className="max-w-2xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            style={{ display: "inline-block", color: "#E1AD01", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "1rem" }}
          >
            About Us
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "clamp(2.4rem, 7vw, 3.75rem)", lineHeight: 1.1, margin: "0 0 1.25rem" }}
          >
            Our{" "}
            <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Story</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            style={{ color: "#7A5C3C", fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)", lineHeight: 1.8, margin: 0 }}
          >
            Built on 15+ years of FMCG expertise, NutriNature is committed to delivering the purest Indian spices to every kitchen.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            variants={fadeUp}
            custom={3}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "2rem" }}
          >
            <div style={{ width: "40px", height: "1px", background: "rgba(201,125,58,0.35)" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C97D3A", opacity: 0.5 }} />
            <div style={{ width: "40px", height: "1px", background: "rgba(201,125,58,0.35)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Wave */}
      <div style={{ background: "#F6F1E8", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 Q720 28 1440 0 L1440 28 L0 28 Z" fill="#FFF8ED" />
        </svg>
      </div>

      {/* ══════════════════════════════════════
          SECTION 2 — Our Values
      ══════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#FFF8ED", fontFamily: "'DM Sans', sans-serif" }}
        className="py-24 px-5 md:px-12 lg:px-20"
      >
        <motion.div
          className="text-center max-w-xl mx-auto"
          style={{ marginBottom: "3.5rem" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span variants={fadeUp} custom={0} style={{ display: "inline-block", color: "#E1AD01", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "0.9rem" }}>
            Our Values
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "clamp(1.9rem, 4.5vw, 2.75rem)", lineHeight: 1.15, margin: 0 }}>
            What We{" "}
            <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Stand For</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 18 } }}
              style={{
                background: "#FFFFFF",
                borderRadius: "1.25rem",
                padding: "2rem 1.75rem",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(44,26,14,0.07), 0 1px 4px rgba(44,26,14,0.04)",
                border: "1px solid rgba(201,125,58,0.09)",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#EFE6D8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#B02A1F",
                  margin: "0 auto 1.25rem",
                  boxShadow: "0 3px 12px rgba(176,42,31,0.1)",
                }}
              >
                {v.icon}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 0.6rem" }}>
                {v.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#8C7B6E", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — Mission & Vision
      ══════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F3EDE3", fontFamily: "'DM Sans', sans-serif" }}
        className="py-24 px-5 md:px-12 lg:px-20"
      >
        <motion.div
          className="text-center max-w-xl mx-auto"
          style={{ marginBottom: "3.5rem" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span variants={fadeUp} custom={0} style={{ display: "inline-block", color: "#E1AD01", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "0.9rem" }}>
            Purpose
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "clamp(1.9rem, 4.5vw, 2.75rem)", lineHeight: 1.15, margin: 0 }}>
            Mission &{" "}
            <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Vision</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Mission */}
          <motion.div
            variants={fadeUp}
            custom={0}
            style={{
              background: "#FFFFFF",
              borderRadius: "1.25rem",
              padding: "clamp(1.75rem, 4vw, 2.5rem)",
              boxShadow: "0 4px 32px rgba(44,26,14,0.08)",
              border: "1px solid rgba(201,125,58,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #C97D3A, #E1AD01)" }} />
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(201,125,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#C97D3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "1.35rem", margin: "0 0 1rem" }}>
              Our Mission
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B5040", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
              To become India's most trusted spice brand by delivering consistently pure, hygienically processed, and scientifically tested spice products to every kitchen.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeUp}
            custom={1}
            style={{
              background: "#FFFFFF",
              borderRadius: "1.25rem",
              padding: "clamp(1.75rem, 4vw, 2.5rem)",
              boxShadow: "0 4px 32px rgba(44,26,14,0.08)",
              border: "1px solid rgba(201,125,58,0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #E1AD01, #C97D3A)" }} />
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(225,173,1,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#E1AD01" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "1.35rem", margin: "0 0 1rem" }}>
              Our Vision
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B5040", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
              To scale NutriNature into a national FMCG powerhouse with 20+ products, reaching millions of households and establishing a strong presence in domestic and international markets.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Wave */}
      <div style={{ background: "#F3EDE3", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 Q720 28 1440 0 L1440 28 L0 28 Z" fill="#F6F1E8" />
        </svg>
      </div>

      {/* ══════════════════════════════════════
          SECTION 4 — Founder Story
      ══════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F6F1E8", fontFamily: "'DM Sans', sans-serif" }}
        className="py-24 px-5 md:px-12 lg:px-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image — left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
            className="order-2 lg:order-1"
          >
            <SpiceIllustration />
          </motion.div>

          {/* Text — right */}
          <motion.div
            className="flex flex-col order-1 lg:order-2"
            style={{ gap: "1.25rem" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span
              variants={fadeLeft}
              custom={0}
              style={{ color: "#E1AD01", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase" }}
            >
              The Founder
            </motion.span>

            <motion.h2
              variants={fadeLeft}
              custom={1}
              style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.15, margin: 0 }}
            >
              15+ Years of{" "}
              <span style={{ color: "#C97D3A", fontStyle: "italic" }}>FMCG Excellence</span>
            </motion.h2>

            {/* Gold underline */}
            <motion.div
              variants={fadeLeft}
              custom={2}
              style={{ width: "64px", height: "2.5px", background: "linear-gradient(90deg, #E1AD01, #C97D3A)", borderRadius: "999px" }}
            />

            <motion.p
              variants={fadeLeft}
              custom={3}
              style={{ color: "#6B5040", fontSize: "clamp(0.875rem, 2vw, 0.975rem)", lineHeight: 1.85, margin: 0 }}
            >
              Nutri Nature Foods Private Limited was founded with a singular vision — to bring 100% pure, unadulterated Indian spices to every household and business. With over 15 years of deep experience in the FMCG industry, our founder understood the gaps in quality, hygiene, and consistency that plagued the spice market.
            </motion.p>

            <motion.p
              variants={fadeLeft}
              custom={4}
              style={{ color: "#6B5040", fontSize: "clamp(0.875rem, 2vw, 0.975rem)", lineHeight: 1.85, margin: 0 }}
            >
              This experience led to the creation of NutriNature — a brand that combines traditional spice wisdom with modern food science, ensuring that every product meets the highest standards of purity and flavour.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeLeft}
              custom={5}
              style={{ display: "flex", gap: "clamp(1.5rem, 4vw, 2.5rem)", marginTop: "0.5rem", flexWrap: "wrap" }}
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "12+", label: "Spice Varieties" },
                { value: "100%", label: "Natural" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", margin: "0 0 2px" }}>
                    {stat.value}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#A07850", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
}