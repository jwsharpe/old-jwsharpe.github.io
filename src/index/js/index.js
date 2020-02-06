window.onload = function() {
  MIDI.loadPlugin({
    soundfontUrl: "../dependencies/fatboy/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
    onsuccess: startIntro
  });
};

const animatePiano = () => {
  const keys = document.querySelector("#keys");
  const keysAnimDelay = 50;
  anime({
    targets: keys,
    height: [0, 160],
    duration: 1000,
    easing: "easeInOutQuad",
    delay: keysAnimDelay
  });

  anime({
    targets: "#info",
    translateY: [-5, 0],
    rotate: [-22, 0],

    opacity: [0, 1],
    duration: 1200,
    easing: "easeInOutQuad"
  });

  setTimeout(() => {
    keys.style = "padding: 2px 0 0 2px;border: 1px #000000 solid;";
  }, keysAnimDelay);

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
    targets: ["#main", "li", ".info-text", "#black-key-info"],
    translateX: [10, 0],
    opacity: [0, 1],
    duration: 500,
    easing: "easeInOutQuad"
  });
};

const startIntro = () => {
  animatePiano();
};
