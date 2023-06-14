import { toggleClass } from "./func";

const burgerMenuItit = () => {
  const menu = {};
  menu.btn = document.querySelector(".burger-btn");
  menu.header = document.querySelector(".main-header");
  menu.items = document.querySelector(".main-header__nav").querySelectorAll("li");
  menu.validate = () => !!menu.btn && !!menu.header;
  if (!menu.validate()) return null;

  menu.open = () => {
    menu.btn.classList.add("active");
    menu.header.classList.add("active");
    document.body.classList.add("overflow");
  };
  menu.close = () => {
    menu.btn.classList.remove("active");
    menu.header.classList.remove("active");
    document.body.classList.remove("overflow");
  };
  menu.toggle = () => {
    toggleClass(menu.btn, "active");
    toggleClass(menu.header, "active");
    toggleClass(document.body, "overflow");
    if (!menu.btn.classList.contains("active")) {
      document.body.classList.remove("overflow");
    }
  };
  menu.btn.onclick = menu.toggle;
  menu.items.forEach((item) => (item.onclick = menu.close));
  return menu;
};
export default burgerMenuItit;
