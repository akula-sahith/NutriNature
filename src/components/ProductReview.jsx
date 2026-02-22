import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import chilliPacket from "../assets/chilli-packet.png";
// import turmericPacket from "../assets/turmeric-packet.png";
// import corianderPacket from "../assets/coriander-packet.png";

// Reduced float for mobile performance
const floatAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};
const floatAnimationSlow = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
  },
};
const floatAnimationAlt = {
  animate: {
    y: [0, -7, 0],
    transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
  },
};

function PacketCard({ label, imgSrc, alt }) {
  return (
    <div style={{ background: "transparent", width: "100%", height: "100%", overflow: "visible" }}>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            filter: "saturate(1.1) brightness(1.02)",
          }}
        />
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "100%", paddingBottom: "1.5rem" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", color: "white", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProductsPreview() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFF8ED", paddingTop: "clamp(4rem, 10vw, 8rem)", paddingBottom: "clamp(4rem, 10vw, 8rem)" }}
    >
      {/* Background blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-80px", left: "-80px",
          width: "min(400px, 70vw)", height: "min(400px, 70vw)",
          borderRadius: "50%", opacity: 0.3,
          background: "radial-gradient(circle, #F5C97A 0%, #FFF8ED 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-60px", right: "-60px",
          width: "min(350px, 60vw)", height: "min(350px, 60vw)",
          borderRadius: "50%", opacity: 0.2,
          background: "radial-gradient(circle, #C97D3A 0%, #FFF8ED 70%)",
          filter: "blur(100px)",
        }}
      />

      <div
        className="relative z-10 mx-auto px-5 md:px-12 flex flex-col items-center"
        style={{ maxWidth: "900px", gap: "clamp(2rem, 5vw, 4rem)" }}
      >

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}
        >
          <span
            style={{
              color: "#C97D3A",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              fontWeight: 600,
            }}
          >
            Our Signature Range
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#2C1A0E",
              lineHeight: 1.15,
              textAlign: "center",
              fontSize: "clamp(1.8rem, 6vw, 3rem)",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Pure Spices,{" "}
            <span style={{ color: "#C97D3A", fontStyle: "italic" }}>
              Timeless Flavours
            </span>
          </h2>
        </motion.div>

        {/* === Overlapping Packets — fully responsive === */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "100%",
            // Responsive height based on viewport
            height: "clamp(220px, 55vw, 360px)",
          }}
        >
          {/* Turmeric — left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              // Responsive packet size
              marginLeft: "clamp(-90px, -22vw, -130px)",
              zIndex: 10,
              width: "clamp(110px, 27vw, 190px)",
              height: "clamp(155px, 38vw, 265px)",
            }}
          >
            <motion.div
              variants={floatAnimationSlow}
              animate="animate"
              style={{ rotate: "-3deg", width: "100%", height: "100%" }}
            >
              <PacketCard
                label="Turmeric Powder"
                imgSrc={chilliPacket}
                alt="Turmeric Powder Packet"
              />
            </motion.div>
          </motion.div>

          {/* Chilli — center (front) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 30,
              width: "clamp(125px, 31vw, 210px)",
              height: "clamp(175px, 44vw, 295px)",
            }}
          >
            <motion.div
              variants={floatAnimation}
              animate="animate"
              style={{ width: "100%", height: "100%" }}
            >
              <PacketCard
                label="Chilli Powder"
                imgSrc={chilliPacket}
                alt="Chilli Powder Packet"
              />
            </motion.div>
          </motion.div>

          {/* Coriander — right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              marginLeft: "clamp(90px, 22vw, 130px)",
              zIndex: 10,
              width: "clamp(110px, 27vw, 190px)",
              height: "clamp(155px, 38vw, 265px)",
            }}
          >
            <motion.div
              variants={floatAnimationAlt}
              animate="animate"
              style={{ rotate: "3deg", width: "100%", height: "100%" }}
            >
              <PacketCard
                label="Coriander Powder"
                imgSrc={chilliPacket}
                alt="Coriander Powder Packet"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          style={{
            textAlign: "center",
            maxWidth: "520px",
            fontFamily: "'DM Sans', sans-serif",
            color: "#6B4C2A",
            lineHeight: 1.8,
            fontSize: "clamp(0.88rem, 2.5vw, 1.05rem)",
            margin: 0,
            paddingTop: "0.5rem",
          }}
        >
          Our{" "}
          <strong style={{ color: "#B83020" }}>Chilli</strong>,{" "}
          <strong style={{ color: "#C9940A" }}>Turmeric</strong>, and{" "}
          <strong style={{ color: "#4A8C46" }}>Coriander</strong> powders are
          cold-ground from hand-selected, sun-dried produce — preserving every
          trace of colour, aroma, and natural goodness, straight from farm to
          your kitchen.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <Link to="/products" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "linear-gradient(135deg, #C97D3A 0%, #A85C20 100%)",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 10px 36px rgba(201,125,58,0.38)",
                padding: "clamp(0.75rem, 2.5vw, 1rem) clamp(2rem, 5vw, 2.5rem)",
                borderRadius: "999px",
                color: "white",
                fontWeight: 600,
                fontSize: "clamp(0.82rem, 2.2vw, 0.9rem)",
                letterSpacing: "0.05em",
                border: "none",
                cursor: "pointer",
                minHeight: "44px",
              }}
            >
              More Details →
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}