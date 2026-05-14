import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroMolecule from "@/assets/hero-molecule.jpg";
import { SectionEyebrow } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sphinovex — AI-Driven Drug Discovery Outcomes" },
      {
        name: "description",
        content:
          "Accelerating pharmaceutical R&D with precision AI and computational science. Reduce discovery timelines and costs with Sphinovex.",
      },
      { property: "og:title", content: "Sphinovex — Computational Drug Discovery CRO" },
      {
        property: "og:description",
        content: "Reliable, high-precision computational evidence for drug discovery teams.",
      },
    ],
  }),
  component: HomePage,
});

const outcomes = [
  {
    title: "Accelerated Timelines",
    desc: "Compress drug discovery cycles from years to months using high-throughput virtual screening and AI-driven hit identification.",
    icon: "M12 2v20M2 12h20",
  },
  {
    title: "Cost-Effective R&D",
    desc: "Reduce wet-lab expenditures by prioritizing the most promising leads through rigorous in silico validation and physics-based simulations.",
    icon: "M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-5v10",
  },
  {
    title: "Higher Precision",
    desc: "Improve clinical success rates with deep insights into ligand-protein interactions and accurate ADMET property predictions.",
    icon: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  },
];

const capabilities = [
  {
    title: "Target Discovery & Bioinformatics",
    desc: "Unlock novel biological insights with advanced omics pipelines and target validation methods.",
  },
  {
    title: "In Silico Screening & Modeling",
    desc: "Industry-standard molecular docking and dynamics simulations to identify high-quality hits.",
  },
  {
    title: "Lead Optimization & Data Science",
    desc: "AI-augmented optimization and biological data analytics for confident decision-making.",
  },
];

function Icon({ d }: { d: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
    >
      <path d={d} />
    </svg>
  );
}

function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="overflow-hidden bg-background">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionEyebrow>Precision Computational CRO</SectionEyebrow>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl font-bold tracking-tight text-ink text-gradient">
              Bring Therapies to Market Faster
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Sphinovex leverages state-of-the-art AI and molecular modeling to transform
              pharmaceutical R&D from a game of chance into a science of precision.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 transition-all active:scale-95"
              >
                Start a Discovery Program
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold leading-6 text-ink hover:text-primary transition-colors"
              >
                Our Capabilities <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-2xl">
              <img
                src={heroMolecule}
                alt="AI-driven molecular visualization"
                className="h-full w-full object-cover transition hover:scale-105 duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass rounded-2xl border border-border p-6 shadow-xl hidden sm:block">
              <p className="text-sm font-medium text-ink flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Trusted by Global Research Teams
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-10 px-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[11px] font-bold text-primary tracking-widest">
                  WORLD-CLASS SCIENTIFIC TEAM
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES SECTION (The 3 Pillars) */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionEyebrow>Outcomes Matter</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-display font-semibold sm:text-4xl text-ink">
              Computational Science for Competitive Advantage
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {outcomes.map((outcome) => (
              <motion.div
                key={outcome.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6 rounded-2xl bg-primary/10 p-4">
                  <Icon d={outcome.icon} />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-4">{outcome.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{outcome.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES SECTION (Simplified) */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionEyebrow>What We Do</SectionEyebrow>
              <h2 className="mt-4 text-3xl font-display font-semibold sm:text-4xl text-ink">
                A Unified Discovery Pipeline
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We bridge the gap between biological data and pharmaceutical innovation by
                integrating physics, chemistry, and artificial intelligence.
              </p>
              <div className="mt-8">
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
                >
                  View full service list
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid gap-6">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className="group relative flex gap-6 p-6 rounded-2xl border border-border hover:bg-secondary/50 transition-colors"
                >
                  <div className="text-primary font-display text-2xl font-bold opacity-20">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ink">{cap.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center shadow-2xl sm:px-16 sm:py-24">
            <h2 className="mx-auto max-w-2xl text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Ready to Accelerate Your Next Discovery?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join the future of drug discovery. Consult with our PhD-led team today and receive a
              detailed project proposal within 24 hours.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink shadow-sm hover:bg-gray-100 transition-all active:scale-95"
              >
                Contact Expert Team
              </Link>
              <a
                href="mailto:info@sphinovex.com"
                className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors"
              >
                Email Us <span aria-hidden="true">→</span>
              </a>
            </div>
            {/* Background design elements */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#1255FF" />
                  <stop offset="1" stopColor="#55D0FF" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
