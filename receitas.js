function abreMenu() {
  var openMenu = document.getElementById("open-menu");
  if (openMenu.style.display === "block") {
    openMenu.style.display = "none";
  } else {
    openMenu.style.display = "block";
  }
}

let hamburguer = document.getElementById("hamburguer");
let peixe = document.getElementById("peixe");
let peru = document.getElementById("peru");
let bacalhau = document.getElementById("bacalhau");
let receita1 = document.querySelector(".receita1");
let receita2 = document.querySelector(".receita2");
let receita3 = document.querySelector(".receita3");
let receita4 = document.querySelector(".receita4");

hamburguer.addEventListener("click", function() {

  if (receita1.style.display === "block") {
    receita1.style.display = "none"
  } else {
    receita1.style.display = "block"
    receita2.style.display = "none"
    receita3.style.display = "none"
    receita4.style.display = "none"
  }

})

peixe.addEventListener("click", function() {
  if (receita2.style.display === "block") {
    receita2.style.display = "none"
  } else {
    receita2.style.display = "block"
    receita1.style.display = "none"
    receita3.style.display = "none"
    receita4.style.display = "none"
  }
})

peru.addEventListener("click", function() {
  if (receita3.style.display === "block") {
    receita3.style.display = "none"
  } else {
    receita3.style.display = "block"
    receita1.style.display = "none"
    receita2.style.display = "none"
    receita4.style.display = "none"
  }
})

bacalhau.addEventListener("click", function() {
  if (receita4.style.display === "block") {
    receita4.style.display = "none"
  } else {
    receita4.style.display = "block"
    receita1.style.display = "none"
    receita2.style.display = "none"
    receita3.style.display = "none"
  }
})