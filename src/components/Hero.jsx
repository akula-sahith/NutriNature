import { motion } from "framer-motion";
import spices from "../assets/spices.png"
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatAnimation = {
  animate: {
    y: [0, -18, 0],
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
      {/* Subtle background texture blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #E8A87C 0%, #F6F1E8 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #C97D3A 0%, #F6F1E8 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Small label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-3"
            >
              {/* <span
                className="block w-8 h-[2px] rounded-full"
                style={{ backgroundColor: "#C97D3A" }}
              /> */}
              <span
                className="text-xs uppercase tracking-[0.25em] font-semibold"
                style={{
                  color: "#C97D3A",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                100% PURE & NATURAL
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2C1A0E",
                lineHeight: 1.1,
              }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold"
            >
              To Elevate
              <br />
              <span
                style={{
                  color: "#C97D3A",
                  fontStyle: "italic",
                }}
              >
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
              }}
              className="text-base md:text-lg max-w-md"
            >
              Handpicked from sun-drenched farms across India — our premium{" "}
              <strong>Chilli</strong>, <strong>Turmeric</strong>, and{" "}
              <strong>Coriander</strong> powders bring unmatched depth, colour,
              and aroma to every dish you create.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex gap-8 mt-2"
            >
              {[
                { value: "100%", label: "Natural" },
                { value: "12+", label: "Spice Varieties" },
                { value: "No", label: "Preservatives" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#2C1A0E",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs uppercase tracking-wider mt-0.5"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#A07850",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex items-center gap-4 mt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "linear-gradient(135deg, #C97D3A 0%, #A85C20 100%)",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 8px 32px rgba(201,125,58,0.35)",
                }}
                className="px-8 py-4 rounded-full text-white font-semibold text-sm tracking-wide"
              >
                Explore Products
              </motion.button>

              <motion.button
                whileHover={{ x: 4 }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#C97D3A",
                }}
                className="flex items-center gap-2 text-sm font-semibold"
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

          {/* RIGHT COLUMN */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center">

            {/* Decorative ring */}
            {/* <div
              className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full"
              style={{
                border: "2px dashed rgba(201,125,58,0.2)",
              }}
            /> */}
            <div
              className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(232,168,124,0.25) 0%, transparent 70%)",
              }}
            />

            {/* Floating image */}
            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="relative z-10"
            >
              <div
                className="relative rounded-[2rem] overflow-hidden"
                style={{
                  boxShadow:
                    "0 30px 80px rgba(100,50,10,0.18), 0 8px 24px rgba(100,50,10,0.1)",
                  width: "650px",
                  height: "420px",
                }}
              >
                <img
                  src={spices}
                  alt="Vibrant Indian spice powders in wooden bowls"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(1.1) brightness(1.02)" }}
                />
                {/* Warm overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(44,26,14,0.15) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
                style={{
                  background: "rgba(246,241,232,0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(201,125,58,0.2)",
                  boxShadow: "0 8px 32px rgba(100,50,10,0.12)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                className="absolute -bottom-5 -left-8 rounded-2xl px-5 py-3 flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ background: "rgba(201,125,58,0.12)" }}
                >
                  🌿
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: "#2C1A0E" }}>
                    Farm to Jar
                  </p>
                  <p className="text-[11px]" style={{ color: "#A07850" }}>
                    Cold-ground & sealed fresh
                  </p>
                </div>
              </motion.div>

              {/* Rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: "backOut" }}
                style={{
                  background: "#C97D3A",
                  boxShadow: "0 8px 24px rgba(201,125,58,0.4)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                className="absolute -top-4 -right-6 rounded-2xl px-4 py-3 text-white"
              >
                <p className="text-lg font-bold leading-none">4.9★</p>
                <p className="text-[10px] opacity-80 mt-0.5">2k+ reviews</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}