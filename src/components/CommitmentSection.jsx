import { motion } from "framer-motion";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Quality Assured",
    description: "Stringent multi-stage quality checks at every step of our production process.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6" />
        <path d="M10 11h4" />
        <path d="M10 15h4" />
      </svg>
    ),
    title: "Hygiene First",
    description: "State-of-the-art hygienic processing facilities that meet international standards.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11a9 9 0 0 0-9-9z" />
        <path d="M12 7v4" />
        <path d="M8.5 9.5 12 11l3.5-1.5" />
      </svg>
    ),
    title: "Farm Fresh",
    description: "Direct sourcing from trusted Indian farmers who share our passion for purity.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Scientific Processing",
    description: "Modern cold-grinding and airtight packaging technology to lock in freshness.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CommitmentSection() {
  return (
    <section
      style={{ backgroundColor: "#F6F1E8", fontFamily: "'DM Sans', sans-serif" }}
      className="py-24 px-5 md:px-12 lg:px-20"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      <motion.div
        className="max-w-6xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Top Label */}
        <motion.div variants={headerVariants} className="text-center mb-4">
          <span
            style={{
              color: "#E1AD01",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Why NutriNature
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={headerVariants}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#2E2A25",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: 1.15,
            textAlign: "center",
            margin: "0 auto 4rem",
            maxWidth: "600px",
          }}
        >
          Our Commitment to{" "}
          <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Excellence</span>
        </motion.h2>

        {/* Pillars Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 320, damping: 20 },
              }}
              style={{
                background: "rgba(255,252,246,0.85)",
                borderRadius: "1.5rem",
                padding: "2rem 1.75rem",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(44,26,14,0.07), 0 1px 4px rgba(44,26,14,0.04)",
                border: "1px solid rgba(201,125,58,0.1)",
                cursor: "default",
              }}
            >
              {/* Icon Circle */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "#EADDD6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                  color: "#C0392B",
                  boxShadow: "0 4px 16px rgba(192,57,43,0.12)",
                }}
              >
                {pillar.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#2E2A25",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  marginBottom: "0.625rem",
                }}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#8C7B6E",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}