const info = document.querySelector("#info");
const infoDescription = document.querySelector("#info-description");
const blackKeyInfo = document.querySelector("#black-key-info");
const whiteKeyInfo = document.querySelector("#white-key-info");

info.addEventListener("click", () => {
  anime({
    targets: [infoDescription, blackKeyInfo, whiteKeyInfo],
    opacity: APP.infoDisplayed ? 1 : 0,
    easing: "easeInOutQuad",
    duration: 500
  });
  anime({
    targets: info,
    rotate: APP.infoDisplayed ? 0 : 180,
    duration: 500,
    easing: "easeInOutQuad",
    complete: () => {
      APP.infoDisplayed = !APP.infoDisplayed;
    }
  });
});
