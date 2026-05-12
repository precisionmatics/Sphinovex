import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroMolecule from "@/assets/hero-molecule.jpg";
import researchNetwork from "@/assets/research-network.jpg";
import { SectionEyebrow } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sphinovex — AI-Driven Drug Discovery & Computational Science" },
      { name: "description", content: "Accelerating drug discovery through AI, molecular docking, dynamics simulation, virtual screening and bioinformatics." },
      { property: "og:title", content: "Sphinovex — AI-Driven Drug Discovery" },
      { property: "og:description", content: "A computational CRO building the future of pharmaceutical innovation." },
    ],
  }),
  component: HomePage,
});

const services = [
  { title: "Molecular Docking", desc: "Structure-based screening of ligand–protein interactions with industry-grade accuracy.", icon: "M12 2v20M2 12h20" },
  { title: "Molecular Dynamics", desc: "All-atom MD simulations to capture conformational dynamics and binding stability.", icon: "M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-5v10" },
  { title: "Virtual Screening", desc: "High-throughput in silico screening across millions of compound libraries.", icon: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" },
  { title: "Bioinformatics", desc: "Sequence analysis, omics pipelines and statistical genomics for translational research.", icon: "M4 6h16M4 12h10M4 18h16" },
  { title: "Network Pharmacology", desc: "Multi-target interaction mapping for systems-level mechanism discovery.", icon: "M5 12a7 7 0 1114 0 7 7 0 01-14 0zM12 5v14M5 12h14" },
  { title: "AI-Based Drug Discovery", desc: "Generative models, ML scoring and active-learning loops to compress discovery cycles.", icon: "M12 3a9 9 0 109 9M12 3v9l6 3" },
  { title: "Scientific Writing", desc: "Manuscripts, reviews, grant and thesis writing built to the standard of top journals.", icon: "M4 19.5V6a2 2 0 012-2h12v16H6a2 2 0 01-2-2.5z" },
  { title: "Pharmaceutical Data Analysis", desc: "Statistical, ADMET and biological data analytics for confident decision-making.", icon: "M4 19V5m0 14h16M8 15l3-3 3 3 5-6" },
  { title: "Research Consultation", desc: "Hands-on collaboration for academic and industrial computational R&D programs.", icon: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 1116 0" },
];

const features = [
  { title: "AI-driven workflows", desc: "Pipelines orchestrating ML, physics and chemistry across every project." },
  { title: "Scientific accuracy", desc: "Validated protocols benchmarked against experimental and clinical data." },
  { title: "Cost-effective", desc: "In silico-first strategies reduce wet-lab spend without compromising rigor." },
  { title: "Research expertise", desc: "PhD-led team across chemistry, biology, ML and pharmaceutical sciences." },
  { title: "Fast turnaround", desc: "Cloud-scale compute delivering results in days, not months." },
  { title: "Innovation-centered", desc: "Future-focused methods built on the latest peer-reviewed science." },
];

function Icon({ d }: { d: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,oklch(0.94_0.06_220),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1800px] px-8 lg:px-12 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="animate-fade-up"
          >
            <SectionEyebrow>Computational CRO • AI for Life Sciences</SectionEyebrow>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-ink text-balance text-gradient">
              Accelerating Drug Discovery Through AI &amp; Computational Science
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Sphinovex combines artificial intelligence, molecular modeling and
              high-performance computing to advance pharmaceutical research from
              hypothesis to lead candidate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant hover:opacity-90 transition"
              >
                Explore Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-ink hover:bg-secondary transition"
              >
                Contact Us
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["10x", "Faster screening"],
                ["PhD", "Led research"],
                ["24/7", "Cloud compute"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-2xl font-semibold text-gradient">{k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative animate-fade-in"
          >
            <div className="absolute -inset-10 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant">
              <img
                src={heroMolecule}
                alt="3D molecular DNA structure visualization"
                width={1600}
                height={1200}
                className="w-full h-auto animate-float"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block glass rounded-2xl border border-border p-4 shadow-elegant">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Live workflow</p>
              <p className="mt-1 text-sm font-medium text-ink">Docking · MD · ML scoring</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1800px] px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <SectionEyebrow>About Sphinovex</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-ink">
              An innovative CRO at the intersection of AI and biology.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-5 text-muted-foreground"
          >
            <p>
              Sphinovex is a contract research and computational sciences company
              dedicated to redefining how new medicines are discovered. We bring
              together artificial intelligence, structural biology and
              high-performance computing into a single, rigorous research engine.
            </p>
            <p>
              Our vision is a future where every promising target is investigated
              with the speed of software and the certainty of physics. Our
              mission is to give research teams — in academia and industry —
              honest, reproducible and decision-ready computational evidence.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                ["Vision", "AI-powered pharmaceutical innovation, accessible to every research team."],
                ["Mission", "Deliver rigorous, reproducible computational science that moves programs forward."],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{k}</p>
                  <p className="mt-2 text-sm text-ink">{v}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 lg:py-32 bg-secondary/40">
        <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-[1800px] px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <SectionEyebrow>Services</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-ink">
              A full computational pipeline for drug discovery.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From target validation to lead optimization — every step backed by
              modern science, automation and AI.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                className="group relative rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-[0.04] transition" />
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon d={s.icon} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1800px] px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <SectionEyebrow>Why Sphinovex</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-ink">
              Built for research teams that demand precision.
            </h2>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-border"
          >
            {features.map((f, i) => (
              <motion.div key={f.title} variants={itemVariants} className="relative bg-background p-8">
                <span className="font-display text-xs text-primary">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="relative py-24 lg:py-32 bg-ink text-background overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img src={researchNetwork} alt="" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover mix-blend-screen" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="relative mx-auto max-w-[1800px] px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionEyebrow>Research &amp; Innovation</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-background">
              Where computation meets discovery.
            </h2>
            <p className="mt-5 text-background/70 max-w-xl">
              We invest in methods, software and scientific publications that
              advance the frontier of in silico drug development — from
              generative chemistry to systems-level pharmacology.
            </p>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              ["Drug Discovery", "Hit-to-lead, lead optimization, ADMET."],
              ["Computational Biology", "Structural modeling, MD, free energy."],
              ["Pharmaceutical Innovation", "AI-augmented design and screening."],
              ["Advanced Analytics", "Omics, statistics and decision intelligence."],
            ].map(([t, d]) => (
              <motion.div key={t} variants={itemVariants} className="rounded-2xl border border-background/10 bg-background/5 p-5 backdrop-blur">
                <h4 className="font-display text-base font-semibold text-background">{t}</h4>
                <p className="mt-2 text-sm text-background/70">{d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative py-24 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl px-6 text-center"
        >
          <SectionEyebrow>Get in touch</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold text-ink">
            Let's accelerate your next discovery.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Tell us about your target, project or research program — our team
            will reply within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant hover:opacity-90 transition">
              Start a conversation
            </Link>
            <a href="mailto:info@sphinovex.com" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink hover:bg-secondary transition">
              info@sphinovex.com
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
