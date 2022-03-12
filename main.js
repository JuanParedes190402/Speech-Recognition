const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes("Cuál es tu nombre") || text.includes('cuál es tu nombre')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Mi nombre es Juan Paredes 😎';
      texts.appendChild(p)
    }
  
    if (text.includes('pon un himno') || text.includes('Pon un himno')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Reproduciendo La Santa-Bad Bunny';
      texts.appendChild(p)
      console.log('Abriendo youtube')
      window.open('https://www.youtube.com/watch?v=JUxITamPWrY&ab_channel=BadBunny')
    }
    if (text.includes("manda un saludo") || text.includes('Manda un saludo')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Saludos a Victor Pinedo. 😎';
      texts.appendChild(p)
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();