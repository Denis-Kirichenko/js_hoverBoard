const board = document.getElementById('board');
const colors = [
  '#a52d2d',
  '#66ce05',
  '#0eb869',
  '#0eb2b8',
  '#0e44b8',
  '#c5ba20',
  '#b80eb8',
  '#b80e63',
];
const height = board.clientHeight;
const width = board.clientWidth;
const squaresNumber = Math.floor(height / 20) * Math.floor(width / 20);

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);
  board.append(square);
}

function setColor(event) {
  elem = event.target;
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  elem = event.target;
  elem.style.backgroundColor = '#1d1d1d';
  elem.style.boxShadow = `0 0 2px #1d1d1d`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length - 1)];
}
