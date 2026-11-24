const descriptions = JSON.parse(document.querySelector('#texts').textContent);
const page = document.querySelector('#page');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const counter = document.querySelector('output');
let current = 1;

function show(number) {
  current = Math.max(1, Math.min(descriptions.length, number));
  page.src = current + '.webp';
  page.alt = descriptions[current - 1] || 'Página ' + current;
  counter.textContent = current + ' de ' + descriptions.length;
  prev.disabled = current === 1;
  next.disabled = current === descriptions.length;
  if (!next.disabled) new Image().src = (current + 1) + '.webp';
}

prev.onclick = () => show(current - 1);
next.onclick = () => show(current + 1);
document.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    show(current + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});
show(1);
