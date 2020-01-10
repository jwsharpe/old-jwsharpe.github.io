const info = document.querySelector("#info");
const infoDescription = document.querySelector("#info-description");
const blackKeyInfo = document.querySelector("#black-key-info");
const whiteKeyInfo = document.querySelector("#white-key-info");

info.addEventListener("click", () => {
  anime({
    targets: [infoDescription, blackKeyInfo, whiteKeyInfo],
    opacity: APP.infoDisplayed ? 0 : 1,
    easing: "easeInOutQuad",
    duration: 250
  });
  anime({
    targets: info,
    rotate: APP.infoDisplayed ? 0 : 180,
    duration: 250,
    easing: "easeInOutQuad",
    complete: () => {
      APP.infoDisplayed = !APP.infoDisplayed;
    }
  });
});
