// import slidersInit from "./splide";
// import clickInit from "./click";

// import burgerMenuItit from "./menu";
// import { scrollByInit, toUpInit } from "./scroll";
// import { closeInit, openInit } from "./openClose";
// import popupInit from "./popup";
// import selectorInit from "./selector";
// import filterInit from "./filter";
import "../scss/app.scss";
import componentsInit from "./components";

const start = () => {
  // slidersInit();
  // popupInit();
  // openInit();
  // closeInit();
  // selectorInit();
  // filterInit();
  //   clickInit();
  // scrollByInit();
  // toUpInit();
  // const menu = burgerMenuItit();
  // menu.open();


  componentsInit();

  console.log("loaded");
};

document.addEventListener("DOMContentLoaded", start);
