export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background geometric shapes */}
      <div className="pointer-events-none fixed inset-0">
        <div className="animate-float absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="animate-float absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-accent/3 blur-2xl delay-300" />
        <div className="animate-pulse-glow absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-accent/4 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Nav */}
      <nav className="animate-slide-up sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-surface-light">
        <div className="flex items-center justify-between px-8 py-6 md:px-16">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
              LearnClaude
            </span>
          </div>
          <div className="hidden items-center gap-8 font-mono text-xs tracking-wider text-muted md:flex">
            <a href="#journey" className="transition-colors hover:text-accent">Journey</a>
            <a href="#stack" className="transition-colors hover:text-accent">Stack</a>
            <a href="#goals" className="transition-colors hover:text-accent">Goals</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[90vh] flex-col justify-center px-8 md:px-16 pt-20 pb-32">
        <div className="max-w-5xl">
          {/* Tag */}
          <div className="animate-slide-up delay-100 mb-8 flex items-center gap-3">
            <div className="animate-expand-line delay-500 h-px bg-accent" style={{ width: 48 }} />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
              Learning in Progress
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-slide-up delay-200 mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Building the
            <br />
            <span className="text-accent">future</span>, one
            <br />
            commit at a time.
          </h1>

          {/* Description */}
          <p className="animate-slide-up delay-300 mb-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            A hands-on journey through React, Next.js, and modern web
            development. This is where theory meets practice, where documentation
            becomes real projects, and where curiosity drives progress.
          </p>

          {/* Stats */}
          <div className="animate-slide-up delay-350 mb-12 grid grid-cols-3 gap-6 max-w-xl">
            <div className="flex flex-col gap-1">
              <div className="font-mono text-3xl font-bold text-accent">12+</div>
              <div className="font-mono text-xs text-muted uppercase tracking-wider">Commits</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-mono text-3xl font-bold text-accent">4</div>
              <div className="font-mono text-xs text-muted uppercase tracking-wider">Technologies</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-mono text-3xl font-bold text-accent">∞</div>
              <div className="font-mono text-xs text-muted uppercase tracking-wider">To Learn</div>
            </div>
          </div>

          {/* CTA row */}
          <div className="animate-slide-up delay-400 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 items-center justify-center gap-3 rounded-full bg-accent px-8 font-mono text-sm font-bold tracking-wider text-background transition-all hover:bg-accent-dim hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
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
      </section>

      {/* Learning Journey */}
      <section id="journey" className="relative z-10 px-8 md:px-16 py-32 border-t border-surface-light">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-accent w-12" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
                The Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Learning Path
            </h2>
            <p className="text-lg text-muted max-w-2xl">
              Every expert was once a beginner. Here's the roadmap from fundamentals to mastery.
            </p>
          </div>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="group relative bg-surface/30 backdrop-blur-sm border border-surface-light rounded-2xl p-4 sm:p-8 transition-all hover:border-accent/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]">
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-accent text-background font-mono font-bold text-sm sm:text-base">
                    01
                  </div>
                  <div className="h-full w-px bg-gradient-to-b from-accent to-transparent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">Foundations</h3>
                    <span className="px-2.5 py-1 rounded-full bg-accent/20 text-accent font-mono text-[10px] sm:text-xs font-bold whitespace-nowrap w-fit">
                      COMPLETED
                    </span>
                  </div>
                  <p className="text-muted mb-4 text-sm sm:text-base">
                    Setting up the development environment, understanding Git basics, and creating the first Next.js application.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-surface-light text-foreground font-mono text-[10px] sm:text-xs">Git</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-light text-foreground font-mono text-[10px] sm:text-xs">Node.js</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-light text-foreground font-mono text-[10px] sm:text-xs">CLI Tools</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="group relative bg-surface/30 backdrop-blur-sm border border-accent/50 rounded-2xl p-4 sm:p-8 shadow-[0_0_30px_rgba(0,212,255,0.15)]">
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-accent text-background font-mono font-bold text-sm sm:text-base animate-pulse">
                    02
                  </div>
                  <div className="h-full w-px bg-gradient-to-b from-accent to-transparent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">React Fundamentals</h3>
                    <span className="px-2.5 py-1 rounded-full bg-accent text-background font-mono text-[10px] sm:text-xs font-bold whitespace-nowrap w-fit">
                      IN PROGRESS
                    </span>
                  </div>
                  <p className="text-muted mb-4 text-sm sm:text-base">
                    Diving deep into React components, hooks, state management, and building interactive user interfaces.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-surface-light text-foreground font-mono text-[10px] sm:text-xs">Components</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-light text-foreground font-mono text-[10px] sm:text-xs">Hooks</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-light text-foreground font-mono text-[10px] sm:text-xs">State</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-light text-foreground font-mono text-[10px] sm:text-xs">Props</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="group relative bg-surface/20 backdrop-blur-sm border border-surface-light/50 rounded-2xl p-4 sm:p-8 opacity-60">
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-surface-light text-muted font-mono font-bold text-sm sm:text-base">
                    03
                  </div>
                  <div className="h-full w-px bg-gradient-to-b from-surface-light to-transparent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">Advanced Patterns</h3>
                    <span className="px-2.5 py-1 rounded-full bg-surface-light/50 text-muted font-mono text-[10px] sm:text-xs font-bold whitespace-nowrap w-fit">
                      UPCOMING
                    </span>
                  </div>
                  <p className="text-muted mb-4 text-sm sm:text-base">
                    Server components, data fetching strategies, API routes, and performance optimization techniques.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-surface-light/50 text-muted font-mono text-[10px] sm:text-xs">Server Actions</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-light/50 text-muted font-mono text-[10px] sm:text-xs">API Routes</span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-light/50 text-muted font-mono text-[10px] sm:text-xs">Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="relative z-10 px-8 md:px-16 py-32 border-t border-surface-light bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-accent w-12" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
                Technologies
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Toolkit
            </h2>
            <p className="text-lg text-muted max-w-2xl">
              Modern, powerful technologies chosen for learning web development the right way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* React Card */}
            <div className="group relative bg-gradient-to-br from-surface/50 to-surface/30 backdrop-blur-sm border border-surface-light rounded-2xl p-8 transition-all hover:border-accent/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">⚛️</div>
                  <span className="font-mono text-xs text-accent">LIBRARY</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">React</h3>
                <p className="text-muted mb-4">
                  The foundation of modern UI development. Learning component-based architecture, hooks, and declarative programming.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted font-mono">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Version 19</span>
                </div>
              </div>
            </div>

            {/* Next.js Card */}
            <div className="group relative bg-gradient-to-br from-surface/50 to-surface/30 backdrop-blur-sm border border-surface-light rounded-2xl p-8 transition-all hover:border-accent/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">▲</div>
                  <span className="font-mono text-xs text-accent">FRAMEWORK</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Next.js</h3>
                <p className="text-muted mb-4">
                  Production-ready React framework with server components, routing, and built-in optimization. The complete package.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted font-mono">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Version 16 (App Router)</span>
                </div>
              </div>
            </div>

            {/* TypeScript Card */}
            <div className="group relative bg-gradient-to-br from-surface/50 to-surface/30 backdrop-blur-sm border border-surface-light rounded-2xl p-8 transition-all hover:border-accent/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">📘</div>
                  <span className="font-mono text-xs text-accent">LANGUAGE</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">TypeScript</h3>
                <p className="text-muted mb-4">
                  JavaScript with superpowers. Type safety, better tooling, and catching errors before they reach production.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted font-mono">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Strict mode enabled</span>
                </div>
              </div>
            </div>

            {/* Tailwind Card */}
            <div className="group relative bg-gradient-to-br from-surface/50 to-surface/30 backdrop-blur-sm border border-surface-light rounded-2xl p-8 transition-all hover:border-accent/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">🎨</div>
                  <span className="font-mono text-xs text-accent">STYLING</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Tailwind CSS</h3>
                <p className="text-muted mb-4">
                  Utility-first CSS framework for rapid UI development. Designing directly in markup with consistency and speed.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted font-mono">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Custom design system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section id="goals" className="relative z-10 px-8 md:px-16 py-32 border-t border-surface-light">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-accent w-12" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
                Objectives
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What I'm Building Towards
            </h2>
            <p className="text-lg text-muted max-w-2xl">
              Clear goals drive meaningful progress. Here's what success looks like.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative bg-surface/30 backdrop-blur-sm border border-surface-light rounded-2xl p-8 transition-all hover:border-accent/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Master the Fundamentals</h3>
              <p className="text-muted leading-relaxed">
                Build a solid foundation in React, component architecture, and modern JavaScript patterns.
              </p>
            </div>

            <div className="relative bg-surface/30 backdrop-blur-sm border border-surface-light rounded-2xl p-8 transition-all hover:border-accent/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Deploy Real Projects</h3>
              <p className="text-muted leading-relaxed">
                Move beyond tutorials. Build, test, and deploy actual applications that solve real problems.
              </p>
            </div>

            <div className="relative bg-surface/30 backdrop-blur-sm border border-surface-light rounded-2xl p-8 transition-all hover:border-accent/30">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Continuous Growth</h3>
              <p className="text-muted leading-relaxed">
                Embrace the learning mindset. Every challenge is an opportunity to level up.
              </p>
            </div>
          </div>

          {/* Current Focus */}
          <div className="mt-12 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-3xl">💡</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Current Focus</h3>
                <p className="text-muted text-lg">
                  Building interactive React components and understanding state management patterns.
                  Next up: server components and data fetching with Next.js App Router.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-surface-light px-8 py-12 md:px-16 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
                  LearnClaude
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed max-w-md">
                A continuous learning project exploring modern web development.
                Built with curiosity, powered by practice.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-muted">
                  Deployed on Vercel
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted hover:text-accent transition-colors"
                >
                  Next.js
                </a>
                <span className="text-muted">•</span>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted hover:text-accent transition-colors"
                >
                  React
                </a>
                <span className="text-muted">•</span>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted hover:text-accent transition-colors"
                >
                  Tailwind
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-surface-light flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-mono text-xs text-muted">
              &copy; 2026 Learning Project
            </span>
            <span className="font-mono text-xs text-muted">
              Building in public, learning in public
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
