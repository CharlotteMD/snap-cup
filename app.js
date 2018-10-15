console.log('working');

window.onload = function() {
  const mantras = ['Thank you for being my Mummy', 'Thank you for always helping me with life', 'Thank you for my very nice new gilet'];

  const mantraCount = mantras.length;

  // generate a random number
  const randomNumber = (Math.ceil(Math.random()*mantraCount)-1);

  // use the number to pick a mantra
  const generatedMantra = mantras[randomNumber];

  // set the mantra as the HTML
  document.getElementById('message').innerHTML = generatedMantra;

};
