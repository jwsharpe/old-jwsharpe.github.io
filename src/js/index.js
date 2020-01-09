window.onload = function() {
  MIDI.loadPlugin({
    soundfontUrl: "../dependencies/fatboy/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
    onsuccess: animatePiano
  });
};

const animatePiano = () => {
  anime({
    targets: "#keys",
    height: "160px",
    duration: 800,
    easing: "easeInOutQuad",
    delay: "150",
    complete: animateMain
  });
};
const animateMain = () => {
  anime({
    targets: "#main",
    translateX: [15, 0],
    opacity: [0, 1],
    duration: 700,
    easing: "easeInOutQuad",
    delay: "150",
    complete: animateActions
  });
};
const animateActions = () => {
  anime({
    targets: "li",
    translateX: [60, 0],
    opacity: [0, 1],
    duration: 700,
    easing: "easeInOutQuad",
    delay: anime.stagger(500)
  });
};
