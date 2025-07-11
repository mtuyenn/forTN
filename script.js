const yesBtn = document.querySelector('.btn--yes');
const noBtn = document.querySelector('.btn--no');

yesBtn.addEventListener('click', () => {
  alert('Yayyy! Bé đã tha thứ cho anh rồi 😍');
});

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * window.innerWidth - 100);
  const y = Math.floor(Math.random() * window.innerHeight - 50);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
