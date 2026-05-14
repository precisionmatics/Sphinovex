import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-primary animate-pulse-glow" />
      {children}
    </div>
  );
}
