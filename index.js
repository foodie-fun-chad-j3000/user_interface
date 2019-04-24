const nav = document.querySelector('.home');
const cards = document.querySelectorAll('.card');
console.log("cards", cards)
nav.addEventListener('click', (event) => {
  // console.log(event)
 console.log(nav.style);
 nav.style.color = "blue";


})


const overlay_toggle = () => {

  // this.classlist.toggle("visible_card");
  console.log()
}


cards.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    console.log("working");

    // card.classList.toggle("visible_card");
    card.style.border = "3px yellow solid"
  });

  card.addEventListener("mouseleave", (e) => {
    card.style.border = "none"
    // card.classList.toggle("visible_card");
  });
});

// card.addEventListener("mouseover", (event) => {
//   card.style.background = "yellow";
// })

const button = document.getElementById('btn');

button.addEventListener('mouseover',function(e){
    event.target.style.color ="black";
})







