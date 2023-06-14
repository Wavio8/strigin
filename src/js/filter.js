const filterInit = () => {
  const filters = document.querySelectorAll("._filter");
  try {
    filters.forEach((filter) => {
      const fn = () => {
        const targets = document.querySelectorAll("._filter-target");
        const filetrID = filter.getAttribute("data-filter-id"); // filter.dataset.filterType
        const value = filter.getAttribute("data-filter");

        if (filter.classList.contains("active")) {
          targets.forEach((target) => {
            target.classList.remove("filter-improper");
            if (target.getAttribute("data-filter-id") === filetrID && target.getAttribute("data-filter") !== value) {
              target.classList.add("filter-improper");
            }
          });
        } else {
          targets.forEach((target) => {
            if (target.getAttribute("data-filter-id") === filetrID) {
              target.classList.remove("filter-improper");
            }
          });
        }
      };
      filter.addEventListener("click", fn);
    });
  } catch (error) {
    console.log("selectorInit error");
  }
};
export default filterInit;
