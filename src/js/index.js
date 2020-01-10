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
    height: [0, 160],
    duration: 1000,
    easing: "easeInOutQuad"
  });

  anime({
    targets: ".key",
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 700,
    easing: "easeInOutQuad",
    delay: anime.stagger(25, 150),
    complete: animateMain
  });
};
const animateMain = () => {
  anime({
    targets: "#main",
    translateX: [10, 0],
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
    translateX: [10, 0],
    opacity: [0, 1],
    duration: 700,
    easing: "easeInOutQuad",
    delay: anime.stagger(125)
  });
};
