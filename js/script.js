var main = document.querySelector(".main_container")
var plus = document.querySelector(".catalog");
var menu = document.querySelector(".catalog_menu");

var write_button = document.querySelector(".write_us");
var popup = document.querySelector(".modal");
var close_popup = popup.querySelector(".close_button");
var form = popup.querySelector(".form")
var login = popup.querySelector(".form_login");
var email = popup.querySelector(".form_email");
var text = popup.querySelector(".form_text");

var map = document.querySelector(".map");
var modal_map = document.querySelector(".modal_map");
var map_close = modal_map.querySelector(".map_close_button");

var btn = document.querySelector(".delivery_btn");
var btn1 = document.querySelector(".quality_btn");
var btn2 = document.querySelector(".credit_btn");
var info = document.querySelector(".delivery_def");
var info1 = document.querySelector(".quality");
var info2 = document.querySelector(".credit");

var card = document.querySelector(".product_img");
var card_hover = document.querySelector(".card_hover");

plus.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  menu.classList.add("catalog_show");
});

main.addEventListener("click", function (evt) {
  menu.classList.remove("catalog_show");
});


card.addEventListener("focus", function() {
  card_hover.classList.add("card_hover_show");
});

btn.addEventListener("click", function() {
  btn.classList.remove("service_btn");
  btn1.classList.remove("service_btn1");
  btn1.classList.add("service_btn");
  btn2.classList.remove("service_btn1");
  btn2.classList.add("service_btn");
  btn.classList.add("service_btn1");
  info.classList.add("delivery1");
  info1.classList.remove("quality_show");
  info2.classList.remove("credit_show");
  info.classList.add("delivery_show");
});

btn1.addEventListener("click", function() {
  btn1.classList.remove("service_btn");
  btn.classList.remove("service_btn1");
  btn.classList.add("service_btn");
  btn2.classList.remove("service_btn1");
  btn2.classList.add("service_btn");
  btn1.classList.add("service_btn1");
  info.classList.add("delivery1");
  info.classList.remove("delivery_show");
  info2.classList.remove("credit_show");
  info1.classList.add("quality_show");
});

btn2.addEventListener("click", function() {
  btn2.classList.remove("service_btn");
  btn.classList.remove("service_btn1");
  btn.classList.add("service_btn");
  btn1.classList.remove("service_btn1");
  btn1.classList.add("service_btn");
  btn2.classList.add("service_btn1");
  info.classList.add("delivery1");
  info.classList.remove("delivery_show");
  info1.classList.remove("quality_show");
  info2.classList.add("credit_show");
});

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


write_button.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.add("modal_show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close_popup.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.remove("modal_show");
  popup.classList.remove("modal_error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal_show")) {
      evt.preventDefault();
      popup.classList.remove("modal_show");
      popup.classList.remove("modal_error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal_error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal_error");
  } else {
    if (isStorageSupport) {
      evt.preventDefault();
      localStorage.setItem("login:", login.value);
      localStorage.setItem("email:", email.value);
      localStorage.setItem("text:", text.value);
      popup.classList.remove("modal_show");
    }
  }
});

map.addEventListener("click", function(evt){
  evt.preventDefault();
  modal_map.classList.add("modal_map_show");
});

map_close.addEventListener("click", function(evt){
  modal_map.classList.remove("modal_map_show");
});
