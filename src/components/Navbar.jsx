import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/LogoTrans.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "B2B", to: "/b2b" },
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
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
              height: "3.4rem",
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

        {/* Desktop Links */}
        <ul
          className="navbar-desktop-links"
          style={{
            display: "flex",
            gap: "2.5rem",
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

        {/* Desktop CTA */}
        <div className="navbar-desktop-links">
          <Link
            to="/products"
            style={{
              textDecoration: "none",
              padding: "0.6rem 1.6rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #C97D3A 0%, #A85C20 100%)",
              color: "#FFFFFF",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.82rem",
              letterSpacing: "0.08em",
              boxShadow: "0 4px 20px rgba(201,125,58,0.35)",
              display: "inline-block",
              transition: "transform 200ms ease, box-shadow 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(201,125,58,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(201,125,58,0.35)";
            }}
          >
            ORDER NOW
          </Link>
        </div>

        {/* Hamburger — 44px tap target */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="navbar-hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "44px",
            minHeight: "44px",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              borderRadius: "2px",
              backgroundColor: "#2C1A0E",
              transition: "transform 350ms ease",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              borderRadius: "2px",
              backgroundColor: "#2C1A0E",
              transition: "opacity 250ms ease, transform 250ms ease",
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              borderRadius: "2px",
              backgroundColor: "#2C1A0E",
              transition: "transform 350ms ease",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/*
        Mobile Menu — CSS grid row trick:
        gridTemplateRows: "0fr" → "1fr" animates height without JS measurement.
        The inner div must have overflow:hidden and no padding/border.
      */}
      <div
        className="navbar-mobile-menu"
        style={{
          display: "grid",
          gridTemplateRows: menuOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 380ms cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: "#F6F1E8",
          borderTop: "1px solid rgba(201,125,58,0.1)",
        }}
      >
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "0.25rem 1.25rem 1.5rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.9rem 0",
                    textDecoration: "none",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    letterSpacing: "0.04em",
                    color: location.pathname === to ? "#C97D3A" : "#6B4C2A",
                    borderBottom: "1px solid rgba(201,125,58,0.1)",
                    transition: "color 200ms",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li style={{ paddingTop: "1.25rem" }}>
              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                  padding: "0.9rem 2rem",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg, #C97D3A 0%, #A85C20 100%)",
                  color: "#FFFFFF",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  letterSpacing: "0.08em",
                  boxShadow: "0 4px 20px rgba(201,125,58,0.35)",
                }}
              >
                Order Now
              </Link>
            </li>
          </ul>
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
