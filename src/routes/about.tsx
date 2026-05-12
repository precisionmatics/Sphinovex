import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sphinovex" },
      { name: "description", content: "Sphinovex is an AI-driven CRO advancing computational drug discovery, bioinformatics and pharmaceutical innovation." },
      { property: "og:title", content: "About Sphinovex" },
      { property: "og:description", content: "An innovative CRO at the intersection of AI and biology." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative py-24 lg:py-32 bg-mesh">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionEyebrow>About Sphinovex</SectionEyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-6xl font-semibold text-ink leading-tight">
            Engineering the <span className="text-gradient">future of medicine</span> through computation.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We are a contract research and computational sciences company building
            AI-native infrastructure for drug discovery and pharmaceutical R&amp;D.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-8">
          {[
            { t: "Our Vision", d: "A world where every research team — from academia to global pharma — can access AI-powered computational science to bring better medicines to patients faster." },
            { t: "Our Mission", d: "Deliver rigorous, reproducible and decision-ready in silico evidence across the discovery pipeline, from target identification to clinical candidate." },
            { t: "Our Approach", d: "Method-aware, physics-grounded and ML-augmented. Every project is treated as a research program with full transparency and validation." },
            { t: "Our People", d: "PhD-led scientists in computational chemistry, structural biology, machine learning, bioinformatics and pharmaceutical sciences." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant transition">
              <h3 className="font-display text-xl font-semibold text-ink">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">Ready to collaborate?</h2>
          <p className="mt-4 text-muted-foreground">Academic, industry and investor partnerships welcome.</p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant">
            Contact our team
          </Link>
        </div>
      </section>
    </div>
  );
}
