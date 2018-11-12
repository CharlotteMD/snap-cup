console.log('working');

window.onload = function() {

  document.getElementById('person').innerHTML = 'I love you xxx';

  document.getElementById('message').innerHTML = 'You are the BEST!';

  const mantrasMum = [
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
    'You are a fun mum!'
  ];

  const mantrasDad = [
    'You are very wise',
    'You are so caring',
    'You are very clever',
    'You always help me with things',
    'You have great Dad jokes',
    'You lay the best RBs!',
    'You always try to fix things',
    'You give good advice',
    'You are the best dog Master!',
    'You have top bants',
    'You have great style',
    'You are great at fun presents',
    'You always ensure that the fun meter stays in the green!',
    'You are the BEST at halal BBQs!',
    'You are great for interesting chats'
  ];

  const mantraCountMum = mantrasMum.length;
  const mantraCountDad = mantrasDad.length;

  const randomNumberMum = () => {
    const generatedNumberMum = (Math.ceil(Math.random()*mantraCountMum)-1);
    const mantraToDisplayMum = mantrasMum[generatedNumberMum];
    document.getElementById('message').innerHTML = mantraToDisplayMum;
  };

  const randomNumberDad = () => {
    const generatedNumberDad = (Math.ceil(Math.random()*mantraCountDad)-1);
    const mantraToDisplayDad = mantrasDad[generatedNumberDad];
    document.getElementById('message').innerHTML = mantraToDisplayDad;
  };

  const setMummy = () => {
    document.getElementById('person').innerHTML = 'Mummy';
  };

  const setDaddy = () => {
    document.getElementById('person').innerHTML = 'Daddy';
  };

  document.getElementById('mumButton').addEventListener('click', function(){
    clearInterval();
    setMummy();
    setInterval(randomNumberMum, 3000);
  });

  document.getElementById('dadButton').addEventListener('click', function(){
    clearInterval();
    setDaddy();
    setInterval(randomNumberDad, 3000);
  });

  const parents = () => {
    document.getElementById('parents').innerHTML = 'As people you are amazing, but as parents you are the best!';
  };

  setInterval(parents, 30000);


};
