const carouselSlide = document.querySelector('.carouselSlide');
const carouselImages = document.querySelectorAll('.carouselSlide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth; // Para obtener el width original

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listener

nextBtn.addEventListener('click',()=>{
  if(counter >= carouselImages.length-1) {return};
  carouselSlide.style.transition = "transform 0.8s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click',()=>{
  if(counter <= 0) {return};
  carouselSlide.style.transition = "transform 0.8s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});


carouselSlide.addEventListener('transitionend', ()=>{ // Evento que se dispara cuando la transicion termina
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none"; // Vamos a saltar sin transicion a la imagen duplicada
    counter = carouselImages.length -2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none"; // Vamos a saltar sin transicion a la imagen duplicada
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
