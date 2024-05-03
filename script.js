function abreMenu() {
  var openMenu = document.getElementById("open-menu");
  if (openMenu.style.display === "block") {
    openMenu.style.display = "none";
  } else {
    openMenu.style.display = "block";
  }
}



let page1 = document.querySelector(".page_one");
const antes = document.querySelector(".seta_left");
const depois = document.querySelector(".seta_right");

const images = ["https://www.safefood.net/getmedia/94101697-3c3f-4fe1-8ae8-5b595d3814ba/medium-rare-steak.jpg?w=2000&h=1333&ext=.jpg&width=1360&resizemode=force", "https://creedsdirect.co.uk/wp-content/uploads/2022/12/Untitled-design-2022-12-12T150936.953.png", "https://www.seafoodpeddler.com/wp-content/uploads/2022/06/is-fish-considered-meat3-scaled-e1654809232514.jpg"];
let currentIndex = 0;

function updateBackgroundImage() {
  page1.style.backgroundImage = `url(${images[currentIndex]})`;
}

updateBackgroundImage();

antes.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateBackgroundImage();
});

depois.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackgroundImage();
});

let intervalo = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackgroundImage();
}, 5000);

antes.addEventListener("click", () => {
  clearInterval(intervalo);
});

depois.addEventListener("click", () => {
  clearInterval(intervalo);
});

function carrinho() {

  alert("erro04")

}