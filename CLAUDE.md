# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Vanilla JS browser pixel-drawing app (The Odin Project — Etch-a-Sketch exercise). No build step, no dependencies. Open `index.html` directly in a browser or use any static file server.

## Architecture

Three files, no framework:

- **`index.html`** — static shell; the grid DOM is injected by JS at runtime
- **`style.css`** — layout via Flexbox; `#grid-container` is fixed at 960×960 px with `flex-wrap: wrap` so cells flow into a grid automatically
- **`script.js`** — all logic; entry point is `createGrid(DEFAULT_SIZE)` called on `DOMContentLoaded`

### Key design decisions in script.js

**Grid rendering:** `createGrid(size)` wipes `#grid-container` via `innerHTML = ''` and appends `size²` divs with inline `width`/`height` = `960 / size` px. Cell size is always exact so the container never overflows.

**Painting (T09 + T10 combined):**
- On first hover, a random `(r, g, b)` is stored in `cell.dataset.r/g/b`
- Each hover applies `factor = 1 - count * 0.1` to all three channels → `rgb(r*factor, g*factor, b*factor)`
- At count = 10, factor = 0 → fully black; the guard `if (count >= 10) return` locks the cell
- **Do not use `element.style.opacity`** for darkening — it makes the whole element transparent and was a prior bug

**Reset Colors (T11):** clears `backgroundColor`, `dataset.count`, and `dataset.r/g/b` so the next hover picks a fresh random color. Does **not** recreate cells — preserves current grid size.

## docs/ spec files

Reference only — written before/during implementation. If the spec and the code diverge, **the code is authoritative**. Note that `docs/logic.md` still describes the old opacity-based darkening approach; the actual implementation uses per-channel RGB darkening.
