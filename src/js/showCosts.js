const showCosts = () => {
  const items = document.querySelectorAll(".serv__el-table-cost");
  const countToShow = 4; // Количество элементов, которые нужно сделать видимыми с самого начала

  for (let i = 0; i < countToShow && i < items.length; i++) {
    items[i].style.display = "flex";
  }

  var button = document.getElementById("show-more__serv-cost");
    if(items.length>countToShow){
        button.style.display = "block";
    }

  button.onclick = function() {
    var count = parseInt(document.getElementById("item-count__cost").value);
    console.log(count);
    var hiddenElements = [...items].filter(function(item) {
      return getComputedStyle(item).display === "none";
    });

    for (var i = 0; i < count; i++) {
      if (hiddenElements[i]) {
        hiddenElements[i].style.display = "flex";
      } else {
        button.style.display = "none";
      }
    }
  };
};
export default showCosts;
