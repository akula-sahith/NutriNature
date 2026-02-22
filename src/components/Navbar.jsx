import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/LogoTrans2.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open on mobile
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor:
          scrolled || menuOpen ? "rgba(246,241,232,0.98)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        transition: "background-color 400ms ease, box-shadow 400ms ease",
        boxShadow:
          scrolled || menuOpen
            ? "0 1px 0 rgba(201,125,58,0.15), 0 4px 24px rgba(44,26,14,0.06)"
            : "none",
      }}
    >
      {/* Top bar */}
      {/* Top bar */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem", // Adds breathing room between elements on small screens
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <img
            src={Logo}
            alt="Nutri Nature Logo"
            style={{
              height: "clamp(2.5rem, 8vw, 3.4rem)", // Responsive logo height
              width: "auto",
              userSelect: "none",
              cursor: "pointer",
              filter: scrolled
                ? "drop-shadow(0px 2px 4px rgba(44,26,14,0.12))"
                : "drop-shadow(0px 2px 8px rgba(44,26,14,0.2)) brightness(1.05)",
              transition: "filter 500ms ease",
            }}
          />
        </Link>

        {/* Desktop Links (Hidden on mobile) */}
        <ul
          className="navbar-desktop-links"
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                label={label}
                active={location.pathname === to}
                scrolled={scrolled}
              />
            </li>
          ))}
        </ul>

        {/* Persistent CTA & Hamburger Wrapper */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link
            to="/products"
            className="navbar-cta-button" // Class for media query styling
            style={{
              textDecoration: "none",
              padding: "0.5rem 1.2rem", // Slightly tighter for mobile
              borderRadius: "999px",
              background: "linear-gradient(135deg, #C97D3A 0%, #A85C20 100%)",
              color: "#FFFFFF",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem", // Smaller for mobile
              letterSpacing: "0.05em",
              boxShadow: "0 4px 20px rgba(201,125,58,0.35)",
              textAlign: "center",
              whiteSpace: "nowrap",
              transition: "transform 200ms ease",
            }}
          >
            ORDER NOW
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="navbar-hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "40px",
              minHeight: "40px",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: "#2C1A0E",
                transition: "transform 350ms ease",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: "#2C1A0E",
                transition: "opacity 250ms ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: "#2C1A0E",
                transition: "transform 350ms ease",
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

  /* Mobile Defaults (Small Screens) */
  .navbar-desktop-links { 
    display: none !important; 
  }
  .navbar-hamburger { 
    display: flex !important; 
  }
  .navbar-mobile-menu { 
    display: grid; 
  }

  /* Desktop Styles (768px and up) */
  @media (min-width: 768px) {
    .navbar-desktop-links { 
      display: flex !important; 
    }
    .navbar-hamburger { 
      display: none !important; 
    }
    .navbar-mobile-menu { 
      display: none !important; 
    }
  }
`}</style>
    </nav>
  );
}

function NavLink({ to, label, active, scrolled }) {
  const [hovered, setHovered] = useState(false);
  const color = active
    ? "#C97D3A"
    : hovered
      ? "#C97D3A"
      : scrolled
        ? "#6B4C2A"
        : "#2C1A0E";

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: "none",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500,
        fontSize: "0.88rem",
        letterSpacing: "0.06em",
        color,
        transition: "color 250ms ease",
        position: "relative",
        paddingBottom: "4px",
      }}
    >
      {label}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1.5px",
          borderRadius: "999px",
          background: "linear-gradient(90deg, #C97D3A, #A85C20)",
          transform: active || hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 300ms ease",
        }}
      />
    </Link>
  );
}
