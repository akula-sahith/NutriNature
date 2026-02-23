import { motion } from "framer-motion";
import fssai from "../assets/fssai.jpg";
import gmp from "../assets/gmp.png";
import HACCP from "../assets/HACCP.jpg";
import iso from "../assets/Iso.png";

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
    image: fssai,
  },
  {
    name: "ISO Ready",
    subtitle: "ISO 22000 : 2018",
    image: iso,
  },
  {
    name: "HACCP Ready",
    subtitle: "Hazard Analysis & CCP",
    image: HACCP,
  },
  {
    name: "GMP Compliant",
    subtitle: "Good Manufacturing Practice",
    image: gmp,
  },
];

export default function Certifications() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        .cert-card-img {
          transition: transform 0.5s ease;
          object-fit: contain;
        }
        .cert-card:hover .cert-card-img {
          transform: scale(1.05);
        }
      `}</style>

      <section
        style={{ backgroundColor: "#FFF8ED", fontFamily: "'DM Sans', sans-serif" }}
        className="py-24 px-5 md:px-12 lg:px-20 relative overflow-hidden"
      >
        {/* Subtle background decorative blobs */}
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
              Nutri Nature adheres to the most stringent international hygiene standards to deliver pure, unadulterated spices.
            </motion.p>
          </motion.div>

          {/* ── Certification Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="cert-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "1.25rem",
                  padding: "2.5rem 1.5rem",
                  boxShadow: "0 10px 30px rgba(44,26,14,0.05)",
                  border: "1px solid rgba(201,125,58,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Image Container - Always Full Color */}
                <div style={{ height: "100px", width: "100%", marginBottom: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="cert-card-img"
                    style={{ maxHeight: "100%", maxWidth: "140px" }}
                  />
                </div>

                <div style={{ width: "40px", height: "1.5px", background: "#E1AD01", opacity: 0.4, marginBottom: "1.25rem" }} />

                <h3 style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: "1.15rem", 
                  color: "#2E2A25", 
                  margin: "0 0 0.5rem",
                  fontWeight: 700
                }}>
                  {cert.name}
                </h3>
                
                <p style={{ 
                  fontSize: "0.75rem", 
                  color: "#9C806A", 
                  margin: 0, 
                  textTransform: "uppercase", 
                  letterSpacing: "0.05em",
                  lineHeight: 1.4
                }}>
                  {cert.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              color: "#B8A898",
              fontSize: "0.85rem",
              marginTop: "3.5rem",
              lineHeight: 1.6
            }}
          >
            Our processing facility is fully compliant with food safety regulations.<br />
            Actual certification documents are available for B2B partners upon request.
          </motion.p>
        </div>
      </section>
    </>
  );
}