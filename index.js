const nav = document.querySelector('.home');
// console.log(nav)
nav.addEventListener('click', (event) => {
  // console.log(event)
 console.log(nav.style);
 nav.style.color = "blue";


})

const button = document.getElementById('btn');

button.addEventListener('mouseover',function(e){
    event.target.style.color ="black";
})

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
card.addEventListener("mouseenter", (event) =>  card.style.border = "black 3px solid"
)})

cards.forEach((card) => {
  card.addEventListener("mouseleave", (event) =>  card.style.border = ""
  )})



