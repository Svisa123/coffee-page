const menuLogo = document.getElementById("menu-logo");
const menu = document.getElementById("menu");

menuLogo.addEventListener("click", () => {
  if (menu.style.transform === "translateX(0px)") {
    menu.style.transform = "translateX(100%)";
  } else {
    menu.style.transform = "translateX(0px)";
  }
});
