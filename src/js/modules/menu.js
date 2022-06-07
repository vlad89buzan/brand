const menu = document.querySelector(".menu__block");
const menuMain = menu.querySelector(".menu__main");
const submenuAll = menu.querySelectorAll(".submenu");
const goBack = menu.querySelector(".menu__mobile-go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".menu__mobile-close");
let subMenu;
let subMenuArray = [];
let subMenuTextArray = [];

function last(array) {
  return array[array.length - 1];
}
function last2(array) {
  return array[array.length - 2];
}

menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu__item-has-children")) {
    const hasChildren = e.target.closest(".menu__item-has-children");

    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  const lastItem = last(subMenuArray);
  const lastItemText = last2(subMenuTextArray);
  subMenuArray.pop();
  subMenuTextArray.pop();
  if (subMenuArray.length >= 0) {
    document.getElementById(lastItem).style.animation =
      "slideRight 0.5s ease forwards";
    menu.querySelector(".menu__mobile-title").innerHTML = lastItemText;
    setTimeout(() => {
      document.getElementById(lastItem).classList.remove("active");
    }, 300);
  }
  if (subMenuArray.length == 0) {
    menu.querySelector(".menu__mobile").classList.remove("active");
  }
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu__overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu__overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  for (let i = 0; submenuAll.length < i; i++) {
    submenuAll[i].classList.remove("active");
  }
  subMenu = hasChildren.querySelector(".submenu");
  subMenuArray.push(subMenu.id);
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle = hasChildren.querySelector(".drop-trigger").textContent;
  subMenuTextArray.push(menuTitle);

  menu.querySelector(".menu__mobile-title").innerHTML = menuTitle;
  menu.querySelector(".menu__mobile").classList.add("active");
}
window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};
