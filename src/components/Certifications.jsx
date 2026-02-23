import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: EASE },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.18, ease: EASE },
  }),
};

const certifications = [
  {
    name: "FSSAI Licensed",
    subtitle: "Food Safety & Standards",
    badge: "✓ Active",
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="90" height="68">
        <rect x="4" y="4" width="72" height="52" rx="8" fill="#FFF8ED" stroke="#E1AD01" strokeWidth="1.5" />
        <text x="40" y="24" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="11" fill="#2E2A25">FSSAI</text>
        <text x="40" y="36" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fill="#9C806A">Lic. No. XXXXXX</text>
        <path d="M28 44 l5 5 l12-12" stroke="#E1AD01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "ISO Ready",
    subtitle: "ISO 22000 : 2018",
    badge: "In Progress",
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="90" height="68">
        <rect x="4" y="4" width="72" height="52" rx="8" fill="#FFF8ED" stroke="#B02A1F" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="40" cy="30" r="14" stroke="#B02A1F" strokeWidth="1.5" fill="none" />
        <text x="40" y="26" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="8.5" fill="#2E2A25">ISO</text>
        <text x="40" y="35" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fill="#9C806A">22000:2018</text>
      </svg>
    ),
  },
  {
    name: "HACCP Ready",
    subtitle: "Hazard Analysis & CCP",
    badge: "In Progress",
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="90" height="68">
        <rect x="4" y="4" width="72" height="52" rx="8" fill="#FFF8ED" stroke="#B02A1F" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M40 14 L52 22 L52 38 L40 46 L28 38 L28 22 Z" fill="none" stroke="#C97D3A" strokeWidth="1.5" />
        <text x="40" y="33" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="8" fill="#2E2A25">HACCP</text>
      </svg>
    ),
  },
  {
    name: "GMP Compliant",
    subtitle: "Good Manufacturing Practice",
    badge: "✓ Active",
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="90" height="68">
        <rect x="4" y="4" width="72" height="52" rx="8" fill="#FFF8ED" stroke="#E1AD01" strokeWidth="1.5" />
        <rect x="18" y="18" width="44" height="24" rx="4" fill="none" stroke="#C97D3A" strokeWidth="1.2" />
        <text x="40" y="27" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="8" fill="#2E2A25">GMP</text>
        <text x="40" y="36" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#9C806A">Certified</text>
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      <section
        style={{ backgroundColor: "#FFF8ED", fontFamily: "'DM Sans', sans-serif" }}
        className="py-24 px-5 md:px-12 lg:px-20 relative overflow-hidden"
      >
        {/* Subtle background blob */}
        <div style={{ position: "absolute", top: "10%", right: 0, width: "min(420px,65vw)", height: "min(420px,65vw)", borderRadius: "50%", opacity: 0.12, background: "radial-gradient(circle, #E1AD01 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: 0, width: "min(300px,50vw)", height: "min(300px,50vw)", borderRadius: "50%", opacity: 0.08, background: "radial-gradient(circle, #C97D3A 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* ── Heading ── */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              style={{
                display: "inline-block",
                color: "#E1AD01",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Certifications
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2E2A25",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 5vw, 2.9rem)",
                lineHeight: 1.12,
                margin: "0 0 0.5rem",
              }}
            >
              Quality You Can{" "}
              <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Trust</span>
            </motion.h2>

            {/* Gold underline animation */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.35, ease: EASE }}
              style={{
                width: "72px",
                height: "2.5px",
                background: "linear-gradient(90deg, #E1AD01, #C97D3A)",
                borderRadius: "999px",
                margin: "0.875rem auto 1.25rem",
                transformOrigin: "left center",
              }}
            />

            <motion.p
              variants={fadeUp}
              custom={2}
              style={{
                color: "#7A5C3C",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                lineHeight: 1.78,
                margin: 0,
              }}
            >
              We are committed to obtaining the highest certifications for food safety and quality.
            </motion.p>
          </motion.div>

          {/* ── Certification Cards ── */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                variants={cardVariants}
                custom={i}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 40px rgba(44,26,14,0.13)",
                  transition: { type: "spring", stiffness: 280, damping: 18 },
                }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "1rem",
                  padding: "clamp(1.25rem, 3vw, 1.75rem) 1.25rem",
                  boxShadow: "0 4px 24px rgba(44,26,14,0.07), 0 1px 4px rgba(44,26,14,0.04)",
                  border: "1px solid rgba(201,125,58,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2.5px",
                  background: cert.badge.startsWith("✓")
                    ? "linear-gradient(90deg, #E1AD01, #C97D3A)"
                    : "linear-gradient(90deg, #C97D3A55, #E1AD0155)",
                }} />

                {/* Logo / Icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxHeight: "68px",
                    width: "100%",
                  }}
                >
                  {cert.icon}
                </div>

                {/* Divider */}
                <div style={{ width: "100%", height: "1px", background: "rgba(201,125,58,0.12)" }} />

                {/* Name & subtitle */}
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#2E2A25",
                      fontWeight: 700,
                      fontSize: "clamp(0.875rem, 2vw, 1rem)",
                      margin: "0 0 3px",
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#9C806A",
                      fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)",
                      margin: "0 0 8px",
                      lineHeight: 1.4,
                    }}
                  >
                    {cert.subtitle}
                  </p>

                  {/* Status badge */}
                  
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Bottom note ── */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, delay: 0.5, ease: EASE }}
            style={{
              textAlign: "center",
              fontFamily: "'DM Sans', sans-serif",
              color: "#B8A898",
              fontSize: "0.8rem",
              lineHeight: 1.6,
              marginTop: "2.5rem",
            }}
          >
            <br />
            Actual certification documents available upon request.
          </motion.p>

        </div>
      </section>
    </>
  );
}