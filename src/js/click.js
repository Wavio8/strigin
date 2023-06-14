const clickInit = () => {
  const click = document.querySelectorAll("._click");
  try {
    click.forEach((oneClick) => {
      if (oneClick.getAttribute("for")) {
        const el = document.getElementById(oneClick.getAttribute("for"));
        if (el) oneClick.onclick = () => el.click();
      }
    });
  } catch (error) {
    console.log("clickInit error");
  }
};
export default clickInit;
