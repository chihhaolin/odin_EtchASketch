const DEFAULT_SIZE = 16;
const CONTAINER_SIZE = 960;

const gridContainer = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function paintCell(cell) {
  const count = parseInt(cell.dataset.count || '0') + 1;
  cell.dataset.count = count;

  const opacity = Math.min(count * 0.1, 1.0);
  const color = getRandomColor();

  cell.style.backgroundColor = color;
  cell.style.opacity = opacity;
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

resetBtn.addEventListener('click', handleReset);

document.addEventListener('DOMContentLoaded', () => {
  createGrid(DEFAULT_SIZE);
});
