import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const infoCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.61a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Phone",
    detail: "+91 91824 84754",
    sub: "Mon–Sat, 9am – 6pm IST",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: "Email",
    detail: "info@nutrinature.in",
    sub: "We reply within 24 hours",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: "WhatsApp",
    detail: "Chat with us",
    sub: "Quick & convenient support",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Location",
    detail: "India",
    sub: "Serving across the nation",
  },
];

const inputBase = {
  fontFamily: "'DM Sans', sans-serif",
  border: "1.5px solid #D9C9B5",
  borderRadius: "8px",
  padding: "0.75rem 1rem",
  fontSize: "0.9rem",
  color: "#2E2A25",
  background: "#FFFAF4",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

function InputField({ label, required, type = "text", placeholder, name, value, onChange, onFocus, onBlur, focused }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#6B4C2A", letterSpacing: "0.04em" }}>
        {label}{required && <span style={{ color: "#C97D3A", marginLeft: "2px" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        style={{
          ...inputBase,
          borderColor: focused ? "#E1AD01" : "#D9C9B5",
          boxShadow: focused ? "0 0 0 3px rgba(225,173,1,0.12)" : "none",
        }}
      />
    </div>
  );
}

export default function Contact() {
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        textarea { resize: vertical; }
        input::placeholder, textarea::placeholder { color: #B8A898; }
      `}</style>

      {/* ── SECTION 1 – Header ── */}
      <section style={{ backgroundColor: "#F6F1E8", fontFamily: "'DM Sans', sans-serif" }} className="pt-28 pb-16 px-5 md:px-12">
        <motion.div
          className="max-w-2xl mx-auto text-center"
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
            Reach Out
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#2E2A25",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 6vw, 3.5rem)",
              lineHeight: 1.1,
              margin: "0 0 1.25rem",
            }}
          >
            Contact{" "}
            <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Us</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            style={{
              color: "#7A5C3C",
              fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            We'd love to hear from you. Whether it's a business enquiry or product question, get in touch today.
          </motion.p>
        </motion.div>
      </section>

      {/* Decorative divider */}
      <div style={{ background: "#F6F1E8", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 Q720 32 1440 0 L1440 32 L0 32 Z" fill="#FFF8ED" />
        </svg>
      </div>

      {/* ── SECTION 2 – Content Grid ── */}
      <section style={{ backgroundColor: "#FFF8ED", fontFamily: "'DM Sans', sans-serif" }} className="py-16 px-5 md:px-12 lg:px-20 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* LEFT – Info Cards */}
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeLeft}
                custom={i}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 18 } }}
                style={{
                  background: "#EFE6D8",
                  borderRadius: "1rem",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  boxShadow: "0 2px 16px rgba(44,26,14,0.07)",
                  border: "1px solid rgba(201,125,58,0.1)",
                  cursor: "default",
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    borderRadius: "50%",
                    background: "rgba(176,42,31,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B02A1F",
                  }}
                >
                  {card.icon}
                </div>

                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "1rem", margin: "0 0 2px" }}>
                    {card.title}
                  </p>
                  <p style={{ color: "#3D2B1A", fontWeight: 600, fontSize: "0.9rem", margin: "0 0 2px" }}>
                    {card.detail}
                  </p>
                  <p style={{ color: "#9C806A", fontSize: "0.78rem", margin: 0 }}>
                    {card.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Decorative note */}
            <motion.div
              variants={fadeLeft}
              custom={4}
              style={{
                background: "linear-gradient(135deg, rgba(201,125,58,0.1) 0%, rgba(225,173,1,0.07) 100%)",
                borderRadius: "1rem",
                padding: "1.25rem 1.5rem",
                border: "1px dashed rgba(201,125,58,0.3)",
                textAlign: "center",
              }}
            >
              <p style={{ fontFamily: "'Playfair Display', serif", color: "#C97D3A", fontWeight: 700, fontSize: "1rem", margin: "0 0 4px", fontStyle: "italic" }}>
                "Pure from farm to jar."
              </p>
              <p style={{ color: "#9C806A", fontSize: "0.8rem", margin: 0 }}>
                We typically respond within one business day.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT – Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeRight}
            style={{
              background: "#FFFFFF",
              borderRadius: "1.25rem",
              boxShadow: "0 8px 40px rgba(44,26,14,0.1), 0 2px 8px rgba(44,26,14,0.05)",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              border: "1px solid rgba(201,125,58,0.08)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2E2A25",
                fontWeight: 700,
                fontSize: "1.5rem",
                margin: "0 0 0.375rem",
              }}
            >
              Send a Message
            </h2>
            <p style={{ color: "#9C806A", fontSize: "0.85rem", margin: "0 0 1.75rem" }}>
              Fill in the form below and we'll get back to you shortly.
            </p>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: "rgba(225,173,1,0.12)",
                  border: "1px solid rgba(225,173,1,0.35)",
                  borderRadius: "8px",
                  padding: "0.875rem 1rem",
                  marginBottom: "1.5rem",
                  color: "#7A5C00",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>✓</span> Thank you! Your message has been sent.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {/* 2-col grid for first 4 fields */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.1rem",
                }}
              >
                <InputField
                  label="Your Name" required name="name" placeholder="Riya Sharma"
                  value={form.name} onChange={handleChange}
                  focused={focused === "name"} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                />
                <InputField
                  label="Email Address" required type="email" name="email" placeholder="you@email.com"
                  value={form.email} onChange={handleChange}
                  focused={focused === "email"} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                />
                <InputField
                  label="Phone Number" type="tel" name="phone" placeholder="+91 98765 43210"
                  value={form.phone} onChange={handleChange}
                  focused={focused === "phone"} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                />
                <InputField
                  label="Subject" name="subject" placeholder="Product enquiry"
                  value={form.subject} onChange={handleChange}
                  focused={focused === "subject"} onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
                />
              </div>

              {/* Message – full width */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#6B4C2A", letterSpacing: "0.04em" }}>
                  Your Message<span style={{ color: "#C97D3A", marginLeft: "2px" }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  placeholder="Tell us how we can help you…"
                  required
                  style={{
                    ...inputBase,
                    borderColor: focused === "message" ? "#E1AD01" : "#D9C9B5",
                    boxShadow: focused === "message" ? "0 0 0 3px rgba(225,173,1,0.12)" : "none",
                    minHeight: "120px",
                  }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ backgroundColor: "#3D2416" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#5A3E2B",
                  color: "#FFFFFF",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.06em",
                  border: "none",
                  borderRadius: "999px",
                  padding: "0.9rem 2.25rem",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  marginTop: "0.25rem",
                  boxShadow: "0 4px 20px rgba(90,62,43,0.25)",
                  transition: "background 0.2s",
                  minHeight: "48px",
                }}
              >
                Send Message →
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
}