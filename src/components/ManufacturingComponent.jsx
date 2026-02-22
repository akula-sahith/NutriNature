import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import chilliPacket from "../assets/chilli-packet.png";
const features = [
  {
    id: 1,
    title: "Advanced grinding technology",
    image: chilliPacket,
  },
  {
    id: 2,
    title: "Temperature-controlled storage",
    image: chilliPacket,
  },
  {
    id: 3,
    title: "Automated packaging lines",
    image: chilliPacket,
  },
  {
    id: 4,
    title: "In-house quality lab",
    image: chilliPacket,
  }
];

export default function ManufacturingShowcase() {
  const [index, setIndex] = useState(0);
  const DURATION = 4000;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ 
      minHeight: "100vh", 
      width: "100%", 
      backgroundColor: "#F6F1E8", // Light, elegant cream background
      color: "#2D2926",           // Deep charcoal for text
      padding: "80px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      
      {/* --- STATIC HEADER SECTION --- */}
      <div style={{ textAlign: "center", maxWidth: "800px", marginBottom: "60px" }}>
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          style={{ color: "#B38B59", letterSpacing: "0.3em", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase" }}
        >
          Manufacturing
        </motion.span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", margin: "10px 0 25px", color: "#1A1A1A" }}>
          World-Class Processing Facility
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666", lineHeight: 1.8, fontSize: "1.1rem" }}>
          Our state-of-the-art facility combines traditional spice wisdom with modern food processing technology, 
          ensuring every grain meets international quality standards.
        </p>
      </div>

      {/* --- ANIMATED FRAME BOX --- */}
      <div style={{ 
        position: "relative", 
        width: "100%", 
        maxWidth: "1000px", // Slightly wider for impact
        aspectRatio: "16/9", 
        borderRadius: "32px", 
        overflow: "hidden",
        backgroundColor: "#E5E5E5", // Placeholder while loading
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.15)"
      }}>
        {/* Fixed the "Wait" issue: We don't use mode="wait" on images to allow cross-fade */}
        <AnimatePresence initial={false}>
          <motion.div
            key={features[index].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            {/* The Image with subtle Ken Burns zoom */}
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: DURATION / 1000, ease: "linear" }}
              style={{ 
                width: "100%", 
                height: "100%", 
                backgroundImage: `url(${features[index].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }} 
            />
            
            {/* Soft Gradient for text legibility inside the frame */}
            <div style={{ 
              position: "absolute", 
              inset: 0, 
              background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)" 
            }} />

            {/* Feature Title (Inside Frame) */}
            <div style={{ 
                position: "absolute", 
                bottom: "40px", 
                left: "50px", 
                display: "flex", 
                alignItems: "center", 
                gap: "20px",
                zIndex: 5
              }}
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "50px" }}
                style={{ height: "2px", background: "#E1AD01" }} 
              />
              <motion.h3 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                style={{ fontSize: "1.8rem", color: "#FFF", fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}
              >
                {features[index].title}
              </motion.h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- PROGRESS INDICATORS (LIGHT THEME) --- */}
      <div style={{ display: "flex", gap: "12px", marginTop: "50px" }}>
        {features.map((_, i) => (
          <div key={i} style={{ 
            width: "60px", 
            height: "4px", 
            backgroundColor: "#E5E1DA", 
            borderRadius: "10px",
            overflow: "hidden",
            cursor: "pointer"
          }}
          onClick={() => setIndex(i)} // Makes them clickable!
          >
            {i === index && (
              <motion.div
                layoutId="activeProgress"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: DURATION / 1000, ease: "linear" }}
                style={{ height: "100%", backgroundColor: "#B38B59" }}
              />
            )}
          </div>
        ))}
      </div>

    </section>
  );
}