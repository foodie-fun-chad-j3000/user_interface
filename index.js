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







