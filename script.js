// script.js
document.getElementById('enterBtn').addEventListener('click', () => {
  document.querySelector('.intro').style.display = 'none';
  document.getElementById('content').classList.remove('hidden');
});
