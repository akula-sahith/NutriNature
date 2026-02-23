import { motion } from "framer-motion";
import { useState } from "react";

/* ── Shared animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeUpCard = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Input base style ── */
const inputBase = (focused) => ({
  fontFamily: "'DM Sans', sans-serif",
  border: `1.5px solid ${focused ? "#E1AD01" : "#D9C9B5"}`,
  borderRadius: "8px",
  padding: "0.75rem 1rem",
  fontSize: "0.9rem",
  color: "#2E2A25",
  background: "#FFFAF4",
  width: "100%",
  outline: "none",
  boxShadow: focused ? "0 0 0 3px rgba(225,173,1,0.12)" : "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
});

function Field({ label, required, children }) {
  return (
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
        {label}
        {required && <span style={{ color: "#C97D3A", marginLeft: "2px" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const solutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "HoReCa Supply",
    description: "Reliable bulk supply to hotels, restaurants, caterers, and institutional kitchens across India.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Private Labeling",
    description: "Launch your own spice brand with our manufacturing expertise, custom blends, and design support.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Export Capability",
    description: "Products meet international food safety standards. Export-ready operations with compliance documentation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Custom Packaging",
    description: "From 50g retail pouches to 25kg bulk bags — we tailor packaging to your channel and market.",
  },
];

export default function B2B() {
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    product: "", quantity: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: "", company: "", email: "", phone: "", product: "", quantity: "", message: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        input::placeholder, textarea::placeholder, select { color: #B8A898; }
        textarea { resize: vertical; }
        select option { color: #2E2A25; }
      `}</style>

      {/* ── SECTION 1: HERO (Updated Background & Text) ── */}
      <section
        style={{ backgroundColor: "#F6F1E8", fontFamily: "'DM Sans', sans-serif" }}
        className="py-24 px-5 md:px-12 relative overflow-hidden"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(700px, 90vw)",
            height: "min(700px, 90vw)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(225,173,1,0.08) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          className="relative z-10 max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span variants={fadeUp} custom={0} style={{ display: "inline-block", color: "#C97D3A", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "1.1rem" }}>
            For Business
          </motion.span>

          <motion.h2 variants={fadeUp} custom={1} style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "clamp(2rem, 5.5vw, 3.2rem)", lineHeight: 1.12, margin: "0 0 0.5rem" }}>
            B2B & <span style={{ color: "#E1AD01" }}>Bulk Supply</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "80px", height: "2.5px", background: "linear-gradient(90deg, #E1AD01, #C97D3A)", borderRadius: "999px", margin: "1rem auto 1.5rem", transformOrigin: "left center" }}
          />

          <motion.p variants={fadeUp} custom={2} style={{ color: "#5C544D", fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)", lineHeight: 1.8, margin: "0 0 2.5rem" }}>
            Partner with NutriNature for reliable, quality-assured bulk spice supply tailored to your business needs.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a href="#enquiry" whileHover={{ backgroundColor: "#3D2416" }} whileTap={{ scale: 0.97 }} style={{ background: "#5A3E2B", color: "#F6F1E8", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.05em", borderRadius: "999px", padding: "0.875rem 2rem", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", textDecoration: "none", display: "flex", alignItems: "center" }}>
              Submit Enquiry →
            </motion.a>
            <motion.a href="tel:+919182484754" whileHover={{ borderColor: "#E1AD01", color: "#E1AD01" }} style={{ background: "transparent", color: "#5A3E2B", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.88rem", border: "1.5px solid rgba(90,62,43,0.25)", borderRadius: "999px", padding: "0.875rem 2rem", cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center" }}>
              Call Us
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SECTION 2: SOLUTIONS ── */}
      <section
        style={{ backgroundColor: "#FFF8ED", fontFamily: "'DM Sans', sans-serif" }}
        className="py-24 px-5 md:px-12 lg:px-20"
      >
        <motion.div
          className="text-center max-w-xl mx-auto"
          style={{ marginBottom: "3rem" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp} custom={0} style={{ display: "inline-block", color: "#E1AD01", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "0.9rem" }}>
            What We Offer
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "clamp(1.8rem, 4.5vw, 2.75rem)", lineHeight: 1.15, margin: 0 }}>
            Business <span style={{ color: "#C97D3A", fontStyle: "italic" }}>Solutions</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUpCard}
              custom={i}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 18 } }}
              style={{ background: "#FFFFFF", borderRadius: "1.25rem", padding: "2rem", boxShadow: "0 4px 28px rgba(44,26,14,0.08)", border: "1px solid rgba(201,125,58,0.09)" }}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#EFE6D8", display: "flex", alignItems: "center", justifyContent: "center", color: "#B02A1F", marginBottom: "1.25rem" }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "1.15rem", margin: "0 0 0.6rem" }}>{s.title}</h3>
              <p style={{ color: "#8C7B6E", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── SECTION 3: ENQUIRY FORM ── */}
      <section id="enquiry" style={{ backgroundColor: "#F6F1E8", fontFamily: "'DM Sans', sans-serif" }} className="py-24 px-5 md:px-12 lg:px-20">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }} style={{ background: "#FFFFFF", borderRadius: "1.25rem", padding: "clamp(1.75rem, 5vw, 2.75rem)", border: "1px solid rgba(201,125,58,0.08)", boxShadow: "0 8px 48px rgba(44,26,14,0.1)" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#2E2A25", fontWeight: 700, fontSize: "1.8rem", margin: "0 0 0.5rem" }}>Partner With Us</h2>
          <p style={{ color: "#9C806A", fontSize: "0.9rem", margin: "0 0 2rem" }}>Fill in the details below and our business team will reach out shortly.</p>

          {submitted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ background: "rgba(225,173,1,0.1)", border: "1px solid #E1AD01", borderRadius: "8px", padding: "1rem", marginBottom: "1.5rem", color: "#7A5C00", fontWeight: 600 }}>
              ✓ Thank you! We'll be in touch soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem" }}>
              <Field label="Your Name" required><input name="name" type="text" value={form.name} onChange={handleChange} required onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={inputBase(focused === "name")} /></Field>
              <Field label="Company Name"><input name="company" type="text" value={form.company} onChange={handleChange} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} style={inputBase(focused === "company")} /></Field>
              <Field label="Email Address" required><input name="email" type="email" value={form.email} onChange={handleChange} required onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={inputBase(focused === "email")} /></Field>
              <Field label="Phone Number" required><input name="phone" type="tel" value={form.phone} onChange={handleChange} required onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={inputBase(focused === "phone")} /></Field>
              <Field label="Product Interest">
                <select name="product" value={form.product} onChange={handleChange} onFocus={() => setFocused("product")} onBlur={() => setFocused(null)} style={{ ...inputBase(focused === "product"), appearance: "none" }}>
                  <option value="" disabled>Select a product</option>
                  <option value="Chilli">Chilli Powder</option>
                  <option value="Turmeric">Turmeric Powder</option>
                  <option value="Coriander">Coriander Powder</option>
                  <option value="All">All Products</option>
                </select>
              </Field>
              <Field label="Estimated Quantity"><input name="quantity" type="text" placeholder="e.g. 500 kg/month" value={form.quantity} onChange={handleChange} onFocus={() => setFocused("quantity")} onBlur={() => setFocused(null)} style={inputBase(focused === "quantity")} /></Field>
            </div>
            <Field label="Message"><textarea name="message" rows={4} value={form.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} style={inputBase(focused === "message")} /></Field>
            <motion.button type="submit" whileHover={{ backgroundColor: "#3D2416" }} style={{ background: "#5A3E2B", color: "#FFF", fontWeight: 700, border: "none", borderRadius: "999px", padding: "1rem 2.5rem", cursor: "pointer" }}>
              Submit Enquiry →
            </motion.button>
          </form>
        </motion.div>
      </section>
    </>
  );
}