import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionEyebrow } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sphinovex" },
      {
        name: "description",
        content:
          "Reach Sphinovex for AI-driven drug discovery, computational biology and CRO collaborations.",
      },
      { property: "og:title", content: "Contact Sphinovex" },
      { property: "og:description", content: "Let's accelerate your next discovery." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="relative py-24 lg:py-28 bg-mesh">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-6xl font-semibold text-ink leading-tight">
            Let's build something <span className="text-gradient">extraordinary</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us about your research program. We'll respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 shadow-elegant">
            {sent ? (
              <div className="text-center py-16">
                <div className="mx-auto h-12 w-12 rounded-full bg-gradient-primary inline-flex items-center justify-center text-primary-foreground">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                  Message received
                </h3>
                <p className="mt-2 text-muted-foreground">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  
                  try {
                    const response = await fetch("https://formspree.io/f/mzdolzjw", {
                      method: "POST",
                      body: formData,
                      headers: {
                        'Accept': 'application/json'
                      }
                    });
                    
                    if (response.ok) {
                      setSent(true);
                    } else {
                      alert("There was an error sending your message. Please try again.");
                    }
                  } catch (error) {
                    alert("There was an error sending your message. Please try again.");
                  }
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required />
                  <Field label="Work email" name="email" type="email" required />
                </div>
                <Field label="Organization" name="org" />
                <Field
                  label="Topic"
                  name="topic"
                  placeholder="e.g. Molecular dynamics for kinase target"
                />
                <div>
                  <label className="block text-xs font-medium text-ink mb-2">Project details</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant hover:opacity-90 transition"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-2 space-y-5">
            <div className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <a
                href="mailto:info@sphinovex.com"
                className="mt-2 block font-display text-lg text-ink hover:text-primary"
              >
                info@sphinovex.com
              </a>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Connect</p>
              <a
                href="https://www.linkedin.com/company/sphinovex/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-ink hover:text-primary"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.27 2.36 4.27 5.43v6.31zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </span>
                LinkedIn
              </a>
            </div>
            <div className="rounded-3xl bg-gradient-primary p-6 text-primary-foreground shadow-elegant">
              <p className="text-xs uppercase tracking-wider opacity-80">Collaborate</p>
              <p className="mt-3 font-display text-lg leading-snug">
                Academic, industry and investor partnerships are welcome.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-ink mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary transition"
      />
    </div>
  );
}
