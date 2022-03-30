let button = document.querySelector("button");
let loading = document.querySelector(".loading");
let send = document.querySelector(".send");

button.addEventListener("click", function () {
  loading.classList.add("show");
  setTimeout(function () {
    loading.classList.remove("show");
    send.classList.add("show");
    setTimeout(function () {
      send.classList.remove("show");
    }, 2000);
  }, 3000);
});
