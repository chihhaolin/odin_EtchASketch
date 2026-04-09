# Etch-a-Sketch

A browser-based pixel drawing board built with vanilla JavaScript. Project from [The Odin Project](https://www.theodinproject.com/).

**Live demo:** https://chihhaolin.github.io/odin_EtchASketch/

## Features

- 16×16 grid by default; resize up to 100×100 via **Reset Grid**
- Hover to draw — each cell picks a random color on first touch
- Progressive darkening: each subsequent hover darkens the cell by 10%, reaching full black after 10 interactions
- **Reset Colors** clears all paint without changing the grid size

## Usage

Open `index.html` in any browser — no build step or dependencies required.

## Project structure

```
index.html   # static shell (grid is injected by JS)
style.css    # layout and colors
script.js    # all logic: grid creation, painting, reset
docs/        # design specs written during development
```
