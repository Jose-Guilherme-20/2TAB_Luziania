function menuShow() {
  var tam = document.getElementsByTagName("header")[0];

  var menuMobile = document.querySelector(".mobile-menu");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src =
      "./assets/imagens/menu_white_36dp.svg";
    tam.style.height = "auto";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "./assets/imagens/close_white_36dp.svg";
    tam.style.height = "auto";
  }
}
const imgs = document.querySelector("#img-carrossel");
const img = document.querySelectorAll("#img-carrossel img");

let idx = 0;

function carrossel() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }
  imgs.style.transform = `translateX(${-idx * 92}%)`;
}
setInterval(carrossel, 5000);
