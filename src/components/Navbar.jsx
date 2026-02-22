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
  const [mobileHeight, setMobileHeight] = useState(0);
  const menuRef = useRef(null);
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
    if (menuRef.current) {
      setMobileHeight(menuOpen ? menuRef.current.scrollHeight : 0);
    }
  }, [menuOpen]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? "rgba(246,241,232,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 500ms ease, box-shadow 500ms ease",
        boxShadow: scrolled
          ? "0 1px 0 rgba(201,125,58,0.15), 0 4px 24px rgba(44,26,14,0.06)"
          : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1rem",
          height: "68px",
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
            gap: "0.5rem",
            flexShrink: 0,
          }}
        >
          <img
            src={Logo}
            alt="Nutri Nature Logo"
            style={{
              height: "3.5rem",
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
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="navbar-desktop-links"
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
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,125,58,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(201,125,58,0.35)";
            }}
          >
            ORDER NOW
          </Link>
        </div>

        {/* Hamburger — larger tap target on mobile */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="navbar-hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.6rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "44px",
            minHeight: "44px",
          }}
        >
          {[
            {
              transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              opacity: 1,
            },
            {
              transform: "none",
              opacity: menuOpen ? 0 : 1,
            },
            {
              transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              opacity: 1,
            },
          ].map((style, i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                backgroundColor: "#2C1A0E",
                transition: "transform 350ms ease, opacity 350ms ease",
                transformOrigin: "center",
                ...style,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{
          overflow: "hidden",
          maxHeight: `${mobileHeight}px`,
          transition: "max-height 450ms cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: "#F6F1E8",
          borderTop: menuOpen ? "1px solid rgba(201,125,58,0.15)" : "none",
        }}
        className="navbar-mobile-menu"
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "0.75rem 1.25rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.1rem",
          }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                style={{
                  display: "block",
                  padding: "0.9rem 0",
                  textDecoration: "none",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  letterSpacing: "0.04em",
                  color: location.pathname === to ? "#C97D3A" : "#6B4C2A",
                  borderBottom: "1px solid rgba(201,125,58,0.12)",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C97D3A")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    location.pathname === to ? "#C97D3A" : "#6B4C2A")
                }
              >
                {label}
              </Link>
            </li>
          ))}
          <li style={{ paddingTop: "1rem" }}>
            <Link
              to="/products"
              style={{
                textDecoration: "none",
                display: "block",
                textAlign: "center",
                padding: "0.85rem 2rem",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #C97D3A 0%, #A85C20 100%)",
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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .navbar-desktop-links {
          display: none;
        }
        .navbar-hamburger {
          display: flex;
        }
        .navbar-mobile-menu {
          display: block;
        }

        @media (min-width: 768px) {
          .navbar-desktop-links {
            display: flex;
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