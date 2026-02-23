import Logo from "../assets/LogoTrans2.png";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Quality & Processing", href: "/quality" },
    { label: "B2B Supply", href: "/b2b" },
    { label: "Contact Us", href: "/contact" },
  ];

  const products = [
    { label: "Premium Chilli Powder", href: "/products" },
    { label: "Pure Turmeric Powder", href: "/products" },
    { label: "Fresh Coriander Powder", href: "/products" },
    { label: "Bulk & Private Label", href: "/b2b" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        
        .footer-link {
          color: #A8998A;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.3s ease;
          line-height: 1.6; /* Improved vertical alignment */
        }
        .footer-link:hover { color: #E1AD01; }
        
        .footer-heading {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #E1AD01;
          margin: 0 0 1.5rem; /* Standardized spacing */
        }
        
        .whatsapp-link {
          color: #A8998A;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          text-decoration: none;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .whatsapp-link:hover { color: #E1AD01; }
      `}</style>

      <footer
        style={{
          background: "linear-gradient(to bottom, #1E1B18, #151310)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* ── Main Grid: Using 12 columns for precise alignment ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Column 1: Brand (4/12 width) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Logo Container */}
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: "8px",
                  height: "60px",
                  width: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(225,173,1,0.1)",
                  position: "relative", // Needed for absolute child
                }}
              >
                <img
                  src={Logo}
                  alt="Logo"
                  style={{
                    width: "200px",      // Larger than container
                    height: "auto",
                    maxWidth: "none",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)", // Perfect center bleed
                    zIndex: 10,
                  }}
                />
              </div>

              <p
                style={{
                  color: "#A8998A",
                  fontSize: "0.875rem",
                  lineHeight: 1.8,
                  margin: 0,
                  maxWidth: "280px",
                }}
              >
                Nutri Nature Foods Private Limited — delivering 100% pure and
                natural spices to homes and businesses across India.
              </p>

              {/* Trust Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["FSSAI", "ISO Ready", "Lab Tested"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(225,173,1,0.07)",
                      border: "1px solid rgba(225,173,1,0.18)",
                      color: "rgba(225,173,1,0.75)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      textTransform: "uppercase",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links (2/12 width) */}
            <nav className="lg:col-span-2">
              <p className="footer-heading">Quick Links</p>
              <ul className="flex flex-col gap-3 m-0 p-0 list-none">
                {quickLinks.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(225,173,1,0.35)" }} />
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 3: Products (3/12 width) */}
            <nav className="lg:col-span-3">
              <p className="footer-heading">Our Products</p>
              <ul className="flex flex-col gap-3 m-0 p-0 list-none">
                {products.map((product) => (
                  <li key={product.label} className="flex items-center gap-2">
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(225,173,1,0.35)" }} />
                    <a href={product.href} className="footer-link">{product.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 4: Contact (3/12 width) */}
            <address className="lg:col-span-3 not-italic">
              <p className="footer-heading">Contact Us</p>
              <div className="flex flex-col gap-5">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <span style={{ color: "rgba(225,173,1,0.65)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.61a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <p style={{ color: "#6E6058", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", margin: "0 0 4px" }}>Phone</p>
                    <a href="tel:+919182484754" className="footer-link">+91 91824 84754</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <span style={{ color: "rgba(225,173,1,0.65)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div>
                    <p style={{ color: "#6E6058", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", margin: "0 0 4px" }}>Email</p>
                    <a href="mailto:info@nutrinature.in" className="footer-link">info@nutrinature.in</a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <span style={{ color: "rgba(225,173,1,0.65)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p style={{ color: "#6E6058", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", margin: "0 0 4px" }}>Location</p>
                    <p className="footer-link" style={{ margin: 0, cursor: "default" }}>Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </address>
          </div>

          {/* ── Bottom Bar ── */}
          <div
            style={{
              borderTop: "1px solid #2A2622",
              marginTop: "4rem",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p style={{ color: "#5A5048", fontSize: "0.78rem", margin: 0 }}>
              © {new Date().getFullYear()} Nutri Nature Foods Private Limited. All rights reserved.
            </p>

            <a
              href="https://wa.me/919182484754"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}