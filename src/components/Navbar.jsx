import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/LogoTrans2.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Quality", to: "/quality" },
  { label: "About", to: "/about" },
  { label: "B2B Supply", to: "/b2b" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        backgroundColor: scrolled || menuOpen ? "rgba(246,241,232,0.98)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        transition: "all 400ms ease",
        boxShadow: scrolled || menuOpen ? "0 4px 24px rgba(44,26,14,0.06)" : "none",
      }}
    >
      {/* Top Bar */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img src={Logo} alt="Logo" style={{ height: "clamp(2.5rem, 8vw, 3.4rem)", width: "auto" }} />
        </Link>

        {/* Desktop Links */}
        <ul className="navbar-desktop-links" style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} label={label} active={location.pathname === to} scrolled={scrolled} />
            </li>
          ))}
        </ul>

        {/* Persistent Button & Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link
            to="/products"
            className="navbar-cta-button"
            style={{
              textDecoration: "none", padding: "0.5rem 1.2rem", borderRadius: "999px",
              background: "linear-gradient(135deg, #C97D3A 0%, #A85C20 100%)",
              color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: "0.75rem", letterSpacing: "0.05em", boxShadow: "0 4px 20px rgba(201,125,58,0.35)"
            }}
          >
            ORDER NOW
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="navbar-hamburger"
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "0.5rem" }}
          >
            <span style={{ width: "22px", height: "2px", backgroundColor: "#2C1A0E", transition: "0.3s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "" }} />
            <span style={{ width: "22px", height: "2px", backgroundColor: "#2C1A0E", transition: "0.2s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: "22px", height: "2px", backgroundColor: "#2C1A0E", transition: "0.3s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "" }} />
          </button>
        </div>
      </div>

      {/* --- RE-ADDED MOBILE MENU --- */}
      <div
        className="navbar-mobile-menu"
        style={{
          display: "grid",
          gridTemplateRows: menuOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 380ms cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: "#F6F1E8",
          overflow: "hidden"
        }}
      >
        <div style={{ minHeight: 0 }}>
          <ul style={{ listStyle: "none", padding: "1rem 1.5rem 2rem", margin: 0 }}>
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to} style={{ borderBottom: "1px solid rgba(201,125,58,0.1)" }}>
                <Link
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block", padding: "1rem 0", textDecoration: "none",
                    fontFamily: "'Playfair Display', serif", fontWeight: 600,
                    fontSize: "1.2rem", color: location.pathname === to ? "#C97D3A" : "#6B4C2A"
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .navbar-desktop-links { display: none !important; }
        }
        @media (min-width: 768px) {
          .navbar-hamburger { display: none !important; }
          .navbar-mobile-menu { display: none !important; }
          .navbar-cta-button { padding: 0.6rem 1.6rem !important; font-size: 0.82rem !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ to, label, active, scrolled }) {
  const [hovered, setHovered] = useState(false);
  const color = active || hovered ? "#C97D3A" : scrolled ? "#6B4C2A" : "#2C1A0E";

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
        fontSize: "0.88rem", color, transition: "color 250ms ease", position: "relative"
      }}
    >
      {label}
      <span style={{
        position: "absolute", bottom: -4, left: 0, right: 0, height: "1.5px",
        background: "#C97D3A", transform: active || hovered ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 300ms ease"
      }} />
    </Link>
  );
}