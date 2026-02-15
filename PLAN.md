# Project Setup Plan: Next.js + React + Tailwind CSS with Git/GitHub

## Context

This is a learning project for a beginner. The goal is to build a basic web application
using Next.js + React + Tailwind CSS, learn Git version control, and push to GitHub.

The repository currently has an initialized Git repo (branch "master") with no commits and no code files.

## Skills Used

- **frontend-design** — For creating a distinctive, production-grade landing page with high design quality
- **vercel-react-best-practices** — For writing performant React/Next.js code following Vercel Engineering guidelines

---

## Implementation Plan

### Phase 1: Clean Git State
Reset the staging area to clear the previously staged (and now deleted) index.html:
```bash
git reset
```

### Phase 2: Create Next.js Project
```bash
npx create-next-app@latest . --typescript --tailwind --app --eslint --import-alias "@/*"
```
Flags explained:
- `--typescript` — Type safety
- `--tailwind` — Pre-configured Tailwind CSS
- `--app` — Modern App Router
- `--eslint` — Code quality linting
- `--import-alias "@/*"` — Clean imports
- Default `src/` directory structure for scalability

**Key files created:**
| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page component |
| `src/app/layout.tsx` | Root layout |
| `src/app/globals.css` | Global styles + Tailwind directives |
| `package.json` | Dependencies & scripts |
| `next.config.ts` | Next.js config |
| `tailwind.config.ts` | Tailwind config |
| `.gitignore` | Auto-excludes node_modules, .next, etc. |

### Phase 3: Create Landing Page (using skills)

**Step 3a:** Invoke `vercel-react-best-practices` skill to load React/Next.js performance guidelines. Apply these patterns throughout the code:
- Proper use of Server vs Client Components
- Optimized imports and image handling
- Correct data fetching patterns
- Bundle size considerations

**Step 3b:** Invoke `frontend-design` skill to design and build a professional landing page. Edit `src/app/page.tsx` with:
- Hero section with title and description
- Tailwind CSS styling (gradients, shadows, responsive)
- Modern, distinctive design (not generic AI look)
- Responsive layout (mobile-first)
- Follows Vercel best practices from Step 3a

### Phase 4: Verify Locally
```bash
npm run dev
```
- Open `http://localhost:3000` in browser
- Verify page displays and is responsive
- Check browser console for errors
- Stop with `Ctrl+C`

### Phase 5: Git — First Commit

**Concepts:**
| Term | Meaning |
|------|---------|
| Working Directory | Your actual files on disk |
| Staging Area | Files prepared for the next commit |
| Commit | A saved snapshot with a message |
| Repository | The full history of commits |

**Steps:**
```bash
git status                    # See untracked files
git add .                     # Stage all files
git status                    # Verify staged files
git commit -m "Initial Next.js project with Tailwind CSS and landing page"
git log --oneline             # View commit history
```

### Phase 6: Practice — Second Commit
Make a small change (e.g., update text or add a section), then:
```bash
git diff                      # See what changed
git status                    # Check status
git add src/app/page.tsx      # Stage specific file
git commit -m "Update homepage content"
git log --oneline             # View history
```

### Phase 7: Push to GitHub

**Prerequisites:** GitHub account + new empty repository (no README)

```bash
git branch -M main                        # Rename master → main (modern convention)
git remote add origin <GitHub-URL>        # Connect to GitHub
git remote -v                             # Verify connection
git push -u origin main                   # Upload code (-u sets tracking)
```

### Phase 8: Create CLAUDE.md
Create project documentation with:
- Project stack description
- Dev commands: `npm run dev`, `npm run build`, `npm run lint`
- Project structure overview
- Git workflow summary

---

## Quick Reference: Git Commands

```bash
# Daily workflow
git status                    # What changed?
git diff                      # Line-by-line changes
git add <file>                # Stage specific file
git add .                     # Stage everything
git commit -m "message"       # Save snapshot
git push                      # Upload to GitHub
git pull                      # Download from GitHub

# History
git log --oneline             # Compact history
git log --graph --all         # Visual branch history

# Undo
git restore <file>            # Discard local changes
git restore --staged <file>   # Unstage a file
```

---

## Verification Checklist
- [ ] `npm run dev` starts successfully
- [ ] Landing page displays correctly at localhost:3000
- [ ] Page is responsive (resize browser)
- [ ] `git log` shows commits
- [ ] Code is visible on GitHub
- [ ] Can make changes → commit → push successfully
