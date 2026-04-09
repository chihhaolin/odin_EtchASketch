const DEFAULT_SIZE = 16;
const CONTAINER_SIZE = 960;

const gridContainer = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');
const resetColorsBtn = document.getElementById('reset-colors-btn');

function paintCell(cell) {
  const count = parseInt(cell.dataset.count || '0');

  if (count >= 10) return;

  const newCount = count + 1;
  cell.dataset.count = newCount;

  // Pick and store a random base color on the first interaction (T09)
  if (newCount === 1) {
    cell.dataset.r = Math.floor(Math.random() * 256);
    cell.dataset.g = Math.floor(Math.random() * 256);
    cell.dataset.b = Math.floor(Math.random() * 256);
  }

  // Darken toward black by 10% per interaction (T10)
  const factor = 1 - newCount * 0.1;
  const r = Math.round(parseInt(cell.dataset.r) * factor);
  const g = Math.round(parseInt(cell.dataset.g) * factor);
  const b = Math.round(parseInt(cell.dataset.b) * factor);
  cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
  gridContainer.innerHTML = '';

  const cellSize = CONTAINER_SIZE / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    gridContainer.appendChild(cell);
  }
}

function handleReset() {
  const input = window.prompt('Enter grid size (max 100):');

  if (input === null) return;

  const size = parseInt(input, 10);

  if (!Number.isInteger(size) || size <= 0) {
    alert('Please enter a valid positive integer.');
    return;
  }

  if (size > 100) {
    alert('Grid size cannot exceed 100.');
    return;
  }

  createGrid(size);
}

gridContainer.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('grid-cell')) {
    paintCell(e.target);
  }
});

function handleResetColors() {
  document.querySelectorAll('.grid-cell').forEach((cell) => {
    cell.style.backgroundColor = '';
    cell.dataset.count = '0';
    delete cell.dataset.r;
    delete cell.dataset.g;
    delete cell.dataset.b;
  });
}

resetBtn.addEventListener('click', handleReset);
resetColorsBtn.addEventListener('click', handleResetColors);

document.addEventListener('DOMContentLoaded', () => {
  createGrid(DEFAULT_SIZE);
});
