

//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const name = document.querySelector(".name");
const photo = document.querySelector(".photo img");
//const description = document.querySelector(".info h3");
const info = document.querySelector(".info h5");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) `;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  name.style.transform = "translateZ(150px)";
  photo.style.transform = 'translateZ(150deg)';
  //description.style.transform = "translateZ(125px)";
  info.style.transform = "translateZ(100px)";
  
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  name.style.transform = "translateZ(0px)";
  photo.style.transform = "translateZ(150px)";
  //description.style.transform = "translateZ(0px)";
  info.style.transform = "translateZ(0px)";
  
});