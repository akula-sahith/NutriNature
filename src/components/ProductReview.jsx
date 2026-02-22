import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Placeholder packet visuals (replace src with actual image imports)
import chilliPacket from "../assets/chilli-packet.png";
// import turmericPacket from "../assets/turmeric-packet.png";
// import corianderPacket from "../assets/coriander-packet.png";

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatAnimationSlow = {
  animate: {
    y: [0, -7, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.6,
    },
  },
};

const floatAnimationAlt = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.1,
    },
  },
};

// Packet placeholder card component (swap img tag src for real images)
function PacketCard({ label, imgSrc, alt }) {
  return (
    <div
      className="relative flex flex-col items-center justify-end"
      style={{
        background: "transparent", // No background
        width: "100%",
        height: "100%",
        overflow: "visible", // Allows the image to breathe if it's larger
      }}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={alt}
          className="w-full h-full object-contain" // 'contain' keeps the whole image visible
          style={{ 
            filter: "saturate(1.1) brightness(1.02)",
            display: "block" 
          }}
        />
      ) : (
        <div className="relative z-10 mb-6 flex flex-col items-center px-4 text-center">
          <span
            className="text-white font-bold text-sm uppercase tracking-widest opacity-90"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
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
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "#FFF8ED" }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, #F5C97A 0%, #FFF8ED 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #C97D3A 0%, #FFF8ED 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center gap-16">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-3"
        >
          <span
            className="text-xs uppercase tracking-[0.28em] font-semibold"
            style={{
              color: "#C97D3A",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Our Signature Range
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#2C1A0E",
              lineHeight: 1.15,
            }}
          >
            Pure Spices,{" "}
            <span style={{ color: "#C97D3A", fontStyle: "italic" }}>
              Timeless Flavours
            </span>
          </h2>
        </motion.div>

        {/* === Overlapping Packets === */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: "520px", maxWidth: "100%", height: "340px" }}
        >
          {/* Turmeric — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              translate: "-50% -50%",
              marginLeft: "-140px",
              zIndex: 10,
              width: "200px",
              height: "280px",
            }}
          >
            <motion.div
              variants={floatAnimationSlow}
              animate="animate"
              style={{ rotate: "-3deg", width: "200px", height: "280px" }}
            >
              <PacketCard
                label="Turmeric Powder"
                color="#F5C97A"
                accent="#D4A017"
                imgSrc={chilliPacket}
                alt="Turmeric Powder Packet"
              />
            </motion.div>
          </motion.div>

          {/* Chilli — scales in from center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              translate: "-50% -50%",
              zIndex: 30,
              width: "220px",
              height: "310px",
            }}
          >
            <motion.div
              variants={floatAnimation}
              animate="animate"
              style={{ width: "220px", height: "310px" }}
            >
              <PacketCard
                label="Chilli Powder"
                color="#E8553A"
                accent="#B83020"
                imgSrc={chilliPacket}
                alt="Chilli Powder Packet"
              />
            </motion.div>
          </motion.div>

          {/* Coriander — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              translate: "-50% -50%",
              marginLeft: "140px",
              zIndex: 10,
              width: "200px",
              height: "280px",
            }}
          >
            <motion.div
              variants={floatAnimationAlt}
              animate="animate"
              style={{ rotate: "3deg", width: "200px", height: "280px" }}
            >
              <PacketCard
                label="Coriander Powder"
                color="#7DB87A"
                accent="#4A8C46"
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
          className="text-center max-w-xl text-base md:text-lg"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#6B4C2A",
            lineHeight: 1.8,
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "linear-gradient(135deg, #C97D3A 0%, #A85C20 100%)",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 10px 36px rgba(201,125,58,0.38)",
              }}
              className="px-10 py-4 rounded-full text-white font-semibold text-sm tracking-wide"
            >
              More Details →
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}