import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Scientific Services — Sphinovex" },
      { name: "description", content: "Advanced computational drug discovery and modeling services." },
    ],
  }),
  component: ServicesPage,
});

const pillars = [
  {
    category: "Discovery Engine",
    services: [
      { t: "Molecular Docking", d: "High-accuracy protein–ligand docking with consensus scoring and rigorous pose validation.", specs: ["Binding Site Analysis", "Protocol Optimization"] },
      { t: "Virtual Screening", d: "High-throughput screening across millions of compounds using pharmacophore and 3D models.", specs: ["Library Curation", "Hit Expansion"] },
      { t: "AI Drug Discovery", d: "Generative chemistry and deep learning rescoring to compress hit-to-lead cycles.", specs: ["ADMET Prediction", "De Novo Design"] },
    ]
  },
  {
    category: "Computational Modeling",
    services: [
      { t: "Molecular Dynamics", d: "All-atom simulations including FEP+ for binding free energy and protein stability analysis.", specs: ["Solvent Explicit MD", "FEP+ Calculations"] },
      { t: "Bioinformatics", d: "Custom multi-omics pipelines, variant calling, and statistical genomics for research.", specs: ["NGS Pipelines", "Pathway Enrichment"] },
      { t: "Network Pharmacology", d: "Systems-level mapping of drug–target–disease interactions for mechanism discovery.", specs: ["PPI Networks", "Target Identification"] },
    ]
  },
  {
    category: "Scientific Strategy",
    services: [
      { t: "Scientific Writing", d: "Technical manuscripts and grant proposals written to top-tier journal standards.", specs: ["Technical Editing", "Peer Review Prep"] },
      { t: "Data Analytics", d: "Statistical modeling and dose-response analytics for decision-grade evidence.", specs: ["R/Python Analysis", "Visual Reporting"] },
      { t: "Research Consultation", d: "PhD-led strategic collaboration for computational R&D programs.", specs: ["Pipeline Audits", "Workflow Design"] },
    ]
  }
];

function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* MINIMAL HERO */}
      <section className="py-24 lg:py-40">
        <div className="mx-auto max-w-[1800px] px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-6 block">Capabilities</span>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-primary mb-12 tracking-tighter">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              We provide PhD-led computational expertise across the drug discovery pipeline. 
              Our methods are grounded in physics and augmented by artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ADVANCED PILLAR LAYOUT */}
      <section className="pb-40">
        <div className="mx-auto max-w-[1800px] px-8 lg:px-12">
          {pillars.map((pillar, pillarIdx) => (
            <div key={pillar.category} className="border-t border-border pt-20 pb-32 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-4 block">Pillar {String(pillarIdx + 1).padStart(2, '0')}</span>
                <h2 className="text-4xl font-bold text-primary tracking-tight">{pillar.category}</h2>
              </div>
              
              <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
                {pillar.services.map((s, i) => (
                  <motion.div 
                    key={s.t}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-between">
                      {s.t}
                      <Plus className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
                      {s.d}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {s.specs.map(spec => (
                        <span key={spec} className="px-2 py-0.5 bg-secondary text-[10px] font-bold text-primary/60 rounded uppercase tracking-wider">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to="/contact" 
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b-2 border-primary/10 pb-1 hover:border-accent transition-all"
                    >
                      Protocol Details
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="mx-auto max-w-[1800px] px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Scientific Collaboration
            </h2>
            <p className="text-white/60 text-lg">Discuss a bespoke computational workflow for your target.</p>
          </div>
          <Link 
            to="/contact" 
            className="bg-white text-primary px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all active:scale-95"
          >
            Inquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
