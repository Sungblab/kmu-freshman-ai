# Chatbot Visualization Mockup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a static chatbot mockup page that shows answer text together with RAG evidence visualization.

**Architecture:** Create `frontend/mockups/chatbot.html` and reuse `frontend/mockups/styles.css`. The page remains static HTML/CSS so the team can review the UX before React implementation.

**Tech Stack:** HTML, CSS, existing mockup design tokens.

---

### Task 1: Chatbot Evidence Mockup

**Files:**
- Create: `frontend/mockups/chatbot.html`
- Modify: `frontend/mockups/styles.css`
- Modify: `frontend/mockups/main.html`
- Modify: `docs/contributing/feature-registry.md`
- Modify: `docs/contributing/plans-status.md`
- Modify: `docs/llm/usage-log.md`

- [x] **Step 1: Create chatbot page**

Create a static chatbot mockup with project navigation, chat transcript, answer card, source list, and composer.

- [x] **Step 2: Add evidence visualization styles**

Add reusable CSS for chat bubbles, evidence graph nodes, roadmap steps, source flow, and recommendation reason chain.

- [x] **Step 3: Link mockup navigation**

Point the `AI 질문` mockup navigation item to `chatbot.html` so the chatbot page is discoverable from `main.html`.

- [x] **Step 4: Record workflow evidence**

Update feature/status/LLM usage documents so the chatbot visualization idea is tracked as a project decision.

- [x] **Step 5: Verify**

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
- Old brand name search: no matches.
