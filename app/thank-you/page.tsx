import { Header } from "@/app/components/Header";

export default function ThankYou() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", display: "grid", alignContent: "center", padding: "120px 18px 64px", background: "var(--charcoal)", color: "#fff" }}>
        <div style={{ width: "min(760px, 100%)", margin: "0 auto" }}>
          <p className="kicker" style={{ color: "rgba(80,180,220,0.9)" }}>Application received</p>
          <h1 style={{ marginTop: 18, fontSize: "clamp(2.4rem, 6vw, 4.8rem)", lineHeight: 0.97, color: "#fff" }}>
            We&apos;ll reach out on WhatsApp.
          </h1>
          <p style={{ marginTop: 22, fontSize: 20, color: "rgba(255,255,255,0.72)", maxWidth: 600 }}>
            Your operators cohort application has been received. We&apos;ll follow up to confirm your role, team size, and the workflows you want to fix first.
          </p>
          <a className="button primary" href="/" style={{ marginTop: 36, width: "max-content" }}>
            Back to Home
          </a>
        </div>
      </main>
    </>
  );
}
