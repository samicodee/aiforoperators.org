"use client";
import { useEffect, useState } from "react";

export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${solid ? " is-solid" : ""}`}>
      <a className="brand" href="/" aria-label="AI for Operators home">
        <span className="wordmark">
          AI for <span>Operators</span>
        </span>
        <span className="tagline">OPERATIONS COMMAND.</span>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="/#outcomes">Outcomes</a>
        <a href="/#why">Why</a>
        <a href="/#workflows">Workflows</a>
        <a href="/#apply">Apply</a>
      </nav>
      <a className="header-cta" href="/#apply">Apply Now</a>
    </header>
  );
}
