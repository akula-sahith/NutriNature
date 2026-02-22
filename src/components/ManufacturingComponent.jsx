import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const frames = [
  {
    id: 1,
    label: "Manufacturing Excellence",
    title: "World-Class Spice Processing",
    desc: "Where Indian spice heritage meets precision engineering.",
    bgImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80", 
  },
  {
    id: 2,
    label: "Cold-Grinding Tech",
    title: "Advanced Cold-Grinding",
    desc: "Preserving essential oils and aroma through temperature control.",
    bgImage: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    label: "Quality Assurance",
    title: "Every Grain. Measured. Verified.",
    desc: "Automated packaging lines and in-house lab testing for purity.",
    bgImage: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80",
  }
];

export default function ManufacturingLoop() {
  const [index, setIndex] = useState(0);
  const DURATION = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ 
      height: "100vh", 
      width: "100%", 
      position: "relative", 
      backgroundColor: "#121212", 
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      
      {/* 1. SEAMLESS Background Layer (No mode="wait" here) */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${frames[index].bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* 2. Cinematic Gradient Overlay */}
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)", 
        zIndex: 2 
      }} />

      {/* 3. Text Content (Keep mode="wait" here for clean text swaps) */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 2rem", maxWidth: "900px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={frames[index].id}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ 
              color: "#E1AD01", fontSize: "0.8rem", fontWeight: 700, 
              letterSpacing: "0.5em", textTransform: "uppercase", 
              display: "block", marginBottom: "1rem" 
            }}>
              {frames[index].label}
            </span>

            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", color: "#FFFFFF", 
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 1.1, 
              margin: "0 0 1.5rem 0", fontWeight: 700 
            }}>
              {frames[index].title}
            </h2>

            <p style={{ 
              color: "rgba(255,255,255,0.8)", fontSize: "clamp(1rem, 2vw, 1.2rem)", 
              fontFamily: "'DM Sans', sans-serif", maxWidth: "550px", 
              margin: "0 auto", lineHeight: 1.6 
            }}>
              {frames[index].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Visual Progress Bars */}
      <div style={{ position: "absolute", bottom: "60px", display: "flex", gap: "12px", zIndex: 20 }}>
        {frames.map((_, i) => (
          <div key={i} style={{ 
            width: "60px", height: "4px", backgroundColor: "rgba(255,255,255,0.2)", 
            borderRadius: "2px", position: "relative", overflow: "hidden" 
          }}>
            {i === index && (
              <motion.div
                key={`progress-${index}`}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: DURATION / 1000, ease: "linear" }}
                style={{ position: "absolute", inset: 0, backgroundColor: "#E1AD01" }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}