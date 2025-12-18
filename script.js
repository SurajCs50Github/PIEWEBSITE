const copy = {
  mechanical: "Mechanical: gimbal design, vibration isolation, and beam stabilization to hold alignment under motion.",
  software: "Software: deterministic control loops, pointing algorithms, and telemetry pipelines that keep lock without drift.",
  electrical: "Electrical: power conditioning, diode drivers, and sensor integration engineered for signal integrity under load."
};

const buttons = document.querySelectorAll('.disciplines button');
const output = document.getElementById('discipline-copy');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });
    const key = btn.dataset.key;
    output.textContent = copy[key];
  });
});
