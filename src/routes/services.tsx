import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/Section";
import { CheckCircle2, FlaskConical, Target, Cpu, LineChart, FileText } from "lucide-react";
import { useRef, useEffect } from "react";
import backgroundVideo from "@/assets/web-background.mov";
import inSilicoVideo from "@/assets/in-silico-v2.mov";
import heroMolecule from "@/assets/hero-molecule.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Scientific Services — Sphinovex" },
      {
        name: "description",
        content:
          "Explore our comprehensive computational drug discovery services, from target validation to lead optimization.",
      },
    ],
  }),
  component: ServicesPage,
});

const processSteps = [
  {
    title: "Consultation & Scoping",
    desc: "We begin by understanding your specific biological target, chemical space, and project goals to design a bespoke computational workflow.",
    icon: Target,
  },
  {
    title: "Computational Design",
    desc: "Our PhD-led team selects the optimal algorithms, force fields, and ML models to ensure high-fidelity simulations and accurate results.",
    icon: Cpu,
  },
  {
    title: "Execution & Validation",
    desc: "Workflows are executed on our high-performance cloud infrastructure, with continuous internal validation against known experimental benchmarks.",
    icon: FlaskConical,
  },
  {
    title: "Deliverables & Strategy",
    desc: "We provide decision-ready evidence, detailed technical reports, and strategic guidance to move your project to the next discovery milestone.",
    icon: LineChart,
  },
];

const serviceSuites = [
  {
    title: "Target Discovery & Validation",
    subtitle: "Unlock biological insights with data-driven evidence.",
    desc: "We utilize multi-omics data and network-based methods to identify and validate high-confidence drug targets before you start your screening programs.",
    capabilities: [
      "Custom NGS & Omics Pipelines",
      "Network Pharmacology Mapping",
      "Pathway Enrichment Analysis",
      "Structural Biology Insight",
    ],
    deliverables: "Ranked target lists, biological mechanism reports, and validation data.",
    imageColor: "bg-blue-500/10",
    videoSrc: backgroundVideo,
  },
  {
    title: "In Silico Screening & AI Modeling",
    subtitle: "Find high-quality hits in massive chemical spaces.",
    desc: "By combining high-throughput virtual screening with generative AI scoring, we identify promising lead candidates with greater speed and precision than traditional methods.",
    capabilities: [
      "Protein-Ligand Docking",
      "Large-Scale Library Screening",
      "Generative De Novo Design",
      "AI/ML Property Prediction",
    ],
    deliverables: "Hit-to-lead candidates, binding mode analysis, and ADMET predictions.",
    imageColor: "bg-purple-500/10",
    videoSrc: inSilicoVideo,
  },
  {
    title: "Lead Optimization & Analytics",
    subtitle: "Refine and validate for clinical readiness.",
    desc: "Our advanced MD simulations and statistical modeling provide the deep insights needed to optimize potency, selectivity, and safety profiles.",
    capabilities: [
      "Molecular Dynamics (MD)",
      "Binding Free Energy (FEP+)",
      "Pharmacometric Data Analysis",
      "Scientific Manuscript Prep",
    ],
    deliverables: "Optimized lead profiles, stability data, and publication-ready reports.",
    imageColor: "bg-emerald-500/10",
    videoSrc: backgroundVideo,
  },
];

function VideoAsset({ src, index }: { src: string; index: number }) {
  return (
    <video
      key={`${src}-${index}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={heroMolecule}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={src} type="video/mp4" />
      <source src={src} type="video/quicktime" />
    </video>
  );
}

function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-background min-h-screen">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionEyebrow>Comprehensive Capabilities</SectionEyebrow>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl font-bold tracking-tight text-ink">
              Scientific Services
            </h1>
            <p className="mt-8 mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Sphinovex provides end-to-end computational expertise, bridging the gap between
              massive data sets and clinical success. Our services are built on rigorous science and
              high-performance engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOW WE WORK (PROCESS) */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionEyebrow>Engagement Model</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-display font-semibold text-ink">
              How We Work With You
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {processSteps.map((step, i) => (
              <motion.div key={step.title} variants={itemVariants} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-px bg-border -z-0" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-6 h-20 w-20 flex items-center justify-center rounded-2xl bg-background border border-border shadow-sm group-hover:shadow-md transition-shadow">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed px-2">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DETAILED SERVICE SUITES */}
      <section className="py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {serviceSuites.map((suite, idx) => (
              <motion.div
                key={suite.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 space-y-8">
                  <div>
                    <span className="text-sm font-bold text-primary tracking-widest uppercase">
                      Suite 0{idx + 1}
                    </span>
                    <h2 className="mt-4 text-4xl lg:text-5xl font-display font-bold text-ink">
                      {suite.title}
                    </h2>
                    <p className="mt-2 text-xl font-medium text-primary/80 italic">
                      {suite.subtitle}
                    </p>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{suite.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {suite.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm font-medium text-ink">{cap}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="text-sm font-bold uppercase tracking-wider text-ink">
                        Key Deliverables
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{suite.deliverables}</p>
                  </div>
                </div>
                <div
                  className="flex-1 w-full aspect-square rounded-[2rem] border border-border shadow-elegant overflow-hidden relative"
                >
                  <VideoAsset src={suite.videoSrc} index={idx} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-ink text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">
            Start Your Discovery Journey
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Ready to integrate PhD-led computational science into your R&D program? Request a
            bespoke workflow design and proposal today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-12 py-5 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-95 shadow-glow"
            >
              Inquire Now
            </Link>
            <Link
              to="/"
              className="px-12 py-5 rounded-full border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
