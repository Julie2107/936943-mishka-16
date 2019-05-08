var linkOrderItem = document.querySelector(".top-item__button");
var popupOrderItem = document.querySelector(".modal-box");

linkOrderItem.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOrderItem.classList.add("modal-box--show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupOrderItem.classList.contains("modal-box--show")) {
        popupOrderItem.classList.remove("modal-box--show");
      }
    }
  });
