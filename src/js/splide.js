// import "@splidejs/splide/css";
import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";

const slidersInit = () => {
  const slidersBig = document.getElementsByClassName("splide-big");
  const slidersSmall = document.getElementsByClassName("splide-small");
  const params = {

  };
  try {
    console.log(slidersBig.length);
    for (let i = 0; i < slidersBig.length; i += 1) {
      const splideBig = new Splide(slidersBig[i], {
        arrows: false,
        fixedHeight: 315,
        pagination: false,
        breakpoints: {
          979: {
            fixedHeight: 250,
          },
        }

      });
      const splideSmall = new Splide(slidersSmall[i], {
        fixedWidth: 96,
        fixedHeight: 65,
        gap: 20,
        rewind: true,
        arrows: false,
        isNavigation: true,
        pagination: false,
        breakpoints: {
          1440: {
            fixedWidth: 80,
            fixedHeight: 65,
          },
          1240: {
            fixedWidth: 70,
            fixedHeight: 50,
          },
          979: {
            fixedWidth: "16%",
            fixedHeight: 50,
            gap: "5%",
          },
        },
      });
      console.log(splideSmall);
      if (slidersBig[i].classList.contains("_ms-cp")) {

      }

      splideBig.sync(splideSmall);
      splideBig.mount(params);
      splideSmall.mount(params);
      console.log(i);
    }
  } catch (error) {
    console.log("slidersInit error");
    console.log(error);
  }
};
export default slidersInit;
