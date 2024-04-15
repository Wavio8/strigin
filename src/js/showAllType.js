const showAllTypes = () => {
  // Находим все кнопки и списки
  var buttons = document.querySelectorAll(".all__serv-type");

  var lists = document.querySelectorAll(".serv-type__block-item");

  // Применяем логику для каждой кнопки и списка
  buttons.forEach(function(button, index) {
    var items = lists[index].getElementsByClassName("item__serv-type");

    console.log(items);
    var visibleItemCount = 4; // Количество элементов, которые отображаются изначально
    var hiddenItemCount = items.length - visibleItemCount; // Количество скрытых элементов
    if (items.length <= visibleItemCount) {
      button.style.display = "none";
    }

    // Скрыть все элементы, кроме первых visibleItemCount
    for (var i = visibleItemCount; i < items.length; i++) {
      items[i].style.display = "none";
    }

    button.onclick = function() {
      // Отобразить следующие hiddenItemCount элементов
      for (var i = visibleItemCount; i < visibleItemCount + hiddenItemCount; i++) {
        if (items[i]) {
          items[i].style.display = "list-item";
        }
      }

      // Если все элементы отображены, скрыть кнопку
      if (visibleItemCount + hiddenItemCount >= items.length) {
        button.style.display = "none";
      }

      visibleItemCount += hiddenItemCount;
    };
  });
};
export default showAllTypes;
