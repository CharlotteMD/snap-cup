console.log('working');

window.onload = function() {
  const mantras = [
    'You are kind',
    'You are an amazing cook',
    'Your garden is beautiful',
    'You are so pretty',
    'You have really nice style',
    'You are great at hugs',
    'You always know what to do',
    'You know all the cures for the common cold',
    'You know how to cook everything',
    'You are an encyclopedia of need to know facts',
    'You are super thoughtful',
    'You are great at inspiring me',
    'You are a really great motivator',
    'You give good advice',
    'You are a fun mum!'];

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

  document.getElementById('mumButton').addEventListener('click', function(){
    document.getElementById('person').innerHTML = 'Mummy';
  });

  document.getElementById('dadButton').addEventListener('click', function(){
    document.getElementById('person').innerHTML = 'Daddy';
  });



    };
