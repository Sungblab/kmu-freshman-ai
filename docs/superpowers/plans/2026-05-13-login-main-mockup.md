# Login/Main Mockup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build static HTML mockups for the login page and main app page using a Cal.com-inspired neutral visual style.

**Architecture:** Keep mockups outside the React app in `frontend/mockups/` so the team can open them directly in a browser before committing to React components. Share one stylesheet across both pages to lock spacing, typography, panel, button, and sidebar rules.

**Tech Stack:** HTML, CSS, existing repo docs.

---

### Task 1: Static Mockup Files

**Files:**
- Create: `frontend/mockups/styles.css`
- Create: `frontend/mockups/login.html`
- Create: `frontend/mockups/main.html`

- [x] **Step 1: Create shared CSS**

Define neutral design tokens, body typography, panels, buttons, forms, app shell, responsive grid, and small utility classes in `frontend/mockups/styles.css`.

- [x] **Step 2: Create login mockup**

Create `frontend/mockups/login.html` with project identity, email/password inputs, demo account note, feature summary, and links for sign-up/reset.

- [x] **Step 3: Create main app mockup**

Create `frontend/mockups/main.html` with sidebar navigation, RAG question input, answer panel, source list, recommendation card, D-day card, and LLM log card.

- [x] **Step 4: Verify static files**

Run:

```powershell
pnpm docs:check
pnpm build:frontend
git diff --check
```

Expected:

- Required docs check passes.
- Existing React frontend still builds.
- No trailing whitespace or patch whitespace errors.

Actual result:

- `pnpm docs:check`: passed, required 19 documents found.
- `pnpm build:frontend`: passed, Vite production build completed.
- `git diff --check`: passed.

### Task 2: Mobile-First Refinement

**Files:**
- Modify: `frontend/mockups/styles.css`
- Modify: `frontend/mockups/login.html`
- Modify: `frontend/mockups/main.html`
- Modify: `docs/superpowers/specs/2026-05-13-login-main-mockup-design.md`

- [x] **Step 1: Add Korean typography**

Use Pretendard as the first font family and keep `Noto Sans KR` plus system fonts as fallback.

- [x] **Step 2: Improve mobile viewport handling**

Add `viewport-fit=cover`, `theme-color`, `100dvh`, safe-area padding, and mobile touch sizing.

- [x] **Step 3: Convert main navigation on phones**

At phone width, convert the desktop sidebar into a fixed bottom tab bar with short Korean labels.

- [x] **Step 4: Reflow content for mobile**

Use one-column layout, sticky topbar, full-width action button, larger textarea, compact panels, and no desktop shadow on mobile.

Actual result:

- `pnpm docs:check`: passed, required 19 documents found.
- `pnpm build:frontend`: passed, Vite production build completed.
- `git diff --check`: passed.
