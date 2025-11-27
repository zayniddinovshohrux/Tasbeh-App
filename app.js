const words = ["Subhanolloh", "Allahu Akbar", "La ilaha illolloh", "Alhamdulillah"];
let currentIndex = 0;
let count = 0;
let total = parseInt(localStorage.getItem('totalTasbeh')) || 0;

const tasbehWord = document.getElementById('tasbehWord');
const clickBtn = document.getElementById('clickBtn');
const counter = document.getElementById('counter');
const totalCount = document.getElementById('totalCount');
const resetBtn = document.getElementById('resetBtn');

// Boshlang‘ich qiymatlar
tasbehWord.textContent = words[currentIndex];
counter.textContent = `${count} / 33`;
totalCount.textContent = total;

// Tugma bosilganda
clickBtn.addEventListener('click', () => {
  count++;
  total++;
  totalCount.textContent = total;
  counter.textContent = `${count} / 33`;
  localStorage.setItem('totalTasbeh', total);

  clickBtn.animate([
    { transform: "scale(0.95)", filter: "brightness(0.9)" },
    { transform: "scale(1)", filter: "brightness(1)" }
  ], { duration: 150 });

  if (count >= 33) {
    count = 0;
    currentIndex = (currentIndex + 1) % words.length;
    if (navigator.vibrate) navigator.vibrate(200);
    tasbehWord.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 });
    tasbehWord.textContent = words[currentIndex];
    counter.textContent = `${count} / 33`;
  }
});

// RESET tugmasi
resetBtn.addEventListener('click', () => {
  count = 0;
  total = 0;
  currentIndex = 0;
  tasbehWord.textContent = words[currentIndex];
  counter.textContent = `${count} / 33`;
  totalCount.textContent = total;
  localStorage.setItem('totalTasbeh', total);

  resetBtn.animate([{ transform: "scale(0.9)" }, { transform: "scale(1)" }], { duration: 200 });
});
