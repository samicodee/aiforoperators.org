import { Header } from "@/app/components/Header";

const outcomes = [
  {
    title: "Operations Command",
    body: "Convert daily updates, team inputs, and field data into clean management reports, escalation summaries, and operations dashboards.",
  },
  {
    title: "SOPs & Process Systems",
    body: "Create checklists, shift handovers, vendor follow-ups, meeting notes, and recurring process templates for your team.",
  },
  {
    title: "Team & Hiring Workflows",
    body: "Build AI-assisted systems for hiring pipelines, onboarding, performance reviews, and team accountability tracking.",
  },
];

const workflows = [
  "Daily operations command dashboard",
  "Report drafting and escalation system",
  "SOP and checklist builder",
  "Vendor and procurement follow-up",
  "Hiring pipeline and interview notes",
  "Team briefing and handover templates",
];

const useCases = [
  {
    role: "Operations Managers",
    uses: "Daily reports, team briefings, escalation notes, shift handovers, and KPI summaries drafted faster with AI.",
  },
  {
    role: "Sales Leads",
    uses: "Lead tracking, follow-up sequences, proposal drafts, CRM summaries, and team pipeline reviews.",
  },
  {
    role: "CXOs & Business Heads",
    uses: "Weekly business reviews, board summaries, department updates, and decision memos built from team inputs.",
  },
  {
    role: "HR & Admin Teams",
    uses: "Hiring rubrics, offer letters, onboarding guides, policy drafts, and attendance or payroll communication.",
  },
];

const faqs = [
  {
    q: "Do I need to know coding or AI tools?",
    a: "No. The program is built for operations professionals, not software people. You use AI inside the tools you already work with.",
  },
  {
    q: "What kind of work does this cover?",
    a: "Reporting, SOPs, team coordination, follow-ups, hiring, sales ops, and any recurring documentation or communication work.",
  },
  {
    q: "Can we run this for our whole operations team?",
    a: "Yes. Private company cohorts are available for operations departments, sales teams, HR teams, and cross-functional execution groups.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* Hero */}
        <section className="hero">
          <img
            className="hero-image"
            style={{ opacity: 1 }}
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=84"
            alt="Operations team working through reporting and systems"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-inner">
            <p className="kicker">AI for Operators | India &amp; the World</p>
            <h1>
              AI for the people running the business.
            </h1>
            <p className="hero-copy">
              Practical AI for operations managers, sales leads, CXOs, and execution
              teams who need better reporting, SOPs, delegation, follow-ups, and team
              systems — without becoming software people.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#apply">Apply for Operator Cohort</a>
              <a className="button secondary" href="#outcomes">See Outcomes</a>
            </div>
            <div className="hero-metrics" aria-label="Program highlights">
              <span>No coding</span>
              <span>Ops-focused</span>
              <span>Real workflows</span>
              <span>India first</span>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section id="outcomes" className="section">
          <div className="section-heading wide">
            <p className="kicker">What you leave with</p>
            <h2>AI that improves the work you already do every day.</h2>
            <p>
              Every cohort ends with working AI workflows, templates, and operating
              habits built around your actual reports, SOPs, and team coordination.
            </p>
          </div>
          <div className="outcome-grid">
            {outcomes.map((o, i) => (
              <article key={o.title}>
                <span className="number">{String(i + 1).padStart(2, "0")}</span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Why */}
        <section id="why" className="section intro-section" style={{ paddingTop: 0 }}>
          <div className="section-heading">
            <p className="kicker">The operator problem</p>
            <h2>Most ops teams are buried in manual work that AI can handle.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Operators run the business. They own reporting, SOPs, hiring, follow-ups,
              procurement, team briefings, and daily coordination. Most of this work
              is repetitive, time-consuming, and done manually.
            </p>
            <p>
              AI for Operators shows execution teams how to delegate this recurring
              work to AI — and get the same output in a fraction of the time.
            </p>
            <blockquote>
              If you run the system, AI should run the routine.
            </blockquote>
          </div>
        </section>

        {/* Workflows */}
        <section id="workflows" className="section" style={{ paddingTop: 0 }}>
          <div className="section-heading wide">
            <p className="kicker">Workflows you build</p>
            <h2>Six operating systems for execution teams.</h2>
          </div>
          <div className="workflow-grid">
            {workflows.map((w, i) => (
              <article key={w}>
                <span className="number">{String(i + 1).padStart(2, "0")}</span>
                <h3>{w}</h3>
                <p>Built as a reusable AI-assisted system, not a one-time demo.</p>
              </article>
            ))}
          </div>
        </section>

        {/* Use cases by role */}
        <section className="dark-band">
          <div className="dark-band-inner">
            <div>
              <p className="kicker">Built for ops roles</p>
              <h2>Who this program is for.</h2>
              <p>
                Operations is not one job. This track covers the full range of
                execution roles — from field ops to sales to HR to the C-suite.
              </p>
            </div>
            <div className="use-case-grid" style={{ marginTop: 0 }}>
              {useCases.map((u) => (
                <article key={u.role} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}>
                  <h3 style={{ color: "#fff" }}>{u.role}</h3>
                  <p style={{ color: "rgba(255,255,255,0.68)", marginTop: 10 }}>{u.uses}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="section-heading">
            <p className="kicker">Common questions</p>
            <h2>Built for ops, not for techies.</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((f) => (
              <article key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Apply */}
        <section id="apply" className="apply-section">
          <div className="apply-inner">
            <div className="apply-copy">
              <p className="kicker" style={{ color: "rgba(80,180,220,0.9)" }}>Apply Now</p>
              <h2>Join an operator cohort or bring one to your team.</h2>
              <p>
                Open cohorts in India and private company workshops for operations,
                sales, HR, and execution teams. The first call confirms your role,
                team size, and key workflows to improve.
              </p>
            </div>
            <form className="application-form" action="/api/applications/" method="post">
              <input type="hidden" name="program" value="operators" />
              <input type="hidden" name="source" value="homepage" />
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Phone / WhatsApp
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label>
                Role
                <select name="role" required defaultValue="">
                  <option value="" disabled>Select your role</option>
                  <option value="ops-manager">Operations Manager</option>
                  <option value="sales-lead">Sales Lead / Head of Sales</option>
                  <option value="cxo">CXO / Business Head</option>
                  <option value="hr-admin">HR / Admin</option>
                  <option value="other">Other Operations Role</option>
                </select>
              </label>
              <label>
                Company
                <input name="company" type="text" required />
              </label>
              <label>
                What recurring ops work should AI handle first?
                <textarea name="priority" rows={3} required />
              </label>
              <p className="form-note">
                By submitting, you agree we may contact you on WhatsApp about your cohort.
              </p>
              <button className="button primary" type="submit" style={{ width: "100%" }}>
                Send Application
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span className="wordmark">AI for <span>Operators</span></span>
        <span>Practical AI for operations, reporting, and execution teams.</span>
      </footer>
    </>
  );
}
