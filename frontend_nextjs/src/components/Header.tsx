"use client";

import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";

// PUBLIC_INTERFACE
export function Header() {
  /** Accessible, responsive header with mobile menu toggle */
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Primary">
      <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
        <Link href="/" aria-label="InZone Home">
          <span style={{ fontWeight: 800, fontSize: "1.15rem", letterSpacing: ".2px" }}>
            InZone<span style={{ color: "var(--color-primary)" }}>.ae</span>
          </span>
        </Link>
      </div>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      <div className="nav-links" aria-hidden={false}>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/faq">FAQs</Link>
        <Link href="/podcast">Podcast</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/referral">Referral</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="nav-cta">
        <Link href="/contact" className="btn btn-primary" aria-label="Get a quote">
          Get a Quote
        </Link>
      </div>

      {/* Mobile Drawer */}
      <div
        className={clsx("card", open && "open")}
        style={{
          position: "fixed",
          top: "64px",
          right: "1rem",
          left: "1rem",
          padding: open ? "1rem" : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "all .2s ease",
          zIndex: 40,
        }}
        aria-hidden={!open}
      >
        <div style={{ display: "grid", gap: ".75rem" }}>
          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/faq" onClick={() => setOpen(false)}>
            FAQs
          </Link>
          <Link href="/podcast" onClick={() => setOpen(false)}>
            Podcast
          </Link>
          <Link href="/testimonials" onClick={() => setOpen(false)}>
            Testimonials
          </Link>
          <Link href="/referral" onClick={() => setOpen(false)}>
            Referral
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href="/contact"
            className="btn btn-primary"
            aria-label="Get a quote"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
