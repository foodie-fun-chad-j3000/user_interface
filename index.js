const nav = document.querySelector('.home');
const cards = document.querySelectorAll(".card");

// console.log(nav)
//
nav.addEventListener('click', (event) => {
  // console.log(event)
 console.log(nav.style);
 nav.style.color = "blue";


})

const button = document.getElementById('btn');

button.addEventListener('mouseover',function(e){
    event.target.style.color ="black";
})


cards.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    card.style.border = "black 3px solid";

  })
  card.addEventListener("mouseleave", (e) => {
    card.style.border = "";
  })
})








