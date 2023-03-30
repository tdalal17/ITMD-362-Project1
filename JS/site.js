const form = document.getElementById('submit');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Its submit');
});