export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background geometric shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="animate-float absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-accent/3 blur-2xl delay-300" />
        <div className="animate-pulse-glow absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-accent/4 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Nav */}
      <nav className="animate-slide-up relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-accent" />
          <span className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
            LearnClaude
          </span>
        </div>
        <div className="hidden items-center gap-8 font-mono text-xs tracking-wider text-muted md:flex">
          <span className="transition-colors hover:text-accent">React</span>
          <span className="transition-colors hover:text-accent">Next.js</span>
          <span className="transition-colors hover:text-accent">Git</span>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex min-h-[85vh] flex-col justify-center px-8 md:px-16">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="animate-slide-up delay-100 mb-8 flex items-center gap-3">
            <div className="animate-expand-line delay-500 h-px bg-accent" style={{ width: 48 }} />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
              Learning in Progress
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-slide-up delay-200 mb-6 text-5xl font-800 leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Learning to build the
            <br />
            <span className="text-accent">web</span>, one
            <br />
            commit at a time.
          </h1>

          {/* Description */}
          <p className="animate-slide-up delay-300 mb-12 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            A hands-on journey through React, Next.js, and modern web
            development — learning by building real things.
          </p>

          {/* CTA row */}
          <div className="animate-slide-up delay-400 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 items-center justify-center gap-3 rounded-full bg-accent px-8 font-mono text-sm font-bold tracking-wider text-background transition-all hover:bg-accent-dim hover:shadow-[0_0_30px_rgba(196,247,74,0.3)]"
            >
              <span>EXPLORE DOCS</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-full border border-surface-light px-8 font-mono text-sm tracking-wider text-muted transition-all hover:border-accent/30 hover:text-foreground"
            >
              VIEW ON GITHUB
            </a>
          </div>
        </div>

        {/* Side decoration */}
        <div className="animate-slide-in-right delay-600 absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-6 md:right-16 lg:flex">
          <div className="flex flex-col items-end gap-2 font-mono text-xs text-muted">
            <span className="text-accent">01</span>
            <span>React</span>
          </div>
          <div className="h-16 w-px bg-surface-light" />
          <div className="flex flex-col items-end gap-2 font-mono text-xs text-muted">
            <span className="text-accent">02</span>
            <span>Next.js</span>
          </div>
          <div className="h-16 w-px bg-surface-light" />
          <div className="flex flex-col items-end gap-2 font-mono text-xs text-muted">
            <span className="text-accent">03</span>
            <span>TypeScript</span>
          </div>
          <div className="h-16 w-px bg-surface-light" />
          <div className="flex flex-col items-end gap-2 font-mono text-xs text-muted">
            <span className="text-accent">04</span>
            <span>Tailwind</span>
          </div>
        </div>
      </main>

      {/* Bottom bar */}
      <footer className="animate-slide-up delay-700 absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-t border-surface-light px-8 py-5 md:px-16">
        <span className="font-mono text-xs text-muted">
          &copy; 2026 Learning Project
        </span>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="font-mono text-xs text-muted">
            Next.js + Tailwind CSS
          </span>
        </div>
      </footer>
    </div>
  );
}
