import { motion } from "framer-motion";
import { useState } from "react";

/* ── Variants ── */
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
  hidden: { opacity: 0, y: 34 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: EASE },
  }),
};

/* ── Data ── */
const testimonials = [
  {
    quote:
      "Consistent quality and reliable supply. Nutri Nature has been our go-to spice partner for years.",
    name: "Rajesh Mehta",
    role: "Distributor Partner",
    city: "Hyderabad",
  },
  {
    quote:
      "The purity of their turmeric powder is unmatched. Our customers always come back for more.",
    name: "Priya Nair",
    role: "Retail Store Owner",
    city: "Bangalore",
  },
  {
    quote:
      "Professional team, excellent packaging, and timely deliveries. Highly recommended for B2B.",
    name: "Arjun Khanna",
    role: "HoReCa Partner",
    city: "Mumbai",
  },
];

/* ── Star SVG ── */
function Star({ filled, half, size = 18, style = {} }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill={filled ? "#E1AD01" : "none"}
        stroke="#E1AD01"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Static 5-star display ── */
function StarDisplay({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < count} size={17} />
      ))}
    </div>
  );
}

/* ── Interactive Rating ── */
function RatingWidget() {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [reviewFocused, setReviewFocused] = useState(false);

  const active = hovered || selected;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelected(0);
      setReview("");
    }, 3500);
  };

  const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE }}
      style={{
        background: "#FFFFFF",
        borderRadius: "1.25rem",
        padding: "clamp(1.75rem, 4vw, 2.75rem)",
        boxShadow: "0 8px 40px rgba(44,26,14,0.09), 0 2px 8px rgba(44,26,14,0.05)",
        border: "1px solid rgba(201,125,58,0.1)",
        maxWidth: "540px",
        margin: "0 auto",
      }}
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: "center", padding: "1rem 0" }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(225,173,1,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#E1AD01" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "1.15rem", margin: "0 0 0.4rem" }}>
            Thank you for your feedback!
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#9C806A", fontSize: "0.875rem", margin: 0 }}>
            Your review helps us serve you better.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* Star rating row */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{ display: "flex", gap: "8px", cursor: "pointer" }}
              onMouseLeave={() => setHovered(0)}
            >
              {Array.from({ length: 5 }).map((_, i) => {
                const val = i + 1;
                return (
                  <motion.button
                    key={val}
                    type="button"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setHovered(val)}
                    onClick={() => setSelected(val)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: "2px",
                      cursor: "pointer",
                      lineHeight: 0,
                    }}
                    aria-label={`Rate ${val} out of 5`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                        fill={val <= active ? "#E1AD01" : "none"}
                        stroke={val <= active ? "#E1AD01" : "#C9B99A"}
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        style={{ transition: "fill 0.15s, stroke 0.15s" }}
                      />
                    </svg>
                  </motion.button>
                );
              })}
            </div>

            {/* Rating label */}
            <div style={{ minHeight: "22px" }}>
              {active > 0 && (
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#C97D3A",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {selected
                    ? `You rated us ${selected} out of 5 — ${ratingLabels[selected]}`
                    : `${ratingLabels[active]}`}
                </motion.p>
              )}
            </div>
          </div>

          {/* Textarea */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#6B4C2A",
                letterSpacing: "0.04em",
              }}
            >
              Your Review <span style={{ color: "#A07850", fontWeight: 400 }}>(optional)</span>
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              onFocus={() => setReviewFocused(true)}
              onBlur={() => setReviewFocused(false)}
              rows={4}
              placeholder="Share your experience with NutriNature spices…"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                border: `1.5px solid ${reviewFocused ? "#E1AD01" : "#D9C9B5"}`,
                borderRadius: "8px",
                padding: "0.75rem 1rem",
                fontSize: "0.9rem",
                color: "#2E2A25",
                background: "#FFFAF4",
                width: "100%",
                outline: "none",
                boxShadow: reviewFocused ? "0 0 0 3px rgba(225,173,1,0.12)" : "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                resize: "vertical",
                minHeight: "100px",
              }}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ backgroundColor: selected ? "#3D2416" : "#6B5040" }}
            whileTap={{ scale: selected ? 0.97 : 1 }}
            style={{
              background: selected ? "#5A3E2B" : "#9A8878",
              color: "#FFFFFF",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.88rem",
              letterSpacing: "0.06em",
              border: "none",
              borderRadius: "999px",
              padding: "0.875rem 2rem",
              cursor: selected ? "pointer" : "not-allowed",
              boxShadow: selected ? "0 4px 20px rgba(90,62,43,0.25)" : "none",
              transition: "background 0.2s, box-shadow 0.2s",
              minHeight: "48px",
              alignSelf: "flex-start",
            }}
          >
            Submit Review →
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

