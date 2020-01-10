const info = document.querySelector("#info");
info.addEventListener("click", () => {
  anime({
    targets: info,
    rotate: 180,
    duration: 250,
    easing: "easeInOutQuad"
  });
});
