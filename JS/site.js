const form = document.getElementById('raffle');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('You have been raffled');
});