/* ══════════════════════════════════════
   Main Component
══════════════════════════════════════ */
export default function Testimonials() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        textarea::placeholder { color: #B8A898; }
      `}</style>

      <section
        style={{ backgroundColor: "#F6F1E8", fontFamily: "'DM Sans', sans-serif" }}
        className="py-24 px-5 md:px-12 lg:px-20 relative overflow-hidden"
      >
        {/* Background blobs */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "min(480px,70vw)", height: "min(480px,70vw)", borderRadius: "50%", opacity: 0.14, background: "radial-gradient(circle, #E8A87C 0%, transparent 70%)", filter: "blur(70px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "min(340px,55vw)", height: "min(340px,55vw)", borderRadius: "50%", opacity: 0.1, background: "radial-gradient(circle, #C97D3A 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── Section Heading ── */}
          <motion.div
            className="text-center max-w-xl mx-auto mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              style={{ display: "inline-block", color: "#E1AD01", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "1rem" }}
            >
              Testimonials
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "clamp(1.9rem, 5vw, 2.9rem)", lineHeight: 1.12, margin: 0 }}
            >
              Trusted by Partners{" "}
              <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Nationwide</span>
            </motion.h2>
          </motion.div>

          {/* ── Testimonial Cards ── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                variants={cardVariants}
                custom={i}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 280, damping: 18 } }}
                style={{
                  background: "#EFE6D8",
                  borderRadius: "1.25rem",
                  padding: "clamp(1.5rem, 3.5vw, 2rem)",
                  boxShadow: "0 4px 28px rgba(44,26,14,0.08), 0 1px 4px rgba(44,26,14,0.04)",
                  border: "1px solid rgba(201,125,58,0.1)",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Stars */}
                <StarDisplay count={5} />

                {/* Large quote mark */}
                <div style={{ position: "relative" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "4rem",
                      color: "rgba(201,125,58,0.18)",
                      lineHeight: 0.8,
                      display: "block",
                      marginBottom: "-0.5rem",
                      userSelect: "none",
                    }}
                  >
                    "
                  </span>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#3D2B1A",
                      fontSize: "clamp(0.925rem, 2vw, 1rem)",
                      lineHeight: 1.78,
                      fontStyle: "italic",
                      margin: 0,
                    }}
                  >
                    {t.quote}
                  </p>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(201,125,58,0.2)" }} />

                {/* Author */}
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "0.975rem", margin: "0 0 2px" }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#8C7B6E", fontSize: "0.8rem", margin: "0 0 2px", fontWeight: 500 }}>
                    {t.role}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#B8A898", fontSize: "0.75rem", margin: 0, display: "flex", alignItems: "center", gap: "5px" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="11" height="11">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {t.city}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* ── Rate Our Spices ── */}
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              style={{ display: "inline-block", color: "#E1AD01", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "0.9rem" }}
            >
              Your Experience
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "clamp(1.7rem, 4vw, 2.4rem)", lineHeight: 1.15, margin: "0 0 0.75rem" }}
            >
              Rate Our{" "}
              <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Spices</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              style={{ color: "#7A5C3C", fontSize: "clamp(0.875rem, 2vw, 1rem)", lineHeight: 1.7, margin: "0 0 2.5rem" }}
            >
              We value your feedback. Share your experience with NutriNature.
            </motion.p>
          </motion.div>

          <RatingWidget />
        </div>
      </section>
    </>
  );
}