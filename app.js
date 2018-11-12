console.log('working');

window.onload = function() {
  const mantras = ['Thank you for being my Mummy', 'Thank you for always helping me with life', 'Thank you for my very nice new gilet'];

  const mantraCount = mantras.length;

  const randomNumber = () => {
    const generatedNumber = (Math.ceil(Math.random()*mantraCount)-1);
    const mantraToDisplay = mantras[generatedNumber];
    document.getElementById('message').innerHTML = mantraToDisplay;
  };

  randomNumber();

  setInterval(function(){
    randomNumber();
  }, 5000);

};
