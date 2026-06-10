import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoWhite from "../../imports/Expert_Designer_Logo-01.png";
import logoDark from "../../imports/Expert_Designer_Logo-02.png";

const navLinks = ["Work", "Thinking", "About", "Contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Hero is now dark — logo starts white, switches to dark when scrolled past hero
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      // Estimate hero height ~ 100vh; switch logo colour around 80%
      setPastHero(y > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLight = pastHero; // true = nav sits on cream section

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6vw",
          height: "72px",
          background: scrolled
            ? onLight
              ? "rgba(248,245,239,0.96)"
              : "rgba(17,17,17,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          transition: "background 0.45s ease, backdrop-filter 0.45s ease",
          borderBottom: scrolled
            ? onLight
              ? "1px solid rgba(17,17,17,0.07)"
              : "1px solid rgba(248,245,239,0.08)"
            : "1px solid transparent",
        }}
      >
        {/* Logo — switches between white and dark */}
        <a href="#" style={{ display: "flex", alignItems: "center", height: "38px" }}>
          <motion.img
            key={onLight ? "dark" : "white"}
            src={onLight ? logoDark : logoWhite}
            alt="Expert Designers"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            style={{
              height: "34px",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                color: onLight ? "#111111" : "#F8F5EF",
                textDecoration: "none",
                textTransform: "uppercase",
                opacity: 0.5,
                transition: "opacity 0.2s ease, color 0.35s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
            >
              {link}
            </a>
          ))}

          <a
            href="https://wa.me/917060258437"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              color: onLight ? "#F8F5EF" : "#111111",
              background: onLight ? "#111111" : "#F8F5EF",
              textDecoration: "none",
              textTransform: "uppercase",
              padding: "10px 22px",
              transition: "background 0.25s ease, color 0.25s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FF5A1F";
              e.currentTarget.style.color = "#F8F5EF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = onLight ? "#111111" : "#F8F5EF";
              e.currentTarget.style.color = onLight ? "#F8F5EF" : "#111111";
            }}
          >
            Let's Talk →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col justify-center items-end gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: i === 1 ? "16px" : "24px",
                height: "1.5px",
                background: onLight ? "#111111" : "#F8F5EF",
                opacity: i === 1 && menuOpen ? 0 : 1,
                transform:
                  i === 0 && menuOpen
                    ? "rotate(45deg) translateY(5px)"
                    : i === 2 && menuOpen
                    ? "rotate(-45deg) translateY(-5px)"
                    : "none",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "#111111",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "0 8vw",
            }}
          >
            {/* Logo in mobile menu */}
            <img
              src={logoWhite}
              alt="Expert Designers"
              style={{
                position: "absolute",
                top: "19px",
                left: "6vw",
                height: "34px",
                width: "auto",
              }}
            />

            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontSize: "clamp(40px, 10vw, 72px)",
                  fontWeight: 900,
                  letterSpacing: "-0.01em",
                  color: "#F8F5EF",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  marginBottom: "8px",
                  display: "block",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF5A1F")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#F8F5EF")}
              >
                {link}
              </motion.a>
            ))}

            <motion.a
              href="https://wa.me/917060258437"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "36px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "#FF5A1F",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Let's Talk →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
