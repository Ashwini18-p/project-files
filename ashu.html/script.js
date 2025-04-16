let hunger = 0;

function updateStatus() {
  const pet = document.getElementById('pet');
  const status = document.getElementById('status');

  if (hunger < 3) {
    pet.textContent = '😊';
    status.textContent = 'Happy';
  } else if (hunger < 6) {
    pet.textContent = '😐';
    status.textContent = 'Hungry';
  } else {
    pet.textContent = '😢';
    status.textContent = 'Very Hungry!';
  }
}

function feedPet() {
  hunger = Math.max(0, hunger - 2);
  updateStatus();
}

setInterval(() => {
  hunger++;
  updateStatus();
}, 5000); // Every 5 seconds the pet gets hungrier

