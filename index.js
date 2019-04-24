const nav = document.querySelector('.home');
const cards = document.querySelectorAll('.invisibe-card');
console.log(cards)
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
    card.classList.toggle("visible_card");
  });

  card.addEventListener("mouseleave", (e) => {
    card.classList.toggle("visible_card");
  });
});

// card.addEventListener("mouseover", (event) => {
//   card.style.background = "yellow";
// })

const button = document.getElementById('btn');

button.addEventListener('mouseover',function(e){
    event.target.style.color ="black";
})







