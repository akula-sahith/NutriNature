import { motion } from "framer-motion";
import spices from "../assets/spices.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Reduced float range for mobile perf
const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#F6F1E8" }}
    >
      {/* Background blobs — smaller on mobile */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "min(600px, 80vw)",
          height: "min(600px, 80vw)",
          borderRadius: "50%",
          opacity: 0.2,
          background: "radial-gradient(circle, #E8A87C 0%, #F6F1E8 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "min(400px, 60vw)",
          height: "min(400px, 60vw)",
          borderRadius: "50%",
          opacity: 0.15,
          background: "radial-gradient(circle, #C97D3A 0%, #F6F1E8 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20"
        style={{ paddingTop: "96px", paddingBottom: "3rem" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* RIGHT COLUMN (image) — shown first on mobile */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center">

            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "min(420px, 75vw)",
                height: "min(420px, 75vw)",
                background: "radial-gradient(circle, rgba(232,168,124,0.25) 0%, transparent 70%)",
              }}
            />

            {/* Floating image */}
            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="relative z-10 w-full"
              style={{ maxWidth: "min(600px, 90vw)" }}
            >
              <div
                className="relative rounded-2xl md:rounded-[2rem] overflow-hidden w-full"
                style={{
                  boxShadow: "0 20px 60px rgba(100,50,10,0.18), 0 6px 20px rgba(100,50,10,0.1)",
                  aspectRatio: "16/10",
                }}
              >
                <img
                  src={spices}
                  alt="Vibrant Indian spice powders in wooden bowls"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(1.1) brightness(1.02)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(44,26,14,0.15) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating badge — repositioned for mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "backOut" }}
                style={{
                  background: "rgba(246,241,232,0.95)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(201,125,58,0.2)",
                  boxShadow: "0 6px 24px rgba(100,50,10,0.12)",
                  fontFamily: "'DM Sans', sans-serif",
                  position: "absolute",
                  bottom: "-14px",
                  left: "12px",
                }}
                className="rounded-xl px-3 py-2 md:px-5 md:py-3 flex items-center gap-2 md:gap-3"
              >
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(201,125,58,0.12)",
                    width: "clamp(32px, 5vw, 40px)",
                    height: "clamp(32px, 5vw, 40px)",
                    fontSize: "clamp(14px, 2.5vw, 20px)",
                  }}
                >
                  🌿
                </div>
                <div>
                  <p
                    style={{
                      color: "#2C1A0E",
                      fontWeight: 700,
                      fontSize: "clamp(10px, 2vw, 13px)",
                      margin: 0,
                    }}
                  >
                    Farm to Jar
                  </p>
                  <p
                    style={{
                      color: "#A07850",
                      fontSize: "clamp(9px, 1.8vw, 11px)",
                      margin: 0,
                    }}
                  >
                    Cold-ground & sealed fresh
                  </p>
                </div>
              </motion.div>

              {/* Rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5, ease: "backOut" }}
                style={{
                  background: "#C97D3A",
                  boxShadow: "0 6px 20px rgba(201,125,58,0.4)",
                  fontFamily: "'DM Sans', sans-serif",
                  position: "absolute",
                  top: "-10px",
                  right: "8px",
                  borderRadius: "14px",
                  padding: "8px 12px",
                  color: "white",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    lineHeight: 1,
                    fontSize: "clamp(13px, 2.5vw, 18px)",
                    margin: 0,
                  }}
                >
                  4.9★
                </p>
                <p
                  style={{
                    opacity: 0.85,
                    fontSize: "clamp(9px, 1.8vw, 10px)",
                    marginTop: "2px",
                    margin: 0,
                  }}
                >
                  2k+ reviews
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* LEFT COLUMN (text) */}
          <div className="flex flex-col order-2 lg:order-1" style={{ gap: "clamp(1rem, 3vw, 1.5rem)", marginTop: "1.5rem" }}>

            {/* Label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span
                className="text-xs uppercase font-semibold"
                style={{
                  color: "#C97D3A",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.25em",
                }}
              >
                100% PURE & NATURAL
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1A0E",
                lineHeight: 1.1,
                fontSize: "clamp(2.4rem, 8vw, 4.5rem)",
                fontWeight: 700,
                margin: 0,
              }}
            >
              To Elevate
              <br />
              <span style={{ color: "#C97D3A", fontStyle: "italic" }}>
                Every Recipe
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#6B4C2A",
                lineHeight: 1.75,
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                maxWidth: "480px",
                margin: 0,
              }}
            >
              Handpicked from sun-drenched farms across India — our premium{" "}
              <strong>Chilli</strong>, <strong>Turmeric</strong>, and{" "}
              <strong>Coriander</strong> powders bring unmatched depth, colour,
              and aroma to every dish you create.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex gap-6 md:gap-8"
              style={{ marginTop: "0.25rem" }}
            >
              {[
                { value: "100%", label: "Natural" },
                { value: "12+", label: "Spice Varieties" },
                { value: "No", label: "Preservatives" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#2C1A0E",
                      fontWeight: 700,
                      fontSize: "clamp(1.3rem, 4vw, 1.75rem)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#A07850",
                      fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginTop: "2px",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex items-center gap-4"
              style={{ marginTop: "0.25rem", flexWrap: "wrap" }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "linear-gradient(135deg, #C97D3A 0%, #A85C20 100%)",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 8px 32px rgba(201,125,58,0.35)",
                  padding: "clamp(0.7rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem)",
                  borderRadius: "999px",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)",
                  letterSpacing: "0.05em",
                  border: "none",
                  cursor: "pointer",
                  minHeight: "44px",
                }}
              >
                Explore Products
              </motion.button>

              <motion.button
                whileHover={{ x: 4 }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#C97D3A",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  minHeight: "44px",
                  padding: "0 4px",
                }}
              >
                Our Story
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}