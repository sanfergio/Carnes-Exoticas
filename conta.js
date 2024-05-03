function abreMenu() {
  var openMenu = document.getElementById("open-menu");
  if (openMenu.style.display === "block") {
    openMenu.style.display = "none";
  } else {
    openMenu.style.display = "block";
  }
}

function login(){


let banner = document.querySelector(".banner-sign")
let botao = document.querySelector(".botao-magico")
let welcome = document.querySelector(".welcome")
let texto = document.querySelector(".texto")
  
    if (window.getComputedStyle(banner).getPropertyValue('box-shadow') === 'none') {

      banner.classList.add("transition-left")
      botao.textContent = "cadastre-se"
      welcome.textContent = "Faça sua conta!"
      texto.textContent = "Registre-se para fazer ter acesso ao melhor site de carnes do planeta."
      
    }
else 
    {

      banner.classList.remove("transition-left")
      botao.textContent = "login"
      welcome.textContent = "Bem-Vindo de Volta!"
      texto.textContent = "Para continuar conectado com a gente, por favor faça o login."
      
    }
  
  
}


function login2(){

let cadastro = document.querySelector(".texto-signa")
let bann = document.querySelector(".texto-login")

cadastro.style.display="none"
  
}