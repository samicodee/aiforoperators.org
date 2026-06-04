import { Header } from "@/app/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="program-placeholder">
        <p className="kicker">Page not found</p>
        <h1>That page does not exist.</h1>
        <p>Go back to the homepage to explore the operators program.</p>
        <a className="button primary" href="/">Back to Home</a>
      </main>
    </>
  );
}
