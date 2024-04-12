// import "@splidejs/splide/css";
import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";

const slidersInit = () => {
  const slidersBig = document.getElementsByClassName("splide-big");
  const slidersSmall = document.getElementsByClassName("splide-small");
  const params = {
    // pagination: false,
    // perPage: 3,
    // breakpoints: {
    //   1600: {
    //     perPage: 3,
    //   },
    //   900: {
    //     perPage: 2,
    //   },
    //   700: {
    //     perPage: 1,
    //   },
    // },
    // direction: "ttb",
    // arrows: false,
    // pagination: false,
    // wheel: true,
    // releaseWheel: true,
    // focus: 0,
    // omitEnd: true,
    // type: "loop",
    // perPage: "auto",
    // height: "500px",
    // width: "100%",
    // fixedWidth: 320,
    // gap: "0px",
    // perPage: 1,
    // gap: "40px",
    // type: "loop",
    // pagination: true,
    // autoplay: true,
    // interval: 10000,
    // speed: 2000,
    // pauseOnFocus: false,
    // pauseOnHover: false,
  };
  try {
    console.log(slidersBig.length);
    for (let i = 0; i < slidersBig.length; i += 1) {
      const splideBig = new Splide(slidersBig[i], {
        arrows: false,
        fixedHeight: 315,
        pagination: false,
      });
      const splideSmall = new Splide(slidersSmall[i], {
        fixedWidth: 96,
        fixedHeight: 65,
        gap: 20,
        rewind: true,
        arrows: false,
        isNavigation: true,
        pagination: false,
      });
      console.log(splideSmall);
      if (slidersBig[i].classList.contains("_ms-cp")) {
        //   // const customPagination = document.querySelector(".paginationdata");
        //   // const customList = customPagination.querySelectorAll("li");
        //   splide.on("pagination:mounted", function (data) {
        //     // You can add your class to the UL element
        //     // data.list.classList.add("splide__pagination--custom");
        //     // // `items` contains all dot items
        //     // data.items.forEach(function (item, index) {
        //     //   console.log(index);
        //     //   console.log(customList);
        //     //   item.button.innerHTML = customList[index].innerHTML;
        //     // });
        //   });
      }
      // if (sliders[i].classList.contains("_ms-as")) {
      //   params.AutoScroll = AutoScroll;
      // }

      splideBig.sync(splideSmall);
      splideBig.mount(params);
      splideSmall.mount(params);
      console.log(i);
    }
  } catch (error) {
    console.log("slidersInit error");
    console.log(error);
  }
  // try {
  //   for (let i = 0; i < slidersSmall.length; i += 1) {
  //     const splideSmall = new Splide(slidersSmall[i], {
  //       fixedWidth: 100,
  //       fixedHeight: 60,
  //       gap: 10,
  //       rewind: true,
  //       pagination: false,
  //     });
  //     if (slidersSmall[i].classList.contains("_ms-cp")) {
  //       //   // const customPagination = document.querySelector(".paginationdata");
  //       //   // const customList = customPagination.querySelectorAll("li");
  //       //   splide.on("pagination:mounted", function (data) {
  //       //     // You can add your class to the UL element
  //       //     // data.list.classList.add("splide__pagination--custom");
  //       //     // // `items` contains all dot items
  //       //     // data.items.forEach(function (item, index) {
  //       //     //   console.log(index);
  //       //     //   console.log(customList);
  //       //     //   item.button.innerHTML = customList[index].innerHTML;
  //       //     // });
  //       //   });
  //     }
  //     // if (sliders[i].classList.contains("_ms-as")) {
  //     //   params.AutoScroll = AutoScroll;
  //     // }
  //     splideSmall.mount(params);
  //   }
  // } catch (error) {
  //   console.log("slidersInit error");
  //   console.log(error);
  // }
};
export default slidersInit;
