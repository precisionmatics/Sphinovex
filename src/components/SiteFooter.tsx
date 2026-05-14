import { Link } from "@tanstack/react-router";
import logo from "@/assets/sphinovex-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-40" />
      <div className="mx-auto max-w-[1800px] px-8 lg:px-12 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img src={logo} alt="Sphinovex" className="h-20 w-auto object-contain" />
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A computational research and AI-driven CRO accelerating drug discovery, molecular
            modeling and pharmaceutical innovation.
          </p>
          <a
            href="mailto:info@sphinovex.com"
            className="mt-4 inline-block text-sm text-primary hover:underline"
          >
            info@sphinovex.com
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-ink">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink">Connect</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="https://www.linkedin.com/company/sphinovex/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.27 2.36 4.27 5.43v6.31zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:info@sphinovex.com" className="hover:text-ink">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1800px] px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sphinovex. All rights reserved.</p>
          <p className="tracking-wide uppercase">Powered by Innovation &amp; Science</p>
        </div>
      </div>
    </footer>
  );
}
