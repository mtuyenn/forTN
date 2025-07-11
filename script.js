const yesBtn = document.querySelector('.btn--yes');
const noBtn = document.querySelector('.btn--no');

yesBtn.addEventListener('click', () => {
  window.location.href = "thankyou.html";
});

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * window.innerWidth - 100);
  const y = Math.floor(Math.random() * window.innerHeight - 50);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